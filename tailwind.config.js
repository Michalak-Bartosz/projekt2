/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'eduTasBeginner': ['"Edu TAS Beginner"', 'sans-serif'],
        'lobster': ['Lobster', 'sans-serif']
      },
    },
  },
  plugins: [],
}

