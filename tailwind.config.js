/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				brandColor: '#5d3ebc',
				primary: '#7849f7',
				secondary: '#ffd300'
			}
		}
	},
	plugins: []
}
