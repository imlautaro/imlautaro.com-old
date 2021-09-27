<template>
	<button @click="toggleTheme" class="icon-btn">
		<ph-moon-bold
			v-if="$colorMode.value === 'dark'"
			height="24px"
			width="24px"
		/>
		<ph-sun-bold v-else height="24px" width="24px" />
	</button>
</template>

<script setup>
import { useContext } from '@nuxtjs/composition-api'
import PhMoonBold from '~icons/ph/moon-bold'
import PhSunBold from '~icons/ph/sun-bold'

const { $colorMode } = useContext()

const toggleTheme = () => {
	if ($colorMode.value === 'dark') {
		$colorMode.preference = 'light'
	} else {
		$colorMode.preference = 'dark'
	}
}
</script>
