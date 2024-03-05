<template>
  <div class="mt-10 sm:mt-20 md:mt-30 mb-10 container relative">
    <div id="contact" class="top--20 md:top--25 lg:top--30 absolute"></div>
    <hr class="block w-50% h-6px b-foreground b-b-1px b-b-1px lg:ms-50% mb-3" />
    <div class="flex flex-col lg:flex-row gap-10 lg:gap-0">
      <div class="flex-1">
        <h2 class="font-size-subheader lh-subheader font-600">
          {{ $t("frontpage_blocks.contact.get_in_touch") }}
        </h2>
        <ContactAjaxForm />
      </div>
      <div class="flex-1 font-size-copy lh-copy text-copy">
        <p>
          <strong>{{ $t("frontpage_blocks.contact.dont_use_form") }}</strong>
          {{ $t("frontpage_blocks.contact.you_can_contact_me") }}
          <a href="mailto:dani@danirod.es">dani@danirod.es</a>
          {{ $t("frontpage_blocks.contact.or_send_me_a_message") }}
          <a href="https://linkedin.com/in/danirod">{{
            $t("frontpage_blocks.contact.my_linkedin_profile")
          }}</a>
          {{ $t("frontpage_blocks.contact.or") }}
          <a href="https://www.malt.es/profile/danirod">{{
            $t("frontpage_blocks.contact.my_malt_profile")
          }}</a
          >, {{ $t("frontpage_blocks.contact.get_back_to_you") }}.
        </p>
      </div>
    </div>
  </div>
</template>
