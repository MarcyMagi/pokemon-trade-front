<script>
import { defineComponent } from 'vue'
import ViewHeader from './views/ViewHeader.vue'
import ViewFooter from './views/ViewFooter.vue'
export default defineComponent({
	name: 'App',
	components: {
		ViewHeader,
		ViewFooter,
	}
})
</script>

<template>
	<ViewHeader/> 
	<router-view/>
	<ViewFooter/>
</template>
 
<style lang="scss">
	@import '@/assets/css/reset.css';
	@import '@/assets/css/base.scss';
</style>
