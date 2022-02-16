<template>
<div class="container">
	<div class="img-container">
		<img :src="sprite" :alt="pokeData.pokemon">
	</div>

	<div class="info">
		<span>{{ pokeData.ownerInGame }}</span>
		<span>{{ pokeData.level }}</span>
		<div class="icon">
			<FemaleSVG v-if="pokeData.gender === 'f'"/>
			<MaleSVG v-else/>
		</div>

	</div>
</div>
</template>

<script>
import { defineComponent } from 'vue'

import FemaleSVG from './icons/FemaleSVG.vue'
import MaleSVG from './icons/MaleSVG.vue'

export default defineComponent({
	name: 'PokeContainer',
	components: {
		FemaleSVG,
		MaleSVG
	},
	data() {
		return {
			sprite: null
		}
	},
	props: {
		pokeData: {
			type: Object,
			default: null
		}
	},
	mounted() {
		console.log(this.pokeData)
		fetch(`${import.meta.env.VITE_POKE_API_V2}/${this.pokeData.pokemon}`)
			.then(res => res.json())
			.then(pokeAPIData => {
				this.sprite = pokeAPIData.sprites.other.home.front_default
			})
	}
})
</script>

<style lang="scss" scoped>
	.container {
		min-width: 10rem;
		min-height: 12rem;
		width: 10rem;
		height: 12rem;
		background-color: darkblue;
		border-radius: 2rem;
		margin: 1rem;
		padding: 1rem 2rem;
		display: flex;
		flex-direction: column;
		align-items:center;
		&:hover {
			cursor: pointer;
			& .img-container { 
				transform: rotate(5deg);
				transition: 0.25s;
				animation: happy 1s infinite 0.25s;
			}
		}
		.info {
			flex-grow: 1;
			width: 100%;
			display:flex;
			justify-content: space-between;
		}
	}

	@keyframes happy {
		0% {
			transform: rotate(5deg)
		}
		50% {
			transform: rotate(-5deg)
		}
		100% {
			transform: rotate(5deg)
		}
	}

</style>