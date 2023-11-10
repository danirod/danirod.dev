# danirod.dev

Yes, I made a new portfolio website for my freelance services. Features:

- Not based on WordPress (I guess that is a feature for some).
- In English (in a future revision, it will also be available in Spanish).
- New domain, to keep the SEO clean.

Powered by Nuxt 3 and UnoCSS.

## Commands

- Setup: `npm install`
- Run the server: `npm run dev`
- Build the app: `npm run build`
- Test in production: `npm run preview`

## Known issues

In development mode on Firefox, the page sometimes freezes during a hot code
reload. At first I thought it was @nuxtjs/i18n, so I removed it. Then I thought
it was @unocss/transformer-compile-class, so I removed it. It still happens so
I have no clue what is it.
