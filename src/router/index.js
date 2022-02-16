import { createWebHistory, createRouter } from 'vue-router'
import ViewPokemonShowcase from '../views/ViewPokemonShowcase.vue'
import ViewLogin from '../views/ViewLogin.vue'

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
]

const router = createRouter({
	history: createWebHistory(import.meta.env['BASE_URL']),
	routes
})


export default router