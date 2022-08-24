<template>
<div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" placeholder="할일 적기 <업무명>-<할일>" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
         <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>

    <Teleport to="body">
        <modal v-bind:show="showModal" v-on:close="close">
        </modal>
    </Teleport>
</div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
    name: "Test",
    created() {},
    data() {
        return { newTodoItem: '', showModal: false};
    },
    props: {},
    methods: {
        addTodo () {
            if (this.newTodoItem !== "") {
                let value = this.newTodoItem && this.newTodoItem.trim();
                // Local storage에 저장하기
                // localStorage.setItem("TODO"+value, value);
                // this.clearInput();

                this.$emit('addTodo', value);
                this.clearInput();
            } else {
                this.showModal = !this.showModal;
            }
        },
        clearInput() {
            this.newTodoItem = '';
        },
        close() {
            this.showModal = false;
        }
    },
    components: {
        Modal: Modal
    }
};
</script>

<style scoped>
input:focus {
    outline: none;
}

.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}

.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}

.addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}

.addBtn {
    color: white;
    vertical-align: middle;
}
</style>
