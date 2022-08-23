<template>
<section>
    <ul>
        <li v-for="(todoItem, index) in todoItemList" class="shadow">
            <i class="checkBtn fas fa-check" aria-hidden="true"></i>
            {{ todoItem }}
            <span class="removeBtn" type="button" v-on:click="removeTodo(todoItem, index)">
                <i class="far fa-trash-alt" aria-hidden="true"></i>
            </span>
        </li>
    </ul>
</section>
</template>

<script>
const PREFIX_KEY = 'TODO';
export default {
    name: "Test",
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
    data() {
        return {
            todoItemList: []
        };
    },
    props: {},
    methods: {
        removeTodo (todoItem, index=0) {
            localStorage.removeItem(PREFIX_KEY+todoItem);
            this.todoItemList.splice(index, 1);
        }
    },
};
</script>

<style>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}


li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height:50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 20px;
}

.checkBtn {
    line-height: 50px;
    color: #62acde;
    margin-right: 5px;
}

.removeBtn {
    line-height: 50px;
    margin-left: auto;
    color: #de4343;
}
</style>
