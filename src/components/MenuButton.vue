<template>
	<div>
		<!-- <button id="menu-btn" @click="menuBtnClick">more</button> -->
		<router-link class="router-link" id="menu-btn" to="/menu" >more</router-link>
	</div>
</template>

<script>
export default {
	name: "MenuButton",
	data() {
		return {
		}
	},
	methods: {
		menuBtnClick() {
			this.$emit("menu-btn-clicked")
		}
	}
};
</script>

<style scoped lang="sass">
#menu-btn
	display: inline-block
	border: none
	text-decoration: none
	font-size: 1.2rem
	font-weight: 300
	line-height: 2rem
	background-color: transparent
	color: black
	cursor: pointer

</style>
