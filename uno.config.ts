import { defineConfig, presetUno, presetIcons } from "unocss";

export default defineConfig({
  presets: [presetUno(), presetIcons()],
  shortcuts: {
    // Some named styles just so that I can reuse such big strings.
    "btn-brutal":
      "b-2px b-b-4px c-black b-black bg-white rd-10px px-6 py-2 hover:outline-black hover:outline-solid hover:outline-2px active:translate-y-2px",

    // I think I variants cannot be used on theme? So I will fake them here.
    "font-size-hero":
      "font-size-4 md:font-size-5 lg:font-size-6 xl:font-size-7.5 2xl:font-size-9",
    "font-size-header":
      "font-size-7 md:font-size-8 xl:font-size-10 2xl:font-size-12",
    "font-size-subheader": "font-size-5 lg:font-size-7 xl:font-size-8",
    "font-size-lead":
      "font-size-5 lg:font-size-6 xl:font-size-7 2xl:font-size-8",
    "font-size-copy": "lg:font-size-5 2xl:font-size-6",
    "font-size-footer": "font-size-4",

    "lh-hero": "lh-150% md:lh-125%",
    "lh-header": "lh-7 md:lh-10 xl:lh-12",
    "lh-subheader": "lh-7 lg:lh-10",
    "lh-lead": "lh-8 xl:lh-10 2xl:lh-11",
    "lh-copy": "lh-6 lg:lh-8 2xl:lh-9",
    "lh-footer": "lh-5",
  },
  rules: [
    [
      // Mostly used for the hero photo, so that it crops properly on mobile.
      "object-upper-half",
      {
        "object-position": "0 25%",
      },
    ],
  ],
  theme: {
    spacing: {
      paragraph: "0.8em",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
      maxWidth: {
        sm: "600px",
        md: "720px",
        lg: "960px",
        xl: "1200px",
        "2xl": "1440px",
      },
    },
    colors: {
      // Expose the CSS variables via UnoCSS.
      foreground: "var(--color)",
      background: "var(--background-color)",
      accent: "var(--accent-color)",
      danger: "var(--danger-color)",
      accentDarker: "var(--accent-color-darker)",
      accentContrast: "var(--accent-color-contrast)",
      link: "var(--link-color)",
      menuBg: "var(--menu-background)",
      menuHover: "var(--menu-hover)",
      menuBorder: "var(--menu-border)",
    },
    fontSize: {},
  },
  preflights: [
    {
      getCSS: ({ theme }) => `
      .text-copy p + p {
        margin-top: ${theme.spacing?.paragraph ?? 0};
      }
      `,
    },
  ],
});
