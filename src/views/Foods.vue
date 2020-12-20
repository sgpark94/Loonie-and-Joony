<template>
	<div class="foods">
		<template v-for="(list, idx) in FoodData.foodList">
			<div class="content" :key="idx">
				<p>{{ list.date }}</p>
				<div v-for="(eatList, i) in list.eatingList" :key="i">
					<p>{{ eatList.name }}</p>
					<div v-if="eatList.is_recipe">
						<span>{{ eatList.content }}</span>
						<!-- <img
							src="https://image.flaticon.com/icons/png/512/100/100417.png"
							alt="레시피아이콘"
						/> -->
						<Modal />
					</div>
					<br />
				</div>
			</div>
		</template>
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
