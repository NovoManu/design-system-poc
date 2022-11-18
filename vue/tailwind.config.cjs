/** @type {import('tailwindcss').Config} */
const { colors, spacing, screens } = require('./node_modules/coral')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
		screens,
	  colors,
	  spacing,
    extend: {},
  },
  plugins: [], }
