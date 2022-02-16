<script>

import { defineComponent } from 'vue'
import logoSVG from '../components/icons/logoSVG.vue'
import NavBox from '../components/boxes/NavBox.vue'
import SearchBox from '../components/boxes/SearchBox.vue'
import TagBox from '../components/boxes/TagBox.vue'

export default defineComponent({
	name: 'DefaultHeader',
	components: {
		logoSVG,
		NavBox,
		SearchBox,
		TagBox
	}
})


</script>

<template>
	<header class="thin">
		<nav class="wrapper wrapper-fill">
			<logoSVG class="logo"/>
			<SearchBox/>
			<NavBox/>
		</nav>
		<TagBox/>
		<hr/>
	</header>
</template>

<style lang="scss" scoped>
header {
	padding: 2rem 0 0 0;
}

hr {
	width: 100%;
	border: 0;
	padding: 0.5px 0;
	background-color: white;
}

.logo {
	min-width: 10rem;
	width: 10rem;
}
</style>