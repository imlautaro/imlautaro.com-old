import { defineConfig } from 'windicss/helpers'
import typography from 'windicss/plugin/typography'
import colors from 'windicss/colors'

const config = defineConfig({
	darkMode: 'class',
	plugins: [
		typography({
			dark: true,
		}),
	],
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		extend: {
			colors: {
				gray: colors.gray,
			},
		},
		fontFamily: {
			sans: ['"Encode Sans"', 'sans-serif'],
		},
	},
})

export default config
