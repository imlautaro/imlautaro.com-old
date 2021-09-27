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
	content: {
		markdown: {
			remarkPlugins: () => [
				'remark-squeeze-paragraphs',
				'remark-slug',
				'remark-external-links',
				'remark-footnotes',
			],
		},
	},
	css: ['~/assets/css/global.css'],
	googleFonts: {
		display: 'swap',
		families: {
			'Encode+Sans': [400, 600, 700],
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
			{
				name: 'twitter:site',
				content: '@imlautaro',
			},
			{
				name: 'twitter:card',
				content: 'summary_large_image',
			},
			{
				hid: 'twitter:image',
				name: 'twitter:image',
				content: '/featured.png',
			},
		],
	},
	i18n: {
		baseUrl: 'https://imlautaro.com',
		defaultLocale: 'en',
		locales: [
			{
				code: 'en',
				iso: 'en',
				name: 'English',
			},
			{
				code: 'es',
				iso: 'es',
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
		},
		meta: {
			ogHost: 'https://imlautaro.com',
			ogImage: '/featured.png',
		},
	},
	router: {
		trailingSlash: true,
	},
	sitemap: {
		gzip: true,
		hostname: 'https://imlautaro.com',
		i18n: true,
		trailingSlash: true,
	},
	srcDir: 'src',
	target: 'static',
}

export default config
