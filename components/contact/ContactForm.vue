<script setup lang="ts">
const { locale } = useI18n();

defineProps<{
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: "message", data: FormData): void;
}>();

const handleSubmit = (e: Event) => {
  const target: HTMLFormElement = e.target as HTMLFormElement;
  const data = new FormData(target);
  emit("message", data);
};
</script>

<template>
  <form
    ref="formNode"
    enctype="multipart/form-data"
    @submit.prevent="handleSubmit"
    class="mt-3 lg:mt-5 font-size-copy lh-copy lg:me-20"
    action="/api/contact"
    method="POST"
  >
    <input type="hidden" name="locale" :value="locale" />

    <ContactInput
      :disabled="disabled"
      :required="true"
      name="contact_name"
      :label="$t('contact_form.name.label')"
      :placeholder="$t('contact_form.name.placeholder')"
    />
    <ContactInput
      :disabled="disabled"
      :required="true"
      name="contact_email"
      type="email"
      :label="$t('contact_form.email.label')"
      :placeholder="$t('contact_form.email.placeholder')"
    />
    <ContactInput
      :disabled="disabled"
      name="message_subject"
      :label="$t('contact_form.subject.label')"
      :placeholder="$t('contact_form.subject.placeholder')"
    />
    <ContactText
      :disabled="disabled"
      :required="true"
      name="message_body"
      :label="$t('contact_form.message.label')"
      :placeholder="$t('contact_form.message.placeholder')"
    />
    <ContactSubmit :disabled="disabled">{{
      $t("contact_form.send")
    }}</ContactSubmit>
  </form>
</template>
