<template>
  <footer class="my-10 md:my-20 container">
    <hr />
    <p class="font-size-copy lh-copy mb-4 md:mb-8">
      <strong class="font-600">Colophon</strong>: This page is powered by Nuxt
      and looks nice thanks to UnoCSS.<br />
      No WordPress instances were harmed during the production of this site.<br />
      Please do not print this page, it is bad for the planet (+ didn't test the
      CSS).
    </p>
    <div
      class="opacity-90 font-size-copy lh-copy text-center flex flex-col md:text-start md:flex-row gap-5 md:flex-justify-between md:flex-items-end"
    >
      <p class="font-600">
        Copyright © {{ new Date().getFullYear() }} Dani Rodríguez
      </p>
      <p><span class="madein">Made in Spain</span></p>
    </div>
  </footer>
</template>

<style scoped>
.madein {
  padding-left: 1.7em;
  background: url("~/assets/footer-madein.png");
  background-repeat: no-repeat;
  background-size: 1.5em 1em;
  background-position: left center;
}
</style>
