<template>
<main class="thin">
	<PokeContainer v-for="poke of displayPokes" :key="poke.id" :pokeData="poke"/>
</main>
</template>

<script>
import { defineComponent } from 'vue'

import PokeContainer from './PokeContainer.vue'

export default defineComponent({
	name: 'PokemonDisplay',
	data () {
		return {
			displayPokes: [
				{
					'ability':'static',
					'evAtk':252,
					'evDef':0,
					'evHp':4,
					'evSpAtk':0,
					'evSpDef':0,
					'evSpd':252,
					'gender':'f',
					'gmax':true,
					'id':0,
					'ivs':5,
					'level':100,
					'move1':'mega-punch',
					'move2':'pay-day',
					'move3':'thunder-punch',
					'move4':'slam',
					'nature':'bold',
					'nickname':'ipsum',
					'ownerId':'display',
					'ownerInGame':'lorem',
					'pokemon':'pikachu',
					'shiny':false,
					'status':'FT'
				},
				{
					'ability':'trace',
					'evAtk':252,
					'evDef':0,
					'evHp':4,
					'evSpAtk':0,
					'evSpDef':0,
					'evSpd':252,
					'gender':'f',
					'gmax':true,
					'id':1,
					'ivs':5,
					'level':100,
					'move1':'psychic',
					'move2':'calm-mind',
					'move3':'charm',
					'move4':'hypnosis',
					'nature':'bold',
					'nickname':'ipsum',
					'ownerId':'display',
					'ownerInGame':'lorem',
					'pokemon':'kirlia',
					'shiny':false,
					'status':'FT'
				},
				{
					'ability':'poison-heal',
					'evAtk':252,
					'evDef':0,
					'evHp':4,
					'evSpAtk':0,
					'evSpDef':0,
					'evSpd':252,
					'gender':'f',
					'gmax':true,
					'id':2,
					'ivs':5,
					'level':100,
					'move1':'earthquake',
					'move2':'u-turn',
					'move3':'ice-fang',
					'move4':'fire-fang',
					'nature':'bold',
					'nickname':'ipsum',
					'ownerId':'display',
					'ownerInGame':'lorem',
					'pokemon':'gliscor',
					'shiny':false,
					'status':'FT'
				}
			]
		}
	},
	components: {
		PokeContainer
	},
	mounted() {
		fetch(`${import.meta.env.VITE_POKETRADE_API}/pokemon`)
			.then(res => res.json())
			.then(res => {
				this.displayPokes = res.data
			})
	}
})
</script>


<style scoped>
main {
	flex-grow: 1;
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
}

</style>
