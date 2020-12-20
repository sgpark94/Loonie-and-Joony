<template>
	<div class="foods">
		<template v-for="(list, idx) in FoodData.foodList">
			<div class="content" :key="idx">
				<p>{{ list.date }}</p>
				<div v-for="(eatList, i) in list.eatingList" :key="i">
					<p>{{ eatList.name }}</p>
					<p>{{ eatList.content }}</p>
					<div v-if="eatList.is_recipe">
						<img
							@click="load_and_open(eatList.recipe)"
							src="https://image.flaticon.com/icons/png/512/100/100417.png"
							alt="레시피아이콘"
						/>
					</div>
					<br />
				</div>
			</div>
		</template>
		<Modal :recipe="data" :modaldialog="dialog" />
	</div>
</template>

<script>
import FoodData from "@/data/FoodData.js";
import Modal from "@/components/Modal.vue";
export default {
	name: "Foods",
	data() {
		return {
			FoodData,
			dialog: false,
			data: "",
		};
	},
	components: {
		Modal,
	},
	methods: {
		load_and_open(recipe) {
			this.dialog = true;
			this.data = recipe;
		},
	},
};
</script>

<style scoped>
span {
	vertical-align: top;
}
img {
	width: 16px;
	margin-left: 5px;
	vertical-align: top;
	cursor: pointer;
}
</style>
