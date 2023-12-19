<template>
  <footer class="my-10 md:my-20 container">
    <hr />
    <p class="font-size-copy lh-copy mb-4 md:mb-8 xl:w-70%">
      <strong class="font-600">{{ $t("footer.colophon") }}</strong
      >: {{ $t("footer.powered_by") }}. {{ $t("footer.wordpress") }}.
      {{ $t("footer.do_not_print") }}. {{ $t("footer.this_is_open_source") }}:
      <a href="https://github.com/danirod/danirod.dev" target="_blank">{{
        $t("footer.check_out_the_code")
      }}</a>
    </p>
    <div
      class="opacity-90 font-size-copy lh-copy text-center flex flex-col md:text-start md:flex-row gap-5 md:flex-justify-between md:flex-items-end"
    >
      <p class="font-600">
        {{ $t("footer.copyright", { year: new Date().getFullYear() }) }}
      </p>
      <p>
        <span class="madein">{{ $t("footer.made_in_spain") }}</span>
      </p>
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
