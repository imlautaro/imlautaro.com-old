<template>
	<div>
		<div class="prose mx-auto">
			<p>
				<nuxt-link
					v-if="$i18n.locale !== 'en'"
					:to="switchLocalePath('en')"
					>View english version</nuxt-link
				>
				<nuxt-link v-else :to="switchLocalePath('es')"
					>View spanish version</nuxt-link
				>
			</p>
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
	mounted() {
		console.log(this.$i18n.locale)
	},
})
</script>
