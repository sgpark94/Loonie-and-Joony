<template>
	<div class="foods">
		<template v-for="(list, idx) in FoodData.foodList">
			<div class="content" :key="idx">
				<p>{{ list.date }}</p>
				<div v-for="(eatItem, i) in list.eatingList" :key="i">
					<!-- {{ eatingList[i].name }} -->
					<!-- {{ eatItem }} -->
					<p>{{ eatItem.name }}</p>
					<p>{{ eatItem.content }}</p>
					<div v-if="eatItem.is_recipe">
						<img
							@click="load_and_open(eatItem.recipe)"
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
		load_and_open(eatRecipe) {
			this.dialog = true;
			this.data = eatRecipe;
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
