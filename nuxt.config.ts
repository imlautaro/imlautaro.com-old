import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
	buildModules: [
		'@nuxt/typescript-build',
		'nuxt-windicss',
		'@nuxtjs/google-fonts',
		'unplugin-icons/nuxt',
		'@nuxtjs/composition-api/module',
		'@nuxtjs/color-mode',
		'@nuxtjs/pwa',
	],
	colorMode: {
		classSuffix: '',
	},
	components: true,
	googleFonts: {
		display: 'swap',
		families: {
			'Titillium+Web': [400, 600, 700],
		},
	},
	modules: ['@nuxtjs/robots', '@nuxt/content'],
	pwa: {
		manifest: {
			lang: 'en',
			name: 'Lautaro Pereyra',
			short_name: '@imlautaro',
			theme_color: '#000000',
		},
		meta: {
			ogImage: 'https://imlautaro.com/featured.png',
		},
		workbox: false,
	},
	srcDir: 'src',
	target: 'static',
}

export default config
