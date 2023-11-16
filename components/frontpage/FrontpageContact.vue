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
          {{ $t("frontpage_blocks.contact.email.you_can_contact_me") }}
          <a href="mailto:dani@danirod.es">dani@danirod.es</a>
          {{ $t("frontpage_blocks.contact.email.or_send_me_a_message") }}
          <a href="https://linkedin.com/in/danirod">{{
            $t("frontpage_blocks.contact.email.my_linkedin_profile")
          }}</a
          >. {{ $t("frontpage_blocks.contact.email.get_back_to_you") }}.
        </p>

        <p class="lg:lh-7 2xl:lh-9">
          <small class="font-size-4 lg:font-size-4.5 2xl:font-size-5.5">
            {{ $t("frontpage_blocks.contact.discord.discord_user") }}
            <strong class="font-600">@danirod</strong>
            {{ $t("frontpage_blocks.contact.discord.talk_via_dm") }}.
            {{ $t("frontpage_blocks.contact.discord.unsolicited") }}
          </small>
        </p>
      </div>
    </div>
  </div>
</template>
