interface Grecaptcha {
  ready(callback: () => void): void;
  execute(siteKey: string, options: { action: string }): Promise<string>;
}

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

export function useRecaptcha() {
  const config = useRuntimeConfig();
  const siteKey = config.public.recaptcha.v3SiteKey;

  useHead({
    script: siteKey
      ? [
          {
            src: `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`,
            async: true,
            defer: true,
          },
        ]
      : [],
  });

  async function execute(action: string) {
    if (!siteKey) {
      throw new Error("RECAPTCHA_SITE_KEY is not configured");
    }

    const grecaptcha = await new Promise<Grecaptcha>((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error("reCAPTCHA failed to load"));
      }, 10_000);

      const waitForScript = () => {
        if (window.grecaptcha) {
          clearTimeout(timeout);
          window.grecaptcha.ready(() => resolve(window.grecaptcha!));
          return;
        }
        setTimeout(waitForScript, 50);
      };

      waitForScript();
    });

    return grecaptcha.execute(siteKey, { action });
  }

  return { execute };
}
