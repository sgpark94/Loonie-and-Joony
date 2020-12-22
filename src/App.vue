<template>
	<div class="app">
		<template>
			<v-card>
				<v-tabs centered icons-and-text>
					<v-tabs-slider></v-tabs-slider>

					<v-tab to="/foods">
						Foods
						<v-icon>mdi-heart</v-icon>
						<!-- <v-icon>mdi-phone</v-icon> -->
					</v-tab>

					<v-tab to="/photos">
						Photos
						<v-icon>mdi-heart</v-icon>
					</v-tab>

					<v-tab to="/feelings">
						Feelings
						<v-icon>mdi-heart</v-icon>
						<!-- <v-icon>mdi-account-box</v-icon> -->
					</v-tab>
				</v-tabs>
			</v-card>
		</template>
		<router-view />
		<!-- <v-tabs>
			<v-tab center>
				<router-link to="/foods">Foods</router-link>
			</v-tab>
			<v-tab>
				<router-link to="/photos">Photos</router-link>
			</v-tab>
			<v-tab>
				<router-link to="/feelings">🎄</router-link>
			</v-tab>
		</v-tabs> -->
	</div>
</template>

<script>
export default {
	name: "App",

	components: {},

	data: () => ({
		//
	}),
};
</script>

<style>
* {
	word-break: break-word;
	word-wrap: break-word;
}
a {
	display: block;
	width: 100%;
	height: 100%;
	line-height: 48px;
	text-decoration: none;
}
</style>
