<script setup lang="ts">
const open: Ref<boolean> = ref(false);

const onClickNavigation = () => {
  console.log("click");
  open.value = !open.value;
};
</script>

<template>
  <header
    class="bg-menu-bg relative z-1 b-b-1px b-b-menu-border sticky top-0 py-3 md:py-4 xl:py-5"
  >
    <div class="container">
      <h1 class="title hidden">{{ $t("header.title") }}</h1>
      <nav class="navigation text-right">
        <button
          @click="onClickNavigation()"
          class="i-simple-line-icons:menu m-2 w-8 h-8 sm:hidden"
          :title="$t('header.toggle_navigation')"
        ></button>
        <div :class="['sm-block relative', { hidden: !open }]">
          <ShellNavbar />
        </div>
      </nav>
      <hr />
    </div>
  </header>
</template>

<style></style>
