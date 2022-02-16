<script>
import { defineComponent } from 'vue'
import DefaultHeader from './components/DefaultHeader.vue'
import PokemonDisplay from './components/PokemonDisplay.vue'
import DefaultFooter from './components/DefaultFooter.vue'
export default defineComponent({
	name: 'App',
	components: {
		DefaultHeader,
		PokemonDisplay,
		DefaultFooter,
	}
})
</script>

<template>
	<DefaultHeader/> 
	<PokemonDisplay/>
	<DefaultFooter/>
</template>
 
<style lang="scss">
	@import '@/assets/css/reset.css';
	@import '@/assets/css/base.scss';
</style>
