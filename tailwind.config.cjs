const iconify = require("@iconify/tailwind");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),

    iconify.addDynamicIconSelectors({
      iconSets: {
        custom: "./custom-icons.json",
      },
    }),
  ],
};
