<script setup>

import logoSVG from '../components/icons/logoSVG.vue'
import NavBox from '../components/header/NavBox.vue'
import SearchBox from '../components/header/SearchBox.vue'
import TagBox from '../components/header/TagBox.vue'

</script>

<template>
	<header class="thin">
		<div class="wrapper wrapper-fill">
			<logoSVG class="logo"/>
			<SearchBox/>
			<NavBox/>
		</div>
		<TagBox/>
		<hr>
	</header>
</template>

<style lang="scss" scoped>
header {
	padding: 2rem 0 0 0;
}

hr {
	width: 100%;
}

.logo {
	min-width: 10rem;
	width: 10rem;
}
</style>