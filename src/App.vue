<template>
	<div id="app">
		<div class="main-wrap">
			<div class="name">
				<NameBar :showLetter="showLetter" :currentRoute="currentRoute" />
			</div>
			<div class="menu-btn">
				<MenuButton @menu-btn-clicked="toggleMobileMenu" />
			</div>
			<div class="main">
				<MenuTransition>
					<MenuMobile v-show="showMobileMenu" :currentRoute="currentRoute" />
				</MenuTransition>

				<PageTransitions>
					<router-view v-show="!showMobileMenu"/>
				</PageTransitions>
			</div>
		</div>
	</div>
</template>

<script>
import NameBar from "./components/NameBar.vue";
import MenuButton from "./components/MenuButton.vue";
import MenuMobile from "./views/MenuMobile.vue";
import PageTransitions from "./components/PageTransitions.vue";
import MenuTransition from "./components/MenuTransition.vue";

export default {
	name: "App",
	components: {
		NameBar,
		MenuButton,
		MenuMobile,
		PageTransitions,
		MenuTransition
	},
	data() {
		return {
			showMobileMenu: false,
			route:""
		};
	},
	created() {
		this.$router.beforeEach((to, from, next) => {
				this.showMobileMenu = false
				next();
		})
	},
	methods: {
		toggleMobileMenu() {
			if (this.showMobileMenu == false) {
				this.showMobileMenu = true;
			} else {
				this.showMobileMenu = false;
			}
		},
	},
	computed: {
		showLetter() {
			if (this.showMobileMenu == false) {
				return true;
			} else {
				return false;
			}
		},
		currentRoute() {
			return this.$route.name;
		}

	},
};
</script>

<style lang="sass">
// Google fonts
@import url('https://fonts.googleapis.com/css?family=Lato:300,900&display=swap')
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300&display=swap')
@import url('https://fonts.googleapis.com/css?family=Rubik+Mono+One&display=swap')
// url('https://fonts.googleapis.com/css?family=Work+Sans:400&display=swap')

// Core CSS
*
	box-sizing: border-box
	margin: 0
	padding: 0
	&:focus
		outline: none

html
	font-size: 1em
body
	font-family: 'Source Sans pro', sans-serif
	line-height: 1.3rem
	min-width: 320px
	height: 100vh
	overflow-x: hidden
	padding: 0

a,
button
	text-decoration: none
	&:focus,
	&::-moz-focus-inner
		border: none
		outline: none
// button	
// 	text-decoration: none
// 	&:focus,
// 	&::-moz-focus-inner
// 		border: none
// 		outline: none

// Main layout	
#app
	height: 100%
.main-wrap
	height: 100%
	display: grid
	grid-template-columns: 4rem 1fr 2rem
	grid-template-rows: 0.5rem 3rem 1fr
	grid-template-areas: ". . ." "side-bar menu-btn ." "side-bar main ."

.name
	grid-area: side-bar
	width: 100%
.menu-btn
	grid-area: menu-btn
	justify-self: flex-end
.main
	grid-area: main
</style>
