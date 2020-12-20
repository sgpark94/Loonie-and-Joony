<template>
	<div class="text-center" data-app style="display: inline-block;">
		<v-dialog v-model="dialog" width="500">
			<template v-slot:activator="{ on, attrs }">
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
			</template>

			<v-card>
				<v-toolbar dark color="primary">
					<v-toolbar-title>준비물 📋</v-toolbar-title>
					<v-spacer></v-spacer>
					<v-btn icon dark @click="dialog = false">
						<v-icon>mdi-close</v-icon>
					</v-btn>
				</v-toolbar>
				<v-card-title class="headline grey lighten-2">&nbsp;</v-card-title>

				<v-card-text>
					<p v-for="(prepareList, idx) in Preparation.lists" :key="idx">
						{{ prepareList.list }}
					</p>
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
import Preparation from "@/data/Preparation.js";
export default {
	name: "Modal",
	data() {
		return {
			Preparation,
			dialog: false,
		};
	},
};
</script>

<style scoped>
img {
	width: 16px;
}
</style>
