<template>
	<section>
		<transition-group name="list" tag="ul">
			<li v-for="(todoItem, index) in todoItemList" v-bind:key="todoItem.id" class="shadow">
				<i v-on:click="completed(todoItem, index)"
					v-bind:class="[todoItem.checked === false ? 'unCheckBtn far fa-square' : 'checkBtn fas fa-check-square']"
					aria-hidden="true">
				</i>
				<input type="text" v-bind:class="todoItem.edit === true ? 'editText' : 'printText'"
					:readonly="todoItem.edit === false" v-on:keyup.enter="edit(todoItem, index)"
					v-on:click="edit(todoItem, index)" v-model="todoItem.todo" />

				<span class="iconGroup" type="button">
					<span class="completedTime" v-if="todoItem.checked === true">
						{{ todoItem.completedTime }}
					</span>
					<i class="editBtn fas fa-pen-square" aria-hidden="true" v-on:click="edit(todoItem, index)"></i>
					<i class="removeBtn far fa-trash-alt" aria-hidden="true" v-on:click="removeTodo(todoItem.id, index)"></i>
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
			// console.log('들어 오니?' + this.$currentDateTime());
			this.$store.commit('completed', { todoItem, index });
		},
		edit(todoItem, index) {
			this.$store.commit('edit', { todoItem, index });
		},
		// compltedTime() {
		// 	let date = new Date();
		// 	let year = date.getFullYear();
		// 	let month = (date.getMonth() + 1).padStart(2, '0');
		// 	let day = date.getDate().padStart(2, '0');
		// 	let hour = date.getHours().padStart(2, '0');
		// 	let minute = date.getMinutes().padStart(2, '0');
		// 	let second = date.getSeconds().padStart(2, '0');
		// 	if (month < 10) {
		// 		month = '0' + month;
		// 	}
		// 	if (day < 10) {
		// 		day = '0' + day;
		// 	}
		// 	return year + '-' + 'month' - 'day' + ' ' + hour + ':' + minute + ':' + second;
		// },
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

input.printText {
	line-height: 50px;
	width: 60%;
	background-color: #ffffff;
	border: none;
}

input.editText {
	line-height: 48px;
	width: 60%;
	background-color: #ffff80;
}

.completedTime {
	min-width: 100px;
	line-height: 50px;
	margin-right: auto;
}

.iconGroup {
	line-height: 50px;
	margin-left: auto;
}

.editBtn {
	line-height: 50px;
	margin-left: auto;
	color: #62acde;
}

.removeBtn {
	line-height: 50px;
	margin-left: auto;
	color: #de4343;
}
</style>
