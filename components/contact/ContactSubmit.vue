<script setup lang="ts">
const props = defineProps<{
  disabled?: boolean;
}>();
</script>

<template>
  <button
    :disabled="disabled"
    type="submit"
    class="mb-4 w-100% p-2 bg-accent enabled:hover:bg-accent-darker c-accent-contrast enabled:active:translate-y-2px disabled:cursor-not-allowed disabled:bg-gray"
  >
    <slot />
  </button>
</template>
