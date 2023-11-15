<script setup lang="ts">
const props = defineProps<{
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
}>();

const fieldId = `form_${props.name}`;
</script>

<template>
  <div class="mb-3 lg:mb-6">
    <label class="font-600 block" :for="fieldId">{{ label }}</label>
    <textarea
      :disabled="disabled"
      class="block w-100% px-4 py-2 b-1px b-menu-border bg-menu-bg h-8em focus:outline-accent focus:outline-2px focus:outline-solid disabled:cursor-not-allowed"
      :id="fieldId"
      :name="name"
      :placeholder="placeholder"
      :required="required"
    />
  </div>
</template>
