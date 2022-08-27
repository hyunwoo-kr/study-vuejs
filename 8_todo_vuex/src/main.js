import Vue from 'vue'
import App from './App.vue'
import common from './assets/js/common.js'
import store from './store' // index.js 라면 생략 가능

Vue.use(common);

new Vue({
	store, // #vuex 넣기
	el: '#app',
	render: h => h(App)
})