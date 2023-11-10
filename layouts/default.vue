<script setup lang="ts">
import "@unocss/reset/tailwind-compat.css";
import "~/assets/global.css";

const meta = {
  title: "Dani Rodríguez, Freelance Web Developer",
  description:
    "I am a freelance software developer and this is my professional webpage. Which essentially means I can give you code in exchange for money.",
  url: "https://danirod.dev",
  icon: "/danirod_icon.png",
};

useHead({
  title: meta.title,
  htmlAttrs: {
    lang: "en",
  },
  link: [{ rel: "icon", type: "image/png", href: meta.icon }],
  meta: [
    { name: "description", content: meta.description },
    { name: "og:title", content: meta.title },
    { name: "og:description", content: meta.description },
    { name: "og:url", content: meta.url },
    { name: "og:image", content: meta.icon },
    { name: "twitter:title", content: meta.title },
    { name: "twitter:description", content: meta.description },
    { name: "twitter:image", content: meta.icon },
    { name: "twitter:card", content: "summary" },
  ],
  bodyAttrs: {
    class: "cursor-auto",
  },
});
</script>

<template>
  <ShellHeader />
  <slot />
  <ShellFooter />
</template>
