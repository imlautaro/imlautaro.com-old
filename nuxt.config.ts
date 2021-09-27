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
	css: ['~/assets/css/global.css'],
	googleFonts: {
		families: {
			'Titillium+Web': [400, 600, 700],
		},
	},
	gtm: {
		id: 'GTM-575736G',
	},
	head: {
		meta: [
			{
				name: 'msvalidate.01',
				content: 'C27F48AFE5071F5BB41098E817D1991A',
			},
		],
	},
	i18n: {
		defaultLocale: 'en',
		locales: [
			{
				code: 'en',
				name: 'English',
			},
			{
				code: 'es',
				name: 'Español',
			},
		],
		vueI18n: {
			fallbackLocale: 'en',
			messages: {
				en: require('./src/locales/en.json'),
				es: require('./src/locales/es.json'),
			},
		},
	},
	modules: [
		'@nuxtjs/robots',
		'@nuxt/content',
		'@nuxtjs/gtm',
		'@nuxtjs/i18n',
		'@nuxtjs/sitemap',
	],
	pwa: {
		manifest: {
			name: 'Lautaro Pereyra',
			short_name: '@imlautaro',
			theme_color: '#000000',
		},
		meta: {
			ogHost: 'https://imlautaro.com',
			ogImage: '/featured.png',
		},
		workbox: false,
	},
	sitemap: {
		gzip: true,
		hostname: 'https://imlautaro.com',
		i18n: true,
	},
	srcDir: 'src',
	target: 'static',
}

export default config
