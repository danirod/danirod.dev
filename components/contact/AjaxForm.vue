<script setup>
import { useChallengeV3 } from "vue-recaptcha";
const { t } = useI18n();
useRecaptchaProvider();
const { execute } = useChallengeV3("contact");

const disabled = ref(false);
const error = ref(null);
const done = ref(false);

async function onMessage(payload) {
  disabled.value = true;
  error.value = null;
  done.value = false;

  const captcha = await execute();
  payload.set("captcha", captcha);
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
      } else if (e.data.message.includes("captcha")) {
        error.value = t("ajax_form.captcha_error");
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
  <ContactForm :disabled="disabled || done" @message="onMessage" />
  <p v-if="done" class="mb-4 c-accent-color font-600 mt-4">
    🚀 {{ $t("ajax_form.message_delivered") }}
  </p>
  <p v-if="error" class="mb-4 c-danger-color font-600 mt-4">
    ❌ {{ $t("ajax_form.something_went_wrong") }} {{ error }}
  </p>
  <div class="font-size-footer lh-footer">
    <p>
      This site is protected by reCAPTCHA and the Google
      <a href="https://policies.google.com/privacy">Privacy Policy</a> and
      <a href="https://policies.google.com/terms">Terms of Service</a> apply.
    </p>
  </div>
</template>

<style>
.grecaptcha-badge {
  visibility: hidden !important;
}
</style>
