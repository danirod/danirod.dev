<script setup lang="ts">
defineProps<{
  media?: "left" | "right";
}>();
</script>

<template>
  <div class="section">
    <picture class="aside">
      <slot name="picture" />
    </picture>
    <div class="main">
      <slot />
    </div>
  </div>
</template>
