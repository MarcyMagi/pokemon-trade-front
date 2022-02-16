<script>

import { defineComponent } from 'vue'
import logoSVG from '../icons/logoSVG.vue'
import NavBox from '../boxes/NavBox.vue'
import SearchBox from '../boxes/SearchBox.vue'
import TagBox from '../boxes/TagBox.vue'

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