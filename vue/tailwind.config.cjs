/** @type {import('tailwindcss').Config} */
const { colors, spacing } = require('./node_modules/coral')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
		screens: {
			sm: '480px'
		},
	  colors,
	  spacing,
    extend: {},
  },
  plugins: [], }
