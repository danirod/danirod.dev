<script setup lang="ts">
import "@unocss/reset/tailwind-compat.css";
import "~/assets/global.css";

const i18nHead = useLocaleHead({
  addSeoAttributes: true,
  addDirAttribute: true,
});
const { t } = useI18n();

const meta = {
  title: t("meta.title"),
  description: t("meta.description"),
  url: "https://danirod.dev",
  icon: "https://danirod.dev/danirod_icon.png",
};

useHead({
  title: meta.title,
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs!.lang,
    dir: i18nHead.value.htmlAttrs!.dir,
  },
  link: [
    ...(i18nHead.value.link || []),
    { rel: "icon", type: "image/png", href: meta.icon },
  ],
  meta: [
    ...(i18nHead.value.meta || []),
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
