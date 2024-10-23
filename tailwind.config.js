/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      borderRadius: {},
      colors: {
        primary400: "#12305B",
        primary300: "#043C50",
        secondary: "#8FE2FF",
        grey300: "#ABABAB",
        butterColor: "#FBF9F2",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
