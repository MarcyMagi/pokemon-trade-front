<script setup>
import SearchSVG from '../icons/searchSVG.vue'
</script>

<template>
<form class="wrapper search-box">
	<input placeholder="Search" class="search-input">
	<div class="wrapper">
		<div class="search-button icon">
			<button>
				<SearchSVG/>
			</button>
		</div>
	</div>
</form>
</template>

<style lang="scss" scoped>
.search-box {
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

.search-input {
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

button {
	&:hover {
		cursor: pointer;
	}
}

</style>