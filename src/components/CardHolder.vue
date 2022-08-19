<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
	</div>
	<div class="card-holder">
		<card-item
			v-for="(card, index) in cards"
			:key="card.id"
			:title="card.name"
      :imgsrc="card.src"
			@remove="cards.splice(index, 1)"
		></card-item>
	</div>
</template>

<script>
import { randomArrayShuffle, getCards } from './lib.js';
import CardItem from './CardItem.vue';
let someArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

export default {
	name: 'CardHolder',
	components: { CardItem },
	data() {
		return {
			cards: [],
		};
	},
	methods: {
		async updateCards(ids) {
			const newCards = await getCards(ids);
			this.setCards(newCards);
			// console.log('newCards: ', newCards);
			// setIsLoading(false);
		},
		setCards(newCards) {
			// const mappedCards = newCards.map((card) => (
			// 	<CardIns key={card.id} id={card.id} card={card} />
			// ));
			this.cards = newCards;
			console.log('this.cards: ', this.cards);
		},
	},

	mounted() {
		// component is now mounted.
		randomArrayShuffle(someArray);
		this.updateCards(someArray);
	},
	props: {
		msg: String,
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}

.card-holder {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	justify-content: center;
	align-items: center;
}
</style>
