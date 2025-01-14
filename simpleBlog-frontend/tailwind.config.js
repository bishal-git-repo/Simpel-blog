/** @type {import('tailwindcss').Config} */
const tailwindScrollbarHide = require('tailwind-scrollbar-hide');

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3498db",
        secondary: "#2ecc71",
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [
    tailwindScrollbarHide,
  ],
};

