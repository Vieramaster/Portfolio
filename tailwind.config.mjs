/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/bg-banner.svg')",
      },
      boxShadow: {
        "custom-shadow": "0px 4px 6px 0px rgba(0, 0, 0, 0.25)",
        "shadow-skills" : "0px 0px 20px 0px rgba(255,200,106,0.25)"
      },
      fontFamily: {
        serif: ['"Oxanium"', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        "primary-color": "#34353a",
        "secondary-color": "#3d3e42",
        "third-color": "#ffc86a",
        "fourth-color": "#3d3e42",
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
      },
      animation: {
        typing: "typing 2s steps(25), blink 1s infinite",
      },
    },
  },
  plugins: [
    // ...
    require("tailwind-scrollbar")
  ],
};
