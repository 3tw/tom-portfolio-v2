<template>
	<div id="menu-mobile">
		<router-link class="router-link" id="about" to="/about">{{about}}</router-link>
		<router-link class="router-link" id="work" to="/work">{{work}}</router-link>
		<router-link class="router-link" id="exhibitions" to="/exhibitions">{{exhibitions}}</router-link>
	</div>
</template>

<script>
export default {
	name: "MenuMobile",
	data() { 
		return {
			exhibitions: "xhibit",
			work: "ork",
			about: "e"
		}
	}
};
</script>

<style scoped lang="sass">
#menu-mobile
	display: grid
	grid-auto-rows: 3rem
	align-items: baseline
	padding: 0 0 0 1px
.router-link
	display: block
	border: none
	font: inherit
	cursor: pointer
	outline: inherit
	color: black
	text-decoration: none
	text-transform: uppercase
	font-family: 'Rubik Mono One', sans-serif
	font-size: 2.6rem
	line-height: 3.2rem
	font-weight: 400
	-webkit-text-stroke-width: 2px
	-webkit-text-stroke-color: black
	-webkit-text-fill-color: transparent

#about
	grid-row: 2/3
#work
	grid-row: 3/4
#exhibitions
	grid-row: 8/9

	
// #navigation-bar .router-link-exact-active
// 	color: #ffffff
// #navigation-bar .router-link-active#about,
// #navigation-bar .router-link-active#projects
// 	color: #ffffff
</style>
