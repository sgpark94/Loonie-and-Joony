<template>
	<div class="foods">
		<!-- <template v-for="(list, idx) in FoodData.foodList">
			<div class="content" :key="idx">
				<p>{{ list.date }}</p>
				<div v-for="(eatItem, i) in list.eatingList" :key="i">
					<p>{{ eatItem.name }}</p>
					<p>{{ eatItem.content }}</p>
					<div v-if="eatItem.is_recipe">
						<v-btn
							@click="recipeLoad(eatItem.recipe)"
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
		</template> -->

		<template>
			<!-- <v-card v-for="(eatItem, i) in list.eatingList" :key="i" class="mx-auto mb-2" max-width="400"> -->
			<div
				class="foodContent"
				v-for="(list, idx) in FoodData.foodList"
				:key="idx"
			>
				<v-card
					v-for="(eatItem, i) in list.eatingList"
					:key="i"
					style="margin: 30px auto 30px;"
					class="mx-auto mb-2"
					max-width="70%"
				>
					<div>
						<v-img
							class="white--text align-end"
							max-height="300"
							:src="eatItem.imageURL"
						>
						</v-img>
						<v-card-title>
							{{ eatItem.content }}

							<span v-if="eatItem.is_recipe">
								<v-btn
									@click="recipeLoad(eatItem.recipe)"
									class="ma-2"
									text
									icon
									color="red lighten-2"
									style="width: 16px; height: 16px; margin-left: 5px"
								>
									<img
										src="https://image.flaticon.com/icons/png/512/100/100417.png"
										alt="레시피아이콘"
									/>
								</v-btn> </span
						></v-card-title>
						<v-card-subtitle class="pb-0"
							>{{ list.date }} {{ eatItem.name }}</v-card-subtitle
						>

						<!-- <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

			<div>Whitsunday Island, Whitsunday Islands</div>
            {{ eatItem.name }}
          </v-card-text> -->
					</div>
				</v-card>
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
@import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;700&family=Raleway:wght@300;700&display=swap");
* {
	font-family: "Questrial", sans-serif;
	/* font-family: 'Raleway', sans-serif; */
	/* font-weight: 300; */
}
.v-card__title {
	font-weight: 700;
}
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
