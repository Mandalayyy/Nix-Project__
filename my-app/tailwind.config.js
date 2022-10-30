/* eslint-disable  */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        'light': '#DEE4E7',
        'dark':'#37474F',
      },
      
    },
  },
  plugins: [],
}