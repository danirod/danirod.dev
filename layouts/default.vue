<script setup lang="ts">
import "@unocss/reset/tailwind-compat.css";
import "~/assets/global.css";

useHead({
  title: "Dani Rodríguez, Freelance Web Developer",
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
