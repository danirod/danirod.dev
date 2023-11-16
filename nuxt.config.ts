// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/google-fonts",
    "@unocss/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/plausible",
    "@nuxtjs/robots",
    "@nuxt/image",
  ],
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
    langDir: "lang",
    locales: [
      {
        code: "es",
        iso: "es",
        name: "Español",
        file: "es.json",
      },
      {
        code: "en",
        iso: "en",
        name: "English",
        file: "en.json",
      },
    ],
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
    },
  },
  plausible: {
    apiHost: "https://danirod.dev",
  },
});
