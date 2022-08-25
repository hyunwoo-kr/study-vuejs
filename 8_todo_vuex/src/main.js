import Vue from 'vue'
import App from './App.vue'
import store from './store' // index.js 라면 생략 가능

new Vue({
    store, // #vuex 넣기
    el: '#app',
    render: h => h(App)
})