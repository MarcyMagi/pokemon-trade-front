<script setup>
import TagContainer from './TagContainer.vue'

</script>

<script>

export default {
	data() {
		return {
			tags: [{label: 'BDSP'}, {label: 'SWSH'}, {label: 'Tradeback'}, {label: 'Home'}, {label: 'SMUSUM'}, {label: 'LGPE'}, {label: 'XYORAS'}, {label: 'Shiny'}]
		}
	},
}
</script>


<template>
	<nav class="wrapper wrapper-fill thin">
		<TagContainer v-for="tag of tags" :key="tags.indexOf(tag)" :label="tag.label"/>
	</nav>
</template>

<style lang="scss" scoped>
	nav {
		box-sizing: border-box;
		justify-content: flex-start;
		padding: 1rem 0;
		overflow-x: scroll;
	}
</style>