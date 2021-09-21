import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
	buildModules: ['@nuxt/typescript-build'],
	components: true,
	modules: ['@nuxtjs/robots', '@nuxt/content'],
	srcDir: 'src',
	target: 'static',
}

export default config
