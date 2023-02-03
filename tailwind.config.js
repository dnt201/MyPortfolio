/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"],
      },
      fontSize: {
        ss: "10px",
        s: "13px",
      },
      screens: {
        phone: { max: "639px" },
        tablet: { max: "960px" },
      },
      colors: {
        transparent: "transparent",
        primary: "#38BDF8",
        secondary: "#F472B6",
        greyDark: "#334155",
        white: "#fff",
        black: "#000",
        bgLight: "#fcfbff",
        bgDark: "#0f172a",
      },
      backgroundImage: {
        404: "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
