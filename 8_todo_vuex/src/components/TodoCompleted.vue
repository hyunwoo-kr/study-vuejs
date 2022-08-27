<template>
	<div>
		Completed Todo: {{ numberOfCompletedTodo }}
	</div>
</template>

<script>
import store from '../store';

export default {
	name: 'StudyVuejsTodoCompleted',

	data() {
		return {

		};
	},

	mounted() {

	},

	methods: {

	},
	computed: {
		numberOfCompletedTodo() {
			this.$store.getters.numberOfCompletedTodo;
		}
	},
};
</script>

<style lang="scss" scoped>

</style>