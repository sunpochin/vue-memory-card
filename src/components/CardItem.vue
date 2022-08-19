<script>
export default {
	props: {
		title: String,
		imgsrc: String,
	},
	// props: ['title'],
	emits: ['remove'],

  computed: {
		currBackgroundURL: function() {
			console.log('this.imgsrc: ', this.imgsrc);
			return this.imgsrc;
		}
  },	
};
</script>

<template>
	<div class="card">
		{{ title }}
		<!-- Note: it's <img :src="xxx"> -->
		<!-- <img :src="currBackgroundURL"/> -->
		<img :src="imgsrc"/>
	</div>
</template>

<style scoped>
.card {
	width: 100px;
	height: 150px;
	margin: 10px;
	/* text-align: center; */
	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;

	background-color: #5555f5;
	border-radius: 5px;
	box-shadow: 5px 5px #888;

	cursor: pointer;
}
</style>
