<template>
<section>
    <transition-group name="list" tag="ul">
        <li v-for="(todoItem, index) in todoItemList" v-bind:key="todoItem" class="shadow">
            <i class="checkBtn fas fa-check" aria-hidden="true"></i>
            {{ todoItem }}
            <span class="removeBtn" type="button" v-on:click="removeTodo(todoItem, index)">
                <i class="far fa-trash-alt" aria-hidden="true"></i>
            </span>
        </li>
    </transition-group>
</section>
</template>

<script>
export default {
    name: "Test",
    methods: {
        removeTodo (todoItem, index=0) {
            // this.$store.mutations.removeTodo(todoItem, index);
            this.$store.commit('removeTodo', {todoItem, index});
        }
    },
    computed: {
        todoItemList: function() {
            return this.$store.state.todoItemList;
            // return [];
        }
    },
};
</script>

<style>
.list-enter-active, .list-leave-active {
    transition: all 1s;
}

.list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

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
