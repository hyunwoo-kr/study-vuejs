import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let common = new Vue();

export default new Vuex.Store({
	state: {
		// 데이터 위치
		todoItemList: [],
		users: []
	},
	mutations: {
		// // 데이터를 실제로 바꾸는 곳.
		addTodo(state, value) {
			const id = Number(localStorage.getItem('TODO-ITEM-ID')) + 1;
			let item = new Object();
			item.id = id;
			item.todo = value;
			item.checked = false;
			item.sort = id;
			item.edit = false;
			item.completedTime = '';
			console.log(item);
			// Local storage에 저장하기
			localStorage.setItem("TODO" + id, JSON.stringify(item));
			state.todoItemList.push(item);
			localStorage.setItem('TODO-ITEM-ID', id);
		},
		removeTodo(state, { todoId, index }) {
			localStorage.removeItem("TODO" + todoId);
			state.todoItemList.splice(index, 1);
		},
		removeAll(state) {
			localStorage.clear();
			state.todoItemList = [];
			localStorage.setItem('TODO-ITEM-ID', 0);
		},
		setUserList(state, value) {
			state.users = value;
		},
		completed(state, { todoItem, index }) {
			let found = state.todoItemList.find(x => x.id == todoItem.id);
			found.checked = !todoItem.checked;

			if (found.checked === true) {
				// 완료시, 완료일시를 저장한다
				found.completedTime = common.$currentDateTime();
			} else {
				found.completedTime = '';
			}

			localStorage.setItem("TODO" + todoItem.id, JSON.stringify(found));
		},
		edit(state, { todoItem, index }) {
			let found = state.todoItemList.find(x => x.id == todoItem.id);
			found.edit = !found.edit;
			if (found.edit) {
				console.log('할일 수정 하기');
			} else {
				console.log('할일 수정 완료');
				localStorage.setItem("TODO" + todoItem.id, JSON.stringify(found));
			}
		},
		init(state) {
			if (!localStorage.getItem('TODO-ITEM-ID')) {
				localStorage.setItem('TODO-ITEM-ID', 0);
			}

			let tmpItemList = [];
			if (localStorage.length > 0) {
				for (let i = 0; i < localStorage.length; i++) {
					if (localStorage.key(i).indexOf('TODO') !== -1 && localStorage.key(i) !== 'TODO-ITEM-ID') {
						let keyNm = localStorage.key(i);
						let data = localStorage.getItem(keyNm);
						tmpItemList.push(JSON.parse(data));
					}
				}

				const sortValue = tmpItemList.sort((a, b) => {
					if (a.sort > b.sort) return 1;
					if (a.sort < b.sort) return -1;
					return 0;
				});

				state.todoItemList = sortValue;
			}
		}
	},
	actions: {
		// 외부 통신 수행 등
		addTodo({ commit }, value) {
			commit('addTodo', value);
		},
		getUserList({ commit }, value) {
			const url = "https://jsonplaceholder.typicode.com/users";
			let params = "";
			axios.get(url, params)
				.then(res => {
					console.log(res)
					commit('setUserList', res.data);
				})
				.catch(err => {
					console.error(err);
				});
		}
	},
	getters: {
		// components 의 computed 라고 생각 하면 됨.
		numberOfComplatedTodo(state) {
			return state.todoItemList.filter(todoItem => todoItem.checked).length;
		},
	}
})