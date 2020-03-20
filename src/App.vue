<template>
	<div id="app">
		<div class="navigation-bar">
			<NavigationBar />
		</div>
		<div class="main">
			<!-- <PageTransitions> -->
				<router-view />
			<!-- </PageTransitions> -->
		</div>
	</div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
// import PageTransitions from "./components/PageTransitions.vue";

export default {
	name: "App",
	components: {
		NavigationBar,
		// PageTransitions
	}
};
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Lato:300&display=swap')
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300&display=swap')

// Core CSS
*
	box-sizing: border-box
	margin: 0
	padding: 0

html
	font-size: 1em
	min-height: 100%

body
	font-family: 'Source Sans pro', sans-serif
	line-height: 1.4rem
	min-width: 320px
	height: 100vh
	overflow-x: hidden
	margin: 0
	padding: 0
	
a
	text-decoration: none

// Main layout	
#app
	height: 100%
	display: flex
	flex-direction: row

.navigation-bar
	flex: 0 0 6rem

.main
	flex: 1 0 calc(100vw - 6rem)
</style>
