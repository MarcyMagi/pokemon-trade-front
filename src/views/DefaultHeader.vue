<script setup>

import logoSVG from '../components/icons/logoSVG.vue'
import NavBox from '../components/header/NavBox.vue'
import SearchBox from '../components/header/SearchBox.vue'
import TagBox from '../components/header/TagBox.vue'

</script>

<template>
	<header>
		<div class="wrapper wrapper-fill">
			<logoSVG class="logo"/>
			<SearchBox/>
			<NavBox/>
		</div>
		<TagBox/>
	</header>
</template>

<style lang="scss" scoped>
header {
	padding: 2rem 0;
}

.logo {
	min-width: 10rem;
	width: 10rem;
}
</style>