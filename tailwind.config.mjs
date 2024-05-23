/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow": "0px 4px 6px 0px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        serif: ['"Oxanium"', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        "primary-color": "#34353a",
        "secondary-color": "#3d3e42",
        "third-color": "#ffc86a",
        "primary-font": "#e5e5e6",
        "secondary-font": "#000000",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
        scrolling: {
          "0%": {
            borderBottom: "transparent",
          },
          "100%": {
            borderBbottom: "4px solid #ffc86a",
          },
        },
      },
      animation: {
        typing: "typing 2s steps(25), blink 1s infinite",
        scroll: "scrolling ease-in 1s",
      },
    },
  },
};
