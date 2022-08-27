<template>
	<div>
		User List
		<div v-for="user in users" :key="user.id">
			{{ user.username }}
		</div>
	</div>
</template>

<script>
export default {
	name: "Test",
	created() {
		this.$store.dispatch("getUserList");
	},
	data() {
		return {};
	},
	props: {},
	methods: {},
	computed: {
		users() {
			return this.$store.state.users;
		}
	}
};
</script>

<style scoped></style>
