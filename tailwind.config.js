/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        livvic: ["Livvic", "sans-serif"],
        courgette: ["Courgette", "sans-serif"],
        lobster: ["Lobster", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
