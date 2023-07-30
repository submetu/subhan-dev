/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    fontFamily: {
      sans: ["Raleway", "roboto"],
    },
    container: {
      padding: "2rem",
      width: "100%",
    },
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#fef08a",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      black: "#1e293b",
      white: '#fff',
      aliceblue:'aliceblue'
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        "text-main": "var(--text-main)",
      },
    },
  },
  plugins: [],
};
