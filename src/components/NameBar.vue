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
	width: 100%	
	margin: 0
	padding: 0
	
	cursor: pointer
	text-align: right
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
		cursor: default
	
.letter-1,
.letter-3,
.letter-4,
.letter-9
	&:hover
		-webkit-text-stroke-color: transparent
		-webkit-text-fill-color: $clr-hover
.letter-1 .router-link
	-webkit-text-fill-color: transparent
	-webkit-text-stroke-color: $clr-btn
		
@media screen and (min-width: 720px)
	.logo-name
		grid-template-rows: 3.4rem
		grid-auto-columns: 3.4rem
		text-align: center
		font-size: 3rem
		line-height: 3.6rem
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
		
	.router-link
		display: inline-block
		width: 100%
@media screen and (min-width: 1024px)
	.logo-name
		grid-template-rows: 4rem
		grid-auto-columns: 4rem
		font-size: 3.6rem
		line-height: 4.2rem
</style>
