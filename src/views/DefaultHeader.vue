<script setup>

import logoSVG from '../components/icons/logoSVG.vue'
import NavBox from '../components/NavBox.vue'
import SearchBox from '../components/SearchBox.vue'

</script>

<template>
	<header>
		<div class="wrapper wrapper-fill">
			<logoSVG class="logo"/>
			<SearchBox/>
			<NavBox/>
		</div>
	</header>
</template>

<style lang="scss" scoped>
header {
	padding: 2rem 0;
}

.logo {
	width: 10rem;
}
</style>