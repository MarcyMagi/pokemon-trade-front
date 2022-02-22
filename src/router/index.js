import { createWebHistory, createRouter } from 'vue-router'
import ViewPokemonShowcase from '../views/ViewPokemonShowcase.vue'
import ViewLogin from '../views/ViewLogin.vue'
import ViewSignup from '../views/ViewSignup.vue'

const routes = [
	{
		path: '/',
		name: 'Showcase',
		component: ViewPokemonShowcase,
	},
	{
		path: '/login',
		name: 'Login',
		component: ViewLogin,
	}, 
	{
		path: '/signup',
		name: 'Signup',
		component: ViewSignup,
	}, 
]

const router = createRouter({
	history: createWebHistory(import.meta.env['BASE_URL']),
	routes
})


export default router