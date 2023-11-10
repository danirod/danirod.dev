// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/google-fonts", "@unocss/nuxt"],
  postcss: {
    plugins: {
      "@unocss/postcss": {},
    },
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
    },
  },
});
