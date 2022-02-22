<template>
<div class="wrapper">
	
	<div class="login-box">
		<form>
			<div class="input-box">
				<input placeholder="Email" type="text" v-model="user.email">
				<input placeholder="Username" type="text" v-model="user.username">
				<input placeholder="Password" type="password" v-model="user.password">
			</div>
			<a type="submit" @click="submit">Signup</a>
		</form>
	</div>
</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'ViewSignup',
	data() {
		return {
			user: {
				email: '',
				username: '',
				password: ''
			}
		}
	},
	methods: {
		async submit() {
			try {
				const response = await fetch('http://localhost:8080/users', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(this.user)
				})
				const data = await response.json()
				console.log(data)
			} catch(err) {
				console.log(err)
			}
		}
	} 
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
		padding: 2rem;
		background-color: blue;
		
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
			&:hover {
				cursor: pointer;
				background-color: red;
			}
		}
	}

</style>