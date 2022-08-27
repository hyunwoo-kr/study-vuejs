<template>
	<div class="clarAllContainer" v-on:click="removeAll">
		<span class="clearAllBtn">Clear All</span>
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
		removeAll() {
			this.$store.commit("removeAll");
		}
	}
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
