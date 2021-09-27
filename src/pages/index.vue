<template>
	<div>
		<div class="dark:prose-light prose mx-auto">
			<div class="flex items-center justify-between mb-4">
				<nuxt-link
					v-if="$i18n.locale !== 'en'"
					:to="switchLocalePath('en')"
					>View english version</nuxt-link
				>
				<nuxt-link v-else :to="switchLocalePath('es')"
					>View spanish version</nuxt-link
				>
				<theme-toggler />
			</div>
			<nuxt-content :document="home" />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import meta from '~/utils/meta'

export default Vue.extend({
	async asyncData({ $content, i18n }) {
		const home = await $content(`${i18n.locale}/home`).fetch()
		return { home }
	},
	head() {
		return {
			...meta({
				// @ts-ignore
				description: this.home.description,
				i18nHead: this.$nuxtI18nHead({ addSeoAttributes: true }),
				// @ts-ignore
				title: this.home.title,
				url: `https://imlautaro.com${
					this.localePath('index') !== '/'
						? this.localePath('index')
						: ''
				}/`,
			}),
		}
	},
})
</script>
