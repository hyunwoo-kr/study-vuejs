import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		itemCnt: 1,
		// 데이터 위치
		todoItemList: []
	},
	mutations: {
		// // 데이터를 실제로 바꾸는 곳.
		addTodo(state, value) {
			let item = new Object();
			item.id = state.itemCnt;
			item.todo = value;
			item.checked = false;
			console.log(item);
			// Local storage에 저장하기
			localStorage.setItem("TODO" + state.itemCnt, JSON.stringify(item));
			state.todoItemList.push(item);
			state.itemCnt += 1;
			localStorage.setItem('TODO-ITEM-CNT', state.itemCnt);
		},
		removeTodo(state, { todoId, index }) {
			localStorage.removeItem("TODO" + todoId);
			state.todoItemList.splice(index, 1);
			state.itemCnt -= 1;
			if (state.itemCnt < 0) {
				state.itemCnt = 0;
			}
			localStorage.setItem('TODO-ITEM-CNT', state.itemCnt);
		},
		removeAll(state) {
			localStorage.clear();
			state.todoItemList = [];
			localStorage.setItem('TODO-ITEM-CNT', 1);
		},
		init(state) {
			if (localStorage.getItem('TODO-ITEM-CNT')) {
				state.itemCnt = Number(localStorage.getItem('TODO-ITEM-CNT'));
			} else {
				state.itemCnt = 1;
			}

			if (localStorage.length > 0) {
				for (let i = 0; i < localStorage.length; i++) {
					if (localStorage.key(i).indexOf('TODO') !== -1 && localStorage.key(i) !== 'TODO-ITEM-CNT') {

						let keyNm = localStorage.key(i);
						let data = localStorage.getItem(keyNm);
						console.log(JSON.parse(data));
						state.todoItemList.push(JSON.parse(data));
						if (i > 100) {
							break;
						}
					}
				}
			}
		}
	},
	actions: {
		// 외부 통신 수행 등
	},
	getters: {
		// components 의 computed 라고 생각 하면 됨.
	}

})