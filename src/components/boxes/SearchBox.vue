<script>
import { defineComponent } from 'vue'

import SearchSVG from '../icons/searchSVG.vue'

export default defineComponent({
	name: 'SearchBox',
	components: {
		SearchSVG
	}
})
</script>

<template>
<form class="wrapper box">
	<input placeholder="Search" class="input">
	<div class="wrapper">
		<button class="icon animated">
			<SearchSVG/>
		</button>
	</div>
</form>
</template>

<style lang="scss" scoped>
.box {
	align-items: stretch;
	background-color: rgb(219, 94, 94);
	padding: 0 1rem;
	border-radius: 2rem;
	width:100%;
	transition: background-color 200ms;
	margin: 0 1rem;
	max-width: 500px;
	&:hover {
		background-color: rgb(231, 130, 130);
	}
}

.input {
	border: 0;
	padding: 0;
	color: white;
	background-color: transparent;
	font-family: 'Roboto', sans-serif;
	flex: 1;
	&::placeholder {
		color:white;
	}
	&:focus {
		outline: none;
	}
}

a {
	margin: 0 1rem 0 0
}

.button {
	button {
		&:hover {
			cursor: pointer;
		}
	}
}


</style>