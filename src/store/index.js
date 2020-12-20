import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		modaldialog: false,
	},
	mutations: {},
	actions: {},
	modules: {},
});

//
// 1. Modal 은 한번만 실행되도록 해야해요.
// 2. 아이콘들이 적절한 위치에 나와야해요.
// 3. 아이콘 클릭시 모달 팝업이 나와야해요. dialog
