<template>
	<div>
		<div class="container py-8 md:py-16">
			<nuxt />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, useContext, useMeta } from '@nuxtjs/composition-api'
import colors from 'windicss/colors'

export default defineComponent({
	head: {},
	setup() {
		const { $colorMode } = useContext()

		useMeta(() => ({
			meta: [
				{
					name: 'theme-color',
					content:
						$colorMode.value === 'dark'
							? colors.gray[900]
							: '#ffffff',
				},
			],
		}))
	},
})
</script>
