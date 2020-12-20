<template>
	<div class="app">
		<div id="nav">
			<router-link to="/foods">음식</router-link> |
			<router-link to="/photos">사진</router-link> |
			<router-link to="/feelings">🎄</router-link>
			<router-view />
		</div>
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
