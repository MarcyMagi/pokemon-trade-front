<script>
import { defineComponent } from 'vue'

import UserSVG from '../icons/userSVG.vue'
import NotificationSVG from '../icons/notificationSVG.vue'
import MessagesSVG from '../icons/messagesSVG.vue'

export default defineComponent({
	name: 'UnloggedNavBox',
	components: {
		UserSVG,
		NotificationSVG,
		MessagesSVG
	},
	emits: ['onLoginStateChange'],
	methods: {
		changeLoginState() {
			this.$emit('onLoginStateChange', false)
		}
	}
})

</script>

<template>
	<nav class="wrapper">
		<router-link to="/" class="icon animated" @click="changeLoginState()">
			<MessagesSVG/>
		</router-link>
		<router-link to="/" class="icon animated">
			<NotificationSVG/>
		</router-link>
		<router-link to="/" class="icon animated">
			<UserSVG/>
		</router-link>
	</nav>
</template>

<style lang="scss" scoped>
	a {
		margin : 0 1rem 0 0;
		&:hover {
			cursor: pointer;
		}
	}
</style>