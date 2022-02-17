<template>
<div class="wrapper">
	
	<div class="login-box">
		<form>
			<div class="input-box">
				<input placeholder="Username / Email" type="text">
				<input placeholder="Password" type="password">
			</div>
			<button type="submit">Login</button>
		</form>
	</div>
</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'ViewLogin'
})
</script>


<style lang="scss" scoped>
	.wrapper {
		height: 100%;
		display: flex;
		justify-content: center;
	}

	form {
		display: flex;
		align-items: center;
		
	}

	.login-box {
		background: darkblue;
		display: flex;
		justify-content: center;
		align-items: stretch;

		padding: 4rem;

		.input-box {
			display: flex;
			flex-direction: column;
			input {
				width: 15rem;
				font-size: 1rem;
				background-color: white;
				padding: 0.5rem 1rem;
				margin: 0.5rem 0;
				border-radius: 1rem;
			}
		}
		button {
			color: white;
			width: 7rem;
			height: 100%;
			padding: 0.7rem;
			background-color: rgb(219, 94, 94);
			border-radius: 1rem;
			margin-left: 1rem;
		}
	}

</style>