import { createWebHistory, createRouter } from 'vue-router'
import ViewPokemonShowcase from '../views/ViewPokemonShowcase.vue'

const routes = [
	{
		path: '/',
		name: 'Showcase',
		component: ViewPokemonShowcase,
	},
	{
		path: '/Login',
		name: 'Login',
		component: ViewPokemonShowcase,
	}, 
]

const router = createRouter({
	history: createWebHistory(import.meta.env['BASE_URL']),
	routes
})


export default router