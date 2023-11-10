<script setup lang="ts">
defineProps<{
  title: string;
  id: string;
}>();
</script>

<template>
  <div class="container relative pt-5 xl:pt-10 2xl:pt-20">
    <div :id="id" class="top--18 lg:top--22 absolute"></div>
    <h2 class="font-size-header lh-header font-700 mb-2 md:text-center">
      {{ title }}
    </h2>
    <slot />
  </div>
</template>
