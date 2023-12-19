<template>
  <div
    class="bg-gray-300 text-accent-contrast font-size-hero lh-hero text-center"
  >
    <div class="container py3 sm:flex flex-justify-between flex-items-center">
      <p>{{ $t("frontpage_blocks.not_available.currently_not_available") }}</p>
      <p class="lt-sm:mt-5 lt-sm:mb-2">
        <a class="sm:block btn-brutal" href="#contact">{{
          $t("frontpage_blocks.not_available.try_anyway")
        }}</a>
      </p>
    </div>
  </div>
</template>
