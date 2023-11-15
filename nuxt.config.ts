// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/google-fonts",
    "@unocss/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/plausible",
  ],
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
