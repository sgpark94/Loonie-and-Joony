import Vue from "vue";
import VueRouter from "vue-router";
import Foods from "../views/Foods.vue";
import Photos from "../views/Photos.vue";
import Feelings from "../views/Feelings.vue";
import Modal from "../components/Modal.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Foods",
		component: Foods,
	},
	{
		path: "/foods",
		name: "Foods",
		component: Foods,
	},
	{
		path: "/photos",
		name: "Photos",
		component: Modal,
	},
	{
		path: "/feelings",
		name: "Feelings",
		component: Feelings,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
