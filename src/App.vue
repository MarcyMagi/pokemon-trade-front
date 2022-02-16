<script>
import { defineComponent } from 'vue'
import DefaultHeader from './components/main-components/DefaultHeader.vue'
import PokemonDisplay from './components/main-components/PokemonDisplay.vue'
import DefaultFooter from './components/main-components/DefaultFooter.vue'
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
