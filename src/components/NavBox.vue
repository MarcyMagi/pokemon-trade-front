<script>
import { defineComponent } from 'vue'

import UserSVG from './icons/userSVG.vue'
import NotificationSVG from './icons/notificationSVG.vue'
import MessagesSVG from './icons/messagesSVG.vue'

export default defineComponent({
	name: 'NavBox',
	components: {
		UserSVG,
		NotificationSVG,
		MessagesSVG
	}
})

</script>

<template>
	<nav class="wrapper">
		<a class="icon">
			<MessagesSVG/>
		</a>
		<a class="icon">
			<NotificationSVG/>
		</a>
		<a class="icon">
			<UserSVG/>
		</a>
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