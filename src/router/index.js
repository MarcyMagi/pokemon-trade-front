import { createWebHistory, createRouter } from 'vue-router'
import PokemonShowcase from '../views/PokemonShowcase.vue'

const routes = [
	{
		path: '/',
		name: 'Showcase',
		component: PokemonShowcase,
	}, 
	{

	}
]

const router = createRouter({
	history:createWebHistory(),
	routes
})

export default router