interface MessagePayload {
  locale?: string;
  contact_name: string;
  contact_email: string;
  message_subject?: string;
  message_body: string;
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

export default defineEventHandler(async (event) => {
  const formData = await readMultipartFormData(event);
  const body: Record<string, string> = {};
  formData?.forEach(({ name, data }) => {
    if (name) {
      body[name] = data.toString();
    }
  });

  if (validateBody(body)) {
    console.log(body);

    const isXHR = event.headers.get("Accept")?.includes("application/json");
    if (isXHR) {
      return {
        status: "ok",
      };
    } else {
      await sendRedirect(event, "/contact/success", 302);
    }
  } else {
    throw createError({
      message:
        "This message has missing some information that you should provide.",
      status: 422,
    });
  }
});
