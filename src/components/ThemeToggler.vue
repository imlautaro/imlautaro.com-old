<template>
	<s-button
		@click="
			$colorMode.preference =
				$colorMode.value == 'dark' ? 'light' : 'dark'
		"
		icon
		size="sm"
		variant="text"
	>
		<ph-moon-bold v-if="$colorMode.value === 'dark'" />
		<ph-sun-bold v-else />
	</s-button>
</template>

<script setup>
import PhMoonBold from '~icons/ph/moon-bold'
import PhSunBold from '~icons/ph/sun-bold'
</script>
