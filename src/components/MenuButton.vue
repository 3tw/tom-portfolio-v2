<template>
	<div>
		<router-link class="router-link" id="menu-btn" to="/menu" v-if="!menuIsOpen">{{moreButton}}</router-link>
		<router-link class="router-link" id="menu-btn" :to="previousRoute" v-if="menuIsOpen">{{lessButton}}</router-link>
	</div>
</template>

<script>
export default {
	name: "MenuButton",
	data() {
		return {
			moreButton: "more",
			lessButton: "or less"
		}
	},
	props: {
		menuIsOpen: {
			type: Boolean,
			default: false
		},
		previousRoute: {
			type: String,
			default: "/"
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
