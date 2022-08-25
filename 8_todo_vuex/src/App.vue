<template>
<div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
</div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
import store from './store'

const PREFIX_KEY = 'TODO';

export default {
    data() {
        return {
            todoItemList: []
        }
    },
    components: {
        'TodoHeader': TodoHeader,
        'TodoInput': TodoInput,
        'TodoList': TodoList,
        'TodoFooter': TodoFooter,
    },
    methods: {
    },
    created() {
        this.$store.commit('init');
    },
}
</script>

<style>
body {
    text-align: center;
    background-color: #f6f6f8;
}

input {
    border-style: groove;
    width: 200px;
}

button {
    border-style: groove;
}

.shadow {
    box-shadow: 5px 10px 10px rgba(0,0,0, 0.03);
}
</style>