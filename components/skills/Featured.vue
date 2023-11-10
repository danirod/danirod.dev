<script setup lang="ts">
defineProps<{
  media?: "left" | "right";
}>();
</script>

<template>
  <div
    :class="[
      'my-10 sm:my-5 md:my-7.5 lg:my-10 flex flex-items-center gap-3 sm:gap-9 xl:gap-15 font-size-copy lh-copy flex-col',
      {
        '2xl:ms-60 2xl:me-30 sm:flex-row': media === 'left',
        '2xl:me-60 2xl:ms-30 sm:flex-row-reverse': media === 'right',
      },
    ]"
  >
    <picture class="w-140px sm:w-100px lg:w-180px">
      <slot name="picture" />
    </picture>
    <div class="flex-1">
      <slot />
    </div>
  </div>
</template>
