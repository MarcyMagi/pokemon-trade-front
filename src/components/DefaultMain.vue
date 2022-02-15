<template>
<main class="thin">
	<PokeContainer v-for="poke of displayPokes" :key="poke.id" :pokeData="poke"/>
</main>
</template>

<script>
import { defineComponent } from 'vue'

import PokeContainer from './PokeContainer.vue'

export default defineComponent({
	name: 'DefaultMain',
	data () {
		return {
			displayPokes: []
		}
	},
	components: {
		PokeContainer
	},
	mounted() {
		fetch(`${import.meta.env.VITE_POKETRADE_API}/pokemon`)
			.then(res => res.json())
			.then(res => {
				this.displayPokes = res.data
			})
	}
})
</script>


<style scoped>
main {
	flex-grow: 1;
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
}

</style>
