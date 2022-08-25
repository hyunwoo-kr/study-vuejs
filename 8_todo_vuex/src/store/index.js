import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // 데이터 위치
        todoItemList: []
    },
    mutations: {
        // // 데이터를 실제로 바꾸는 곳.
        addTodo(state, value) {
            // Local storage에 저장하기
            localStorage.setItem("TODO" + value, value);
            state.todoItemList.push(value);
        },
        removeTodo(state, { todoItem, index }) {
            localStorage.removeItem("TODO" + todoItem);
            state.todoItemList.splice(index, 1);
        },
        removeAll(state) {
            localStorage.clear();
            state.todoItemList = [];
        }
    },
    actions: {
        // 외부 통신 수행 등
    },
    getters: {
        // components 의 computed 라고 생각 하면 됨.
    }

})