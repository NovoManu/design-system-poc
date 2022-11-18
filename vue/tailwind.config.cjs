/** @type {import('tailwindcss').Config} */
const { colors, darkColors, xmasColors, spacing, screens } = require('./node_modules/coral')

module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}',
	],
	theme: {
		screens,
		spacing,
		extend: {},
	},
	plugins: [
		require('tailwindcss-themer')({
			defaultTheme: {
				extend: {
					colors,
				}
			},
			themes: [
				{
					name: 'dark',
					extend: {
						colors: darkColors,
					}
				},
				
				{
					name: 'xmas',
					extend: {
						colors: xmasColors,
					}
				}]
		})
	]
}
