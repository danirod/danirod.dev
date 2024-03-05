<template>
  <div
    class="container my-6 md:my-9 lg:my-12 xl:my-15 2xl:my-18 sm:flex gap-4 md:gap-6 lg:gap-15 xl:gap-20 2xl:gap-30 flex-items-center md:flex-row-reverse"
  >
    <figure class="mx-auto md:block w-30 md:w-32 lg:w-55 xl:w-70 2xl:w-80">
      <NuxtPicture
        :imgAttrs="{
          class: 'lt-md:aspect-ratio-1 w-100% object-upper-half object-cover',
        }"
        src="/dani_photo.jpg"
        :alt="$t('frontpage_blocks.hero.image_alt')"
        sizes="300px md:330px lg:550px xl:700px 2xl:800px"
      />
    </figure>
    <div class="flex-1">
      <div class="text-center sm:text-left">
        <!-- To readers: These are <p> because semantic HTML is important. -->
        <p
          class="font-size-9 md:font-size-10 lg:font-size-12 xl:font-size-14 2xl:font-size-18 lh-125%"
        >
          <strong>{{ $t("frontpage_blocks.hero.title") }}</strong>
        </p>
        <p
          class="c-accent font-size-7 md:font-size-8 xl:font-size-9 2xl:font-size-12 lh-100%"
        >
          <strong>{{ $t("frontpage_blocks.hero.subtitle") }}</strong>
        </p>
      </div>

      <p class="font-size-hero font-500 lh-hero mt-3 md:mt-6">
        {{ $t("frontpage_blocks.hero.lead") }}
      </p>

      <HeroAvailable />
    </div>
  </div>
</template>

<style scoped lang="postcss">
strong {
  @apply font-600;
}
</style>
