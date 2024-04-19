/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors:{
        "neutralSilver":"#F5F7FA",
        "neutralDGray":"#4D4D4D",
        "neutralGrey":"#717171",
        "brandPrimary":"#4CAF4F"
        
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

