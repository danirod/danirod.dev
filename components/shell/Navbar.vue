<script setup>
// Too lazy to markup one by one.
const elements = [
  ["Homepage", "/#top"],
  ["Services", "/#services"],
  ["Skills", "/#skills"],
  ["Contact", "/#contact"],
];
</script>

<template>
  <ul
    class="z-1 sm:me--6 lt-sm:absolute overflow-hidden lt-sm:font-size-5 top-2 right-0 lt-sm:bg-menu-bg b-menu-border b-1px sm:b-none lt-sm:rd-10px flex-justify-end text-right flex flex-col sm:flex-row font-size-copy lh-copy"
  >
    <li class="overflow-hidden sm:rd-10px" v-for="[title, url] in elements">
      <a class="block px-6 py-3 c-inherit hover:bg-menu-hover" :href="url">{{
        title
      }}</a>
    </li>
  </ul>
</template>
