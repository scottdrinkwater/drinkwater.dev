import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      fin: "#5e2750",
      green: "#81D432",
      cloudy: "#aea79f",
      mine: "#333333",
      blue: "#6D9BB5",
      white: "#FFF",
      orange: "#dd4814",
    },
    extend: {
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
        ubuntu: ["Ubuntu", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
