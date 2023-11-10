<template>
  <div
    class="container my-5 sm:flex gap-4 md:gap-6 lg:gap-15 xl:gap-20 2xl:gap-30 flex-items-center md:flex-row-reverse"
  >
    <figure class="mx-auto md:block w-30 md:w-32 lg:w-55 xl:w-70 2xl:w-80">
      <img
        class="lt-md:aspect-ratio-1 w-100% object-upper-half object-cover"
        src="~/assets/dani_photo.jpg"
        alt="A portrait of Dani on his computer"
        width="200"
      />
    </figure>
    <div class="flex-1">
      <div class="text-center sm:text-left">
        <!-- To readers: These are <p> because semantic HTML is important. -->
        <p
          class="font-size-9 md:font-size-10 lg:font-size-12 xl:font-size-14 2xl:font-size-18 lh-125%"
        >
          <strong>Dani Rodríguez</strong>
        </p>
        <p
          class="c-accent font-size-7 md:font-size-8 xl:font-size-9 2xl:font-size-12 lh-100%"
        >
          <strong>Freelance Web Developer</strong>
        </p>
      </div>

      <p class="font-size-hero font-500 lh-hero mt-3 md:mt-6">
        Making the world better by creating great products and apps that provide
        value. Through the power of the Web, I can help you or your company
        offer great experiences to your users and provide services to your
        customers.
      </p>
    </div>
  </div>
</template>

<style scoped lang="postcss">
strong {
  @apply font-600;
}
</style>
