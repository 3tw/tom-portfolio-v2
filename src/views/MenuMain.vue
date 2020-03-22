<template>
	<div id="menu-container">
		<div class="menu-mobile">
			<span id="about"><router-link class="router-link" :to="{ name: 'About' }" v-show="showAbout">{{about}}</router-link></span>
			<span id="work"><router-link class="router-link" :to="{ name: 'MenuWork' }" v-show="showWork">{{work}}</router-link></span>
			<span id="exhibitions"><router-link
				class="router-link"
				:to="{ name: 'MenuExhibitions' }"
				v-show="showExhibitions"
			>{{exhibitions}}</router-link></span>
		</div>
	</div>
</template>

<script>
export default {
	name: "MenuMain",
	data() {
		return {
			work: "ork",
			about: "e",
			windowWidth: window.innerWidth
		};
	},
	props: {
		currentRoute: {
			type: String,
			default: ""
		}
	},
	computed: {
		exhibitions() {
			if (this.windowWidth < 410) {
				return "xhibit";
			} else {
				return "xhibitions";
			}
		},
		showAbout() {
			if (this.currentRoute == "About") {
				return false;
			} else {
				return true;
			}
		},
		showWork() {
			if (this.currentRoute == "Work") {
				return false;
			} else {
				return true;
			}
		},
		showExhibitions() {
			if (this.currentRoute == "Exhibitions") {
				return false;
			} else {
				return true;
			}
		}
	},
	mounted() {
		window.addEventListener(
			"resize",
			() => (this.windowWidth = window.innerWidth)
		);
	},
};
</script>

<style scoped lang="sass">
#menu-container
	display: inline-block
	width: 100%
.menu-mobile
	display: grid
	grid-auto-rows: 3rem
	padding: 0 0 0 1px
	align-items: baseline
	width: 100%	
	
	cursor: default
	text-align: left
	border: none
	outline: inherit
	text-decoration: none
	text-transform: uppercase
	font-family: $font-btn
	font-size: 2.6rem
	line-height: 3.2rem
	font-weight: 400
	-webkit-text-stroke-width: 2px
	-webkit-text-stroke-color: $clr-btn
	-webkit-text-fill-color: transparent
	span
		width: 100%
		height: 100%
		align-self: center
		cursor: pointer
		&:hover
			-webkit-text-stroke-color: transparent
			-webkit-text-fill-color: $clr-hover

#about
	grid-row: 2/3
#work
	grid-row: 3/4
#exhibitions
	grid-row: 8/9
	
@media screen and (min-width: 720px)
	#menu-container .menu-mobile
		grid-template-rows: 1fr
		grid-auto-columns: 3.4rem
		grid-auto-rows: 0
		text-align: start
		padding: 0
		font-size: 3rem
		line-height: 3.3rem // centers the text
	#about
		grid-column: 3/4
	#work
		grid-column: 4/5
	#exhibitions
		grid-column: 9/10
	#about,
	#work,
	#exhibitions
		grid-row: 1/2
		justify-self: center
		writing-mode: vertical-rl
		text-orientation: upright
		letter-spacing: -10px
		width: 100%
	.router-link
		display: inline-block
		width: 100%
		
@media screen and (min-width: 1024px)
	#menu-container .menu-mobile
		grid-auto-columns: 4rem
		font-size: 3.6rem
		line-height: 4rem
</style>
