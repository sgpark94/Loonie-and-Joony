<template>
	<div class="text-center" data-app style="display: inline-block;">
		<v-dialog v-model="dialog" width="500" persistents>
			<!-- <template v-slot:activator="{ on, attrs }">
				<v-btn
					class="ma-2"
					text
					icon
					color="red lighten-2"
					v-bind="attrs"
					v-on="on"
					style="width: 16px; height: 16px; margin-left: 5px;"
				>
					<img
						src="https://image.flaticon.com/icons/png/512/100/100417.png"
						alt="레시피아이콘"
					/>
				</v-btn>
			</template> -->
			<v-card>
				<v-toolbar dark color="primary">
					<v-toolbar-title>준비물 📋</v-toolbar-title>
					<v-spacer></v-spacer>

					<v-btn icon dark @click="close()">
						<v-icon>mdi-close</v-icon>
					</v-btn>
				</v-toolbar>
				<v-card-title class="headline grey lighten-2">&nbsp;</v-card-title>

				<v-card-text>
					<p>{{ recipe }}</p>
				</v-card-text>

				<v-divider></v-divider>

				<!-- <v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="primary" text @click="dialog = false">
						닫기
					</v-btn>
				</v-card-actions> -->
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
// import FoodData from "@/data/FoodData.js";
export default {
	name: "Modal",
	props: {},
	data() {
		return {};
	},
	computed: {
		recipe() {
			console.log(this.$store);
			return this.$store.state.recipe;
		},
		dialog() {
			return this.$store.state.modalDialog;
		},
	},
	methods: {
		close() {
			this.$store.mutations.close();
			// this.$store.state.modalDialog = false;
		},
	},
};
</script>

<style scoped>
img {
	width: 16px;
}
</style>
