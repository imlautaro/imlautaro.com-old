import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
	buildModules: [
		'@nuxt/typescript-build',
		'nuxt-windicss',
		'@nuxtjs/google-fonts',
		'unplugin-icons/nuxt',
	],
	components: true,
	googleFonts: {
		display: 'swap',
		families: {
			'Titillium+Web': [400, 600, 700],
		},
	},
	modules: ['@nuxtjs/robots', '@nuxt/content'],
	srcDir: 'src',
	target: 'static',
}

export default config
