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
export default Vue.extend({
	async asyncData({ $content, i18n }) {
		const home = await $content(`${i18n.locale}/home`).fetch()
		return { home }
	},
	head() {
		return {
			htmlAttrs: {
				lang: this.$i18n.locale,
			},
			meta: [
				{
					name: 'description',
					// @ts-ignore
					content: this.home.description,
				},
				{
					name: 'og:description',
					// @ts-ignore
					content: this.home.description,
				},
			],
			// @ts-ignore
			title: this.home.title,
		}
	},
})
</script>
