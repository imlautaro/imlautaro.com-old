<template>
	<div>
		<div class="prose mx-auto">
			<nuxt-content :document="home" />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	async asyncData({ $content }) {
		const home = await $content('home').fetch()
		return { home }
	},
})
</script>
