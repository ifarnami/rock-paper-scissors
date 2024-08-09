/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./index.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "red-light": "#DF2E38",
        "blue-dark": "#2751A3",
        "txt-light": "#070A52",
        "txt-dark": "#BEBFD1",
        light: "#D9D9D9",
        dark: "#353535",
      },
    },
  },
  plugins: [],
};
