<template>
	<div id="app">
		<div class="main-wrap">
			<div class="name">
				<NameBar :showLetter=showLetter />
			</div>
			<div class="menu-btn">
				<MenuButton :menuIsOpen=menuIsOpen :previousRoute=previousRoute />
			</div>
			<div class="main">
				<PageTransitions>
					<router-view />
				</PageTransitions>
			</div>
		</div>
	</div>
</template>

<script>
import NameBar from "./components/NameBar.vue";
import MenuButton from "./components/MenuButton.vue";
import PageTransitions from "./components/PageTransitions.vue";

export default {
	name: "App",
	components: {
		NameBar,
		MenuButton,
		PageTransitions,
	},
	data() {
		return {
			menuIsOpen: false,
			previousRoute: "/"
		};
	},
	created() {
		this.$router.beforeEach((to, from, next) => {
				if (to.path == "/menu") {
					this.menuIsOpen = true
					this.previousRoute = from.path
				}
				else {
					this.menuIsOpen = false
				}
				next();
		})
	},
	computed: {
		showLetter() {
			if (this.currentRoute == "/menu") {
				return false;
			} else {
				return true;
			}
		},
		currentRoute() {
			console.log(this.$route)
			return this.$route.path;
		}
	},
};
</script>

<style lang="sass">
// Google fonts
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300&display=swap')
@import url('https://fonts.googleapis.com/css?family=Rubik+Mono+One&display=swap')

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
	font-family: $font-main
	line-height: 1.3rem
	color: $clr-txt
	min-width: 320px
	height: 100vh
	overflow-x: hidden
	padding: 0

a,
button,
span
	text-decoration: none
	color: $clr-btn
	-webkit-tap-highlight-color: rgba(0,0,0,0)
	-webkit-tap-highlight-color: transparent
	-webkit-touch-callout: none
    -webkit-user-select: none
    -khtml-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none
	&:focus,
	&::-moz-focus-inner
		border: none
		outline: none
		
.router-link-exact-active
	-webkit-text-stroke-color: transparent
	-webkit-text-fill-color: $clr-hover
	
// Main layout	
#app
	height: 100%
.main-wrap
	height: 100%
	display: grid
	grid-template-columns: 3rem 1fr 2rem
	grid-template-rows: 0.5rem 3rem 1fr
	grid-template-areas: ". . ." "side-bar menu-btn ." "side-bar main ."

.name
	grid-area: side-bar
.menu-btn
	grid-area: menu-btn
	justify-self: flex-end
.main
	grid-area: main
	
// Views layout
.about
	font-family: $font-main
	font-size: 1.3rem
	line-height: 1.9rem
	padding-left: 2rem
.work,
.exhibitions
	font-family: $font-btn
	font-size: 1.5rem
	line-height: 1.9rem
	font-weight: 400
	color: $clr-txt
	padding-left: 2rem
	
@media screen and (min-width: 720px)
	#app .main-wrap
		grid-template-areas: ". . ." ". side-bar menu-btn" ". main ."
		grid-template-rows: 0.5rem 3.4rem 1fr
	#menu-btn
		transform: rotate(-90deg)
		padding-right: 1rem
	.about
		font-size: 1.4rem
		line-height: 2rem
		padding: 1rem 0 0 2rem
	.work,
	.exhibitions
		font-size: 1.5rem
		line-height: 2.2rem
		padding: 1rem 0 0 2rem
@media screen and (min-width: 1024px)
	#app .main-wrap
		grid-template-rows: 0.5rem 4rem 1fr
	#menu-btn
		padding-right: 2rem
</style>
