<script>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'LoggedNavBox',
})

</script>

<template>
	<nav class="wrapper">
		<router-link to="/login"> Log In
		</router-link>
		<router-link to="/"> Sign Up
		</router-link>
	</nav>
</template>

<style lang="scss" scoped>
	nav {
		box-sizing: content-box;
		display: flex;
	}
	a {
		color:white;
		padding: .5rem 1.3rem;
		margin : 0 1rem 0 0;
		border-radius: 1rem;
		&:hover {
			cursor: pointer;
		}
		&:nth-child(2) {
			background-color: cyan; 
			color: black;
		}


	}
</style>