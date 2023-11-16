<script setup lang="ts">
const localePath = useLocalePath();
definePageMeta({
  layout: "headless",
});
</script>

<template>
  <div class="container mt-4 lg:mt-12">
    <h2 class="font-size-lead lh-lead font-700 mb-4">
      {{ $t("contact_success.message_delivered") }}
    </h2>
    <div class="font-size-copy lh-copy text-copy">
      <p>
        {{ $t("contact_success.thank_you") }}
      </p>
      <p>
        <NuxtLink :to="localePath({ name: 'index' })">{{
          $t("contact_success.back")
        }}</NuxtLink
        >.
      </p>
    </div>
  </div>
</template>
