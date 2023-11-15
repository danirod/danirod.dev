<template>
  <footer class="my-10 md:my-20 container">
    <hr />
    <p class="font-size-copy lh-copy mb-4 md:mb-8">
      <strong class="font-600">{{ $t("footer.colophon") }}</strong
      >: {{ $t("footer.powered_by") }}<br />
      {{ $t("footer.wordpress") }}<br />
      {{ $t("footer.do_not_print") }}
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
