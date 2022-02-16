<script>
import { defineComponent } from 'vue'
import DefaultHeader from './views/DefaultHeader.vue'
import DefaultFooter from './views/DefaultFooter.vue'
export default defineComponent({
	name: 'App',
	components: {
		DefaultHeader,
		DefaultFooter,
	}
})
</script>

<template>
	<DefaultHeader/> 
	<router-view/>
	<DefaultFooter/>
</template>
 
<style lang="scss">
	@import '@/assets/css/reset.css';
	@import '@/assets/css/base.scss';
</style>
