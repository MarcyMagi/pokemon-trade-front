<script>
import { defineComponent } from 'vue'
export default defineComponent({
	props: ['label']
})
</script>

<template>
	<div class="wrapper">
		<a>{{ label }}</a>
	</div>
</template>

<style lang="scss" scoped>
	div {
		min-width: 3rem;
		min-height: 2rem;
		padding: 0 .5rem;
		background-color: aquamarine;
		border-radius: 1rem;
		color: darkslategrey;
		align-items: center;
		justify-content: center;
		margin-right: 1.2rem;
		transition: background-color 200ms;


		&:hover {
			background-color: rgb(184, 251, 223);
			cursor: pointer;
		}
	}
</style>