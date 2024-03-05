<script setup lang="ts">
const open: Ref<boolean> = ref(false);

const onClickNavigation = () => {
  open.value = !open.value;
};
</script>

<template>
  <header
    class="bg-menu-bg relative z-1 b-b-1px b-b-menu-border sticky top-0 py-2 md:py-3 xl:py-3"
  >
    <div class="container">
      <h1 class="title hidden">{{ $t("header.title") }}</h1>
      <nav class="navigation flex flex-justify-between">
        <a
          href="#top"
          class="navbar-title font-size-copy py-2 c-inherit font-500 lh-copy lt-sm:font-size-6"
          >Dani Rodríguez</a
        >
        <div class="text-right flex-1">
          <button
            @click="onClickNavigation()"
            class="justify-self-end i-simple-line-icons:menu m-2 w-6 h-6 sm:hidden"
            :title="$t('header.toggle_navigation')"
          ></button>
          <div :class="['sm-block relative', { hidden: !open }]">
            <ShellNavbar />
          </div>
        </div>
      </nav>
      <hr />
    </div>
  </header>
</template>
