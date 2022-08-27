<template>
	<section>
		<transition-group name="list" tag="ul">
			<li v-for="(todoItem, index) in todoItemList" v-bind:key="todoItem.id" class="shadow">
				<i v-on:click="completed(todoItem, index)"
					v-bind:class="[todoItem.checked === false ? 'unCheckBtn far fa-square' : 'checkBtn fas fa-check-square']"
					aria-hidden="true">
				</i>
				<input type="text"
					v-bind:class="todoItem.edit === true? 'editText': 'printText'"
					:readonly="todoItem.edit === false"
					v-on:keyup.enter="edit(todoItem, index)"
					v-model="todoItem.todo" />

				<span class="removeBtn" type="button">
					<i class="editBtn fas fa-pen-square" aria-hidden="true" v-on:click="edit(todoItem, index)"></i>
					<i class="far fa-trash-alt" aria-hidden="true" v-on:click="removeTodo(todoItem.id, index)"></i>
				</span>
			</li>
		</transition-group>
	</section>
</template>

<script>
export default {
	name: "Test",
	methods: {
		removeTodo(todoId, index = 0) {
			// this.$store.mutations.removeTodo(todoItem, index);
			this.$store.commit("removeTodo", { todoId, index });
		},
		completed(todoItem, index) {
			this.$store.commit('completed', { todoItem, index });
		},
		edit(todoItem, index) {
			this.$store.commit('edit', { todoItem, index });
		}
	},
	computed: {
		todoItemList: function () {
			return this.$store.state.todoItemList;
			// return [];
		}
	},
	data() {
		return {
			isEdit: false,
			editTodoItem: {}
		};
	},
};
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
	transition: all 1s;
}

.list-enter,
.list-leave-to {
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
	line-height: 50px;
	margin: 0.5rem 0;
	padding: 0 0.9rem;
	background: white;
	border-radius: 20px;
}

.unCheckBtn {
	line-height: 50px;
	color: #000000;
	margin-right: 5px;
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

.editBtn {
	line-height: 50px;
	margin-left: auto;
	color: #62acde;
}

input.printText {
	width: 70%;
	background-color: #ffffff;
	border: none;
}

input.editText {
	width: 70%;
	background-color: #ffff80;
	border: none;
	cursor: auto;
}

</style>
