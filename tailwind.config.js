/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
    ...colors,
     portfolio:{
      light:'#4A64A0',
      dark:'#00050f',
     },
    },
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require('tailwind-scrollbar'),
    require('@tailwindcss/line-clamp'),
  ],
  variants: {
    scrollbar: ['rounded'],
  }
}
