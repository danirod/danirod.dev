<template>
  <div class="lh-lead mt-4 lg:mt-8 xl:mt-12 text-center">
    <a
      href="#contact"
      class="rounded font-500 px-12 py-3 bg-accent text-accent-contrast font-size-hero"
    >
      {{ $t("frontpage_blocks.available.available_for_projects") }}
    </a>
  </div>
  <p class="lh-lead mt-2 lg:mt-4 xl:mt-6 text-center">
    <a href="mailto:dani@danirod.es">{{
      $t("frontpage_blocks.available.send_mail")
    }}</a
    >,
    <a href="https://linkedin.com/in/danirod">{{
      $t("frontpage_blocks.available.connect_linkedin")
    }}</a>
    {{ $t("frontpage_blocks.available.or") }}
    <a href="https://www.malt.es/profile/danirod">{{
      $t("frontpage_blocks.available.connect_malt")
    }}</a
    >.
  </p>
</template>
