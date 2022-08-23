<template>
<section>
    <ul>
        <li v-for="(todoItem, index) in propsdata" class="shadow">
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
    props: ['propsdata'],
    methods: {
        removeTodo (todoItem, index=0) {
            // localStorage.removeItem(PREFIX_KEY+todoItem);
            // this.todoItemList.splice(index, 1);
            this.$emit('removeTodo', todoItem, index);
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
