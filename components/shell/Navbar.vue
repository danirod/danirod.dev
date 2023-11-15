<script setup>
// Too lazy to markup one by one.
const elements = [
  ["homepage", "#top"],
  ["services", "#services"],
  ["skills", "#skills"],
  ["contact", "#contact"],
];

// Locales
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const availableLocales = computed(() =>
  locales.value.filter((l) => l.code !== locale.value)
);
</script>

<template>
  <ul
    class="z-1 sm:me--6 lt-sm:absolute overflow-hidden lt-sm:font-size-5 top-2 right-0 lt-sm:bg-menu-bg b-menu-border b-1px sm:b-none lt-sm:rd-10px flex-justify-end text-right flex flex-col sm:flex-row font-size-copy lh-copy"
  >
    <li
      class="overflow-hidden sm:rd-10px"
      v-for="[title, url] in elements"
      :key="url"
    >
      <a class="block px-6 py-3 c-inherit hover:bg-menu-hover" :href="url">{{
        $t("navbar." + title)
      }}</a>
    </li>
    <li
      class="overflow-hidden sm:rd-10px"
      v-for="locale in availableLocales"
      :key="locale.code"
    >
      <NuxtLink
        class="block px-6 py-3 sm:b-l-1px sm:b-l-1px sm:b-l-current c-inherit hover:bg-menu-hover"
        :to="switchLocalePath(locale.code)"
      >
        {{ locale.name }}
      </NuxtLink>
    </li>
  </ul>
</template>
