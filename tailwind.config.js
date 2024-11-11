/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Work_Sans": ['"Work Sans"', ...defaultTheme.fontFamily.serif],
      },
      colors : {
        "lightPink" : "#f9f0ff",
        "greyPurple" : "#8c6991",
        "darkPurple" : "#2f1533",
      },
      backgroundImage : {
        "mobileBg" : "url('./src/assets/background-pattern-mobile.svg')",
         "desktopBg" : "url('./src/assets/background-pattern-desktop.svg')"
      }
    },
  },
  plugins: [],
}