<template>
	<div id="name-bar">
		<div class="logo-name">
			<span class="letter-1"><router-link class="router-link" :to="{ name: 'Home' }">T</router-link></span>
			<span class="letter-2"><MenuTransition><div v-show="showLetter">o</div></MenuTransition></span>	
			<span class="letter-3"><router-link class="router-link" :to="{ name: 'About' }">m</router-link></span>
			<span class="letter-4"><router-link class="router-link" :to="{ name: 'MenuWork' }">w</router-link></span>
			<span class="letter-5"><MenuTransition><div v-show="showLetter">i</div></MenuTransition></span>	
			<span class="letter-6"><MenuTransition><div v-show="showLetter">n</div></MenuTransition></span>	
			<span class="letter-7"><MenuTransition><div v-show="showLetter">k</div></MenuTransition></span>	
			<span class="letter-8"><MenuTransition><div v-show="showLetter">l</div></MenuTransition></span>	
			<span class="letter-9"><router-link class="router-link" :to="{ name: 'MenuExhibitions' }">e</router-link></span>
			<span class="letter-10"><MenuTransition><div v-show="showLetter">r</div></MenuTransition></span>	
			
		</div>
	</div>
</template>

<script>
import MenuTransition from "./MenuTransition.vue"

export default {
	name: "NameBar",
	components: {
		MenuTransition
	},
	props: {
		showLetter: {
			type:Boolean,
			default: true
		}
	}
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
	-webkit-text-stroke-color: $clr-btn
	-webkit-text-fill-color: transparent
	margin: 0
	padding: 0
	width: 100%	
	span
		height: 100%
		cursor: default
.letter-1,
.letter-3,
.letter-4,
.letter-9
	&:hover
		-webkit-text-stroke-color: transparent
		-webkit-text-fill-color: $clr-hover
		
@media screen and (min-width: 720px)
	.logo-name
		grid-template-rows: 3rem
		grid-auto-columns: 3rem
		text-align: center
	.letter-1,
	.letter-2,
	.letter-3,
	.letter-4,
	.letter-5,
	.letter-6,
	.letter-7,
	.letter-8,
	.letter-9,
	.letter-10
		grid-row: 1/2
@media screen and (min-width: 1024px)
	.logo-name
		grid-auto-columns: 4.4rem
		grid-template-rows: 4.4rem
		font-size: 4rem
		line-height: 4.6rem
</style>
