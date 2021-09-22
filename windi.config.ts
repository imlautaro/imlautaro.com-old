import { defineConfig } from 'windicss/helpers'

const config = defineConfig({
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
