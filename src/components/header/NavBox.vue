<script setup>
import UserSVG from '../icons/userSVG.vue'
import NotificationSVG from '../icons/notificationSVG.vue'
import MessagesSVG from '../icons/messagesSVG.vue'
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

<style scoped>
	a {
		margin : 0 1rem 0 0
	}
	a:hover {
		cursor: pointer;
	}
</style>