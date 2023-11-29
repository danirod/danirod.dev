import Mailgun, { MailgunMessageData } from "mailgun.js";
import FormData from "form-data";
import type { EventHandlerRequest, H3Event } from "h3";
import { IMailgunClient } from "mailgun.js/Interfaces";

/* Just a way to avoid hardcoding process.env to the integration code. */
const mailCreds = {
  key: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_API_DOMAIN,
  from: process.env.MAILGUN_API_FROM,
  to: process.env.MAILGUN_API_TO,
  endpoint: process.env.MAILGUN_API_ENDPOINT || "https://api.mailgun.net",
};

let mg: IMailgunClient | null = null;

if (mailCreds.key && mailCreds.domain && mailCreds.from && mailCreds.to) {
  /* Create the MailGun client. */
  const mailgun = new Mailgun(FormData);
  mg = mailgun.client({
    key: mailCreds.key,
    username: "api",
    url: mailCreds.endpoint,
  });
}

/* Type for the message payload. */
interface MessagePayload {
  contact_name: string;
  contact_email: string;
  message_subject?: string;
  message_body: string;
  locale?: string;
}

function validateBody(body: unknown): body is MessagePayload {
  function validatesPresence(body: unknown): body is MessagePayload {
    const requiredKeys = ["contact_name", "contact_email", "message_body"];
    if (typeof body === "object") {
      const objectBody = body as Record<string, unknown>;
      return requiredKeys.every(
        (key) =>
          key in objectBody &&
          typeof objectBody[key] === "string" &&
          objectBody[key] !== ""
      );
    }
    return false;
  }

  function validatesLength(body: MessagePayload): boolean {
    const lengths: Array<[keyof MessagePayload, number]> = [
      ["contact_name", 128],
      ["contact_email", 128],
      ["message_subject", 128],
    ];
    return lengths
      .filter(([k, _]) => k in body)
      .every(([k, len]) => body[k]!.length <= len);
  }

  function validatesEmails(body: MessagePayload): boolean {
    return body.contact_email.includes("@");
  }

  return (
    validatesPresence(body) && validatesLength(body) && validatesEmails(body)
  );
}

async function flattenMultipartData(
  event: H3Event<EventHandlerRequest>
): Promise<Record<string, string>> {
  const formData = await readMultipartFormData(event);
  const body: Record<string, string> = {};
  formData?.forEach(({ name, data }) => {
    if (name) {
      body[name] = data.toString();
    }
  });
  return body;
}

function emailPayload(body: MessagePayload): MailgunMessageData {
  return {
    from: `${
      body.contact_name || "danirod.dev Contact Form"
    } <noreply@danirod.dev>`,
    "h:Reply-To": body.contact_email,
    to: [mailCreds.to!],
    subject: `[${
      body.locale ? `Contact Form - ${body.locale}` : "Contact Form"
    }] ${body.message_subject}`,
    text: body.message_body,
  };
}

export default defineEventHandler(async (event) => {
  const body = await flattenMultipartData(event);

  if (!validateBody(body)) {
    throw createError({
      message:
        "This message has missing some information that you should provide.",
      status: 422,
    });
  }

  if (mg == null) {
    throw createError({
      message: "Server is misconfigured and does not accept email",
      status: 502,
    });
  }

  try {
    await mg.messages.create(mailCreds.domain!, emailPayload(body));
  } catch (e) {
    console.error(e);
    throw createError({
      message: "Server rejected email",
      status: 502,
    });
  }

  const isXHR = event.headers.get("Accept")?.includes("application/json");
  if (isXHR) {
    return {
      status: "ok",
    };
  } else {
    if (body.locale && ["en", "es"].includes(body.locale)) {
      await sendRedirect(event, `/${body.locale}/contact/success`, 302);
    } else {
      await sendRedirect(event, "/contact/success", 302);
    }
  }
});
