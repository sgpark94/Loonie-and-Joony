import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		recipe: "",
		modalDialog: false, // 초반 닫힌 상태
	},
	mutations: {
		set(recipe) {
			this.recipe = recipe;
		},
		open() {
			this.modalDialog = true;
		},
		close() {
			this.modalDialog = false;
		},
	},
	actions: {},
	modules: {},
});

// P - C 통신
// 장점: 간단하고 직관적임.
// 단점: 중복으로 많이 불러옴.

// State 통신
// 장점: 데이터 양방향성.
// 단점: 동기화로 복잡함.

// 1. 1번만 실행되도록 밖으로 뺀다.
// => 아이콘도 모달이 아닌 푸드에 넣어야 한다.

// 2. 모달 밖에서 아이콘을 누를때 모달이 열리도록 해야한다.
