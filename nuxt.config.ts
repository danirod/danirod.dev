// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-09-01",
  devtools: { enabled: false },
  modules: [
    "@nuxt/fonts",
    "@unocss/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/plausible",
    "@nuxtjs/robots",
    "@nuxt/image",
  ],
  runtimeConfig: {
    public: {
      recaptcha: {
        v3SiteKey: process.env.RECAPTCHA_SITE_KEY,
      },
    },
  },
  image: {
    format: ["webp", "jpeg"],
    screens: {
      sm: 600,
      md: 720,
      lg: 960,
      xl: 1200,
      "2xl": 1440,
    },
    densities: [1, 2],
    quality: 85,
  },
  robots: {
    rules: {
      UserAgent: "*",
      Disallow: [
        "/contact/success",
        "/en/contact/success",
        "/es/contact/success",
      ],
    },
  },
  postcss: {
    plugins: {
      "@unocss/postcss": {},
    },
  },
  i18n: {
    baseUrl: "https://danirod.dev",
    lazy: true,
    strategy: "prefix",
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: false,
      redirectOn: "root",
    },
    langDir: "locales",
    locales: [
      {
        code: "es",
        language: "es",
        name: "Español",
        file: "es.json",
      },
      {
        code: "en",
        language: "en",
        name: "English",
        file: "en.json",
      },
    ],
  },
  fonts: {
    families: [
      {
        name: "Inter",
        provider: "google",
        weights: [400, 500, 600, 700],
        styles: ["normal"],
      },
    ],
  },
  plausible: {
    apiHost: "https://danirod.dev",
  },
});
