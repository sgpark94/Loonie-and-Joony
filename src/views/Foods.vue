<template>
	<div class="foods">
		<template v-for="(list, idx) in FoodData.foodList">
			<div class="content" :key="idx">
				<p>{{ list.date }}</p>
				<div v-for="(eatList, i) in list.eatingList" :key="i">
					<p>{{ eatList.name }}</p>
					<p>{{ eatList.content }}</p>
					<div v-if="eatList.is_recipe">
						<v-btn
							@click="recipeLoad(eatList.recipe)"
							class="ma-2"
							text
							icon
							color="red lighten-2"
							style="width: 16px; height: 16px; margin-left: 5px;"
						>
							<img
								src="https://image.flaticon.com/icons/png/512/100/100417.png"
								alt="레시피아이콘"
							/>
						</v-btn>
					</div>
					<br />
				</div>
			</div>
		</template>
		<Modal />
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
		};
	},
	components: {
		Modal,
	},
	methods: {
		recipeLoad(eatRecipe) {
			console.log("Run");
			// this.$store.commit("set", eatRecipe);
			this.$store.state.recipe = eatRecipe;

			// console.log($store);
			this.$store.state.modalDialog = true;
			// this.$store.commit("open");
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
