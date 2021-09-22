import { defineConfig } from 'windicss/helpers'

const config = defineConfig({
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		fontFamily: {
			sans: ['"Titillium Web"', 'sans-serif'],
		},
	},
})

export default config
