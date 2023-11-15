<script setup>
const { t } = useI18n();

const disabled = ref(false);
const error = ref(null);
const done = ref(false);

async function onMessage(payload) {
  disabled.value = true;
  error.value = null;
  done.value = false;

  try {
    const response = await $fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: payload,
    });

    done.value = true;
  } catch (e) {
    if (e.data?.message) {
      if (e.data.message.includes("fetch failed")) {
        error.value = t("ajax_form.server_error");
      } else {
        error.value = e.data.message;
      }
    }
  } finally {
    disabled.value = false;
  }
}
</script>

<template>
  <ContactForm :disabled="disabled" @message="onMessage" />
  <p v-if="done" class="c-accent-color font-600 mt-4">
    🚀 {{ $t("ajax_form.message_delivered") }}
  </p>
  <p v-if="error" class="c-danger-color font-600 mt-4">
    ❌ {{ $t("ajax_form.something_went_wrong") }} {{ error }}
  </p>
</template>
