<script>
import { defineComponent } from 'vue'
import DefaultHeader from './components/DefaultHeader.vue'
import DefaultMain from './components/DefaultMain.vue'
import DefaultFooter from './components/DefaultFooter.vue'
export default defineComponent({
	name: 'App',
	components: {
		DefaultHeader,
		DefaultMain,
		DefaultFooter,
	}
})
</script>

<template>
	<DefaultHeader/> 
	<DefaultMain/>
	<DefaultFooter/>
</template>
 
<style lang="scss">
	@import '@/assets/css/reset.css';
	@import '@/assets/css/base.scss';
</style>
