/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      inter: ["inter"],
      space: ["SpaceGrotesk"],
      basker: ["Baskervville"],
      baskerIta: ["Baskervville-ita"],
    },
    colors: {
      primary: "#46424c",
      secondary: "#7c90a0",
      blue: "#3993dd",
      black: "#000000",
      white: "#ffffff",
    },
    extend: {},
  },
  plugins: [],
};
