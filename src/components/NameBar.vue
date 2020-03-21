<template>
	<div id="name-bar">
		<div class="logo-name">
			<span class="letter-1">T</span>	
			<span class="letter-2">o</span>	
			<span class="letter-3 btn-me">m</span>
			<span class="letter-4 btn-work">w</span>
			<span class="letter-5">i</span>	
			<span class="letter-6">n</span>	
			<span class="letter-7">k</span>	
			<span class="letter-8">l</span>	
			<span class="letter-9 btn-exhibitions">e</span>
			<span class="letter-10">r</span>	
		</div>
	</div>
</template>

<script>
export default {
	name: "NameBar"
};
</script>

<style scoped lang="sass">
#name-bar
	display: inline-block
	width: 100%
.logo-name
	display: grid
	grid-auto-rows: 3rem
	align-items: baseline
	
	text-align: right
	// writing-mode: vertical-rl
	// text-orientation: upright
	cursor: pointer
	border: none
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
	margin: 0
	padding: 0
	width: 100%	
	span
		height: 100%
	
	
// #navigation-bar .router-link-exact-active
// 	color: #ffffff
// #navigation-bar .router-link-active#about,
// #navigation-bar .router-link-active#projects
// 	color: #ffffff
</style>
