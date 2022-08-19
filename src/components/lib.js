// lib.js
// import { ref, onMounted, onUnmounted } from 'vue';
import { Pokedex } from 'pokeapi-js-wrapper';
const pokedex = new Pokedex();

//vuejs.org/guide/reusability/composables.html#mouse-tracker-example
// // by convention, composable function names start with "use"
// export function useMouse() {
// 	// state encapsulated and managed by the composable
// 	const x = ref(0);
// 	const y = ref(0);

// 	// a composable can update its managed state over time.
// 	function update(event) {
// 		x.value = event.pageX;
// 		y.value = event.pageY;
// 	}

// 	// a composable can also hook into its owner component's
// 	// lifecycle to setup and teardown side effects.
// 	onMounted(() => window.addEventListener('mousemove', update));
// 	onUnmounted(() => window.removeEventListener('mousemove', update));

// 	// expose managed state as return value
// 	return { x, y };
// }

export const fetchPokemonApi = (ids) => {
	console.log('ids: ', ids);
	const pro = Promise.all(ids.map((id) => pokedex.getPokemonByName(id)));
	return pro;
};

export const randomArrayShuffle = (array) => {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
};

const fetchCardsImgs = (cards) =>
	Promise.all(
		cards.map(
			({ src }) =>
				new Promise((resolve) => {
					const img = new Image();
					img.src = src;
					img.onload = () => resolve(src);
				})
		)
	);

export const getCards = async (ids) => {
	const cards = await fetchPokemonApi(ids);
	console.log('fetchPokemonApi cards: ', cards);
	const brief = cards.map((card) => ({
		id: card.id,
		name: card.name,
		// src: card.sprites.other['official-artwork'].front_default,
		// src: card.sprites.back_default,
		src: card.sprites.front_default,
	}));
	await fetchCardsImgs(brief);
	// setIsLoading(false);
	console.log('cards: ', cards);
	console.log('brief: ', brief);
	return brief;
};

