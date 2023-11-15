<template>
  <div
    class="bg-accent text-accent-contrast font-size-hero lh-hero text-center"
  >
    <div class="container py3 sm:flex flex-justify-between flex-items-center">
      <p>{{ $t("frontpage_blocks.available.currently_available") }}</p>
      <p class="lt-sm:mt-5 lt-sm:mb-2">
        <a class="sm:block btn-brutal" href="#contact">{{
          $t("frontpage_blocks.available.get_in_touch")
        }}</a>
      </p>
    </div>
  </div>
</template>
