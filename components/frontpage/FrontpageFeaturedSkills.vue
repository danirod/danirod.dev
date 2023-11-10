<template>
  <FrontpageBlock id="skills" title="My favourite tools">
    <FrontpageBlockLead>
      A curated list of technologies where I work best. For cases where I have
      full control over the technology stack (as in, we are not talking about
      maintaining existing codebases), I'd rather just use one of these if I
      can.
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
        <img src="~/assets/featured/rails.png" width="240" alt="Rails" />
      </template>
      <SkillsTitle>Ruby on Rails, my one stop solution</SkillsTitle>
      <p>
        Unless the requirements of the project suggest that it is not a good
        fit, for new projects I'll probably be using Ruby on Rails. It is a
        great technology that makes iterating quick and easy. This allows to
        work in smaller chunks allowing to deliver more quickly and to show
        progress, which will make it easier to change the needs of the
        application if required.
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
        <img src="~/assets/featured/nodejs.png" width="240" alt="NodeJS" />
      </template>
      <SkillsTitle>NodeJS, for quick backend prototypes</SkillsTitle>
      <p>
        For even smaller projects that are focused in interaction flows or data
        exchange, NodeJS makes it easy to write and deploy code that does a lot
        of stuff in a concise way. We can start with a basic prototype and
        evolve it over time as the requirements grow, or switch to a more
        tailored technology once the needs suggest so.
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
        <img src="~/assets/featured/nuxt.png" width="240" alt="Nuxt" />
      </template>
      <SkillsTitle>Nuxt, for nice web designs and applications</SkillsTitle>
      <p>
        If you are just looking for something related to website development,
        such as creating a website for your organization, setting up an online
        shop, or working on a web or progressive application for your customers,
        using NuxtJS will allow me to focus in providing a great web experience
        for your users.
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
        <img src="~/assets/featured/go.png" width="240" alt="Go" />
      </template>
      <SkillsTitle>Go, constained backends and real time services</SkillsTitle>
      <p>
        There are a couple of situations where it is more adequate to start from
        scratch using Go. For intensive applications that have higher
        requirements, such as software that is going to handle a lot of data per
        second or minute, Go provides a higher bandwidth. Also, for environments
        where the software has to be small or modular.
      </p>
    </SkillsFeatured>
  </FrontpageBlock>
</template>
