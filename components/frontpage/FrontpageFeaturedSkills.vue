<template>
  <FrontpageBlock
    id="skills"
    :title="$t('frontpage_blocks.featured_skills.title')"
  >
    <FrontpageBlockLead
      >{{ $t("frontpage_blocks.featured_skills.lead") }}
    </FrontpageBlockLead>

    <SkillsFeatured media="left">
      <template #picture>
        <source
          srcset="~/assets/featured/rails@dark.svg"
          media="(prefers-color-scheme: dark)"
          type="image/svg+xml"
        />
        <source
          srcset="~/assets/featured/rails@dark.png"
          media="(prefers-color-scheme: dark)"
          type="image/png"
        />
        <source srcset="~/assets/featured/rails.svg" type="image/svg+xml" />
        <source srcset="~/assets/featured/rails.png" type="image/png" />
        <img
          src="~/assets/featured/rails.png"
          width="240"
          :alt="$t('frontpage_blocks.featured_skills.rails.alt')"
        />
      </template>
      <SkillsTitle>{{
        $t("frontpage_blocks.featured_skills.rails.title")
      }}</SkillsTitle>
      <p>
        {{ $t("frontpage_blocks.featured_skills.rails.description") }}
      </p>
    </SkillsFeatured>

    <SkillsFeatured media="right">
      <template #picture>
        <source
          srcset="~/assets/featured/nodejs@dark.svg"
          media="(prefers-color-scheme: dark)"
          type="image/svg+xml"
        />
        <source
          srcset="~/assets/featured/nodejs@dark.png"
          media="(prefers-color-scheme: dark)"
          type="image/png"
        />
        <source srcset="~/assets/featured/nodejs.svg" type="image/svg+xml" />
        <source srcset="~/assets/featured/nodejs.png" type="image/png" />
        <img
          src="~/assets/featured/nodejs.png"
          width="240"
          :alt="$t('frontpage_blocks.featured_skills.nodejs.alt')"
        />
      </template>
      <SkillsTitle>{{
        $t("frontpage_blocks.featured_skills.nodejs.title")
      }}</SkillsTitle>
      <p>
        {{ $t("frontpage_blocks.featured_skills.nodejs.description") }}
      </p>
    </SkillsFeatured>

    <SkillsFeatured media="left">
      <template #picture>
        <source
          srcset="~/assets/featured/nuxt@dark.svg"
          media="(prefers-color-scheme: dark)"
          type="image/svg+xml"
        />
        <source
          srcset="~/assets/featured/nuxt@dark.png"
          media="(prefers-color-scheme: dark)"
          type="image/png"
        />
        <source srcset="~/assets/featured/nuxt.svg" type="image/svg+xml" />
        <source srcset="~/assets/featured/nuxt.png" type="image/png" />
        <img
          src="~/assets/featured/nuxt.png"
          width="240"
          :alt="$t('frontpage_blocks.featured_skills.nuxt.alt')"
        />
      </template>
      <SkillsTitle>{{
        $t("frontpage_blocks.featured_skills.nuxt.title")
      }}</SkillsTitle>
      <p>
        {{ $t("frontpage_blocks.featured_skills.nuxt.description") }}
      </p>
    </SkillsFeatured>

    <SkillsFeatured media="right">
      <template #picture>
        <source
          srcset="~/assets/featured/go@dark.svg"
          media="(prefers-color-scheme: dark)"
          type="image/svg+xml"
        />
        <source
          srcset="~/assets/featured/go@dark.png"
          media="(prefers-color-scheme: dark)"
          type="image/png"
        />
        <source srcset="~/assets/featured/go.svg" type="image/svg+xml" />
        <source srcset="~/assets/featured/go.png" type="image/png" />
        <img
          src="~/assets/featured/go.png"
          width="240"
          :alt="$t('frontpage_blocks.featured_skills.go.alt')"
        />
      </template>
      <SkillsTitle>{{
        $t("frontpage_blocks.featured_skills.go.title")
      }}</SkillsTitle>
      <p>
        {{ $t("frontpage_blocks.featured_skills.go.description") }}
      </p>
    </SkillsFeatured>
  </FrontpageBlock>
</template>
