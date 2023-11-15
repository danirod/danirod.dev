<template>
  <FrontpageBlock id="services" :title="$t('frontpage_blocks.services.title')">
    <FrontpageBlockLead
      >{{ $t("frontpage_blocks.services.lead") }}
    </FrontpageBlockLead>

    <ServicesColumns class="text-copy">
      <ServicesColumn>
        <ServicesColumnHeader>{{
          $t("frontpage_blocks.services.web_dev.title")
        }}</ServicesColumnHeader>
        <p>{{ $t("frontpage_blocks.services.web_dev.p1") }}</p>
        <p>{{ $t("frontpage_blocks.services.web_dev.p2") }}</p>
      </ServicesColumn>

      <ServicesColumn>
        <ServicesColumnHeader>{{
          $t("frontpage_blocks.services.pwa_dev.title")
        }}</ServicesColumnHeader>
        <p>{{ $t("frontpage_blocks.services.pwa_dev.p1") }}</p>
        <p>{{ $t("frontpage_blocks.services.pwa_dev.p2") }}</p>
      </ServicesColumn>
    </ServicesColumns>
  </FrontpageBlock>
</template>
