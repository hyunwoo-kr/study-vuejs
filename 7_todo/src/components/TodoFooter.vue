<template>
<div class="clarAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
</div>
</template>

<script>
export default {
    name: "Test",
    created() {},
    data() {
        return {};
    },
    props: {},
    methods: {
        clearTodo() {
            // TodoList.vue에 이벤트 전파 필요.
            localStorage.clear();
        }
    },
};
</script>

<style scoped>
.clarAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
}

.clearAllBtn {
    color: #e20303;
    display: black;
}
</style>
