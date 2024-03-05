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
  locales.value.filter((l) => l.code !== locale.value),
);
</script>

<template>
  <ul
    class="z-1 sm:ms-2 sm:me--3 lg:me--5 lt-sm:absolute overflow-hidden lt-sm:font-size-5 top-2 right-0 lt-sm:bg-menu-bg b-menu-border b-1px sm:b-none lt-sm:rd-10px flex flex-justify-between flex-col sm:flex-row font-size-copy lh-copy"
  >
    <div class="flex flex-col sm:flex-row">
      <li
        class="overflow-hidden sm:rd-10px"
        v-for="[title, url] in elements"
        :key="url"
      >
        <a
          class="block lt-sm:px-5 sm:px-2 md:px-3 lg:px-4 py-2 c-inherit hover:bg-menu-hover"
          :href="url"
          >{{ $t("navbar." + title) }}</a
        >
      </li>
    </div>
    <div class="flex flex-col sm:flex-row">
      <li
        class="overflow-hidden sm:rd-10px"
        v-for="locale in availableLocales"
        :key="locale.code"
      >
        <NuxtLink
          class="block lt-sm:px-5 sm:px-2 md:px-3 lg:px-4 py-2 c-inherit hover:bg-menu-hover"
          :to="switchLocalePath(locale.code)"
        >
          {{ locale.name }}
        </NuxtLink>
      </li>
    </div>
  </ul>
</template>
