<template>
<div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsTodoItemList="todoItemList" v-on:removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:removeAll="removeAll"></TodoFooter>
</div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

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
        'TodoFooter': TodoFooter
    },
    methods: {
        addTodo(value) {
            // Local storage에 저장하기
            localStorage.setItem("TODO"+value, value);
            this.todoItemList.push(value);
        },
        removeTodo(todoItem, index) {
            localStorage.removeItem("TODO"+todoItem);
            this.todoItemList.splice(index, 1);
        },
        removeAll() {
            localStorage.clear();
            this.todoItemList = [];
        }
    },
    created() {
        // 새롭게 추가 되는건 갱신이 안 되네.... 어디다가 둬야 하나?
        // TODO: event bus를 써서 변경 이벤트를 감지 해야 할 듯.
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i).indexOf(PREFIX_KEY) !== -1) {
                    let idx = localStorage.key(i).indexOf(PREFIX_KEY);
                    let viewVal = localStorage.key(i).substr(4); // PREFIX 'TODO' 4자리 만큼 지우고 넣자
                    this.todoItemList.push(viewVal);
                }
            }
        }
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
