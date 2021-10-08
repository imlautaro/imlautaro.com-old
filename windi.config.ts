import { defineConfig } from 'windicss/helpers'
import typography from 'windicss/plugin/typography'
import colors from 'windicss/colors'
import native from 'windi-native'

const config = defineConfig({
	darkMode: 'class',
	plugins: [
		typography({
			dark: true,
		}),
		native,
	],
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		extend: {
			colors: {
				gray: colors.gray,
				primary: colors.indigo,
				danger: colors.rose,
				success: colors.teal,
				warning: colors.orange,
				info: colors.sky,
			},
			screens: {
				nt: { raw: '(hover: hover)' },
			},
		},
		fontFamily: {
			sans: ['"Encode Sans"', 'sans-serif'],
		},
	},
})

export default config
