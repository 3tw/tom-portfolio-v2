<template>
	<div id="navigation-bar">
		<router-link class="router-link" to="/" >Tom Winkler</router-link>
		<router-link class="router-link" id="exhibitions" to="/exhibitions">Exhibitions</router-link>
		<router-link class="router-link" id="projects" to="/projects">Projects</router-link>
		<router-link class="router-link" id="about" to="/about">About</router-link>
	</div>
</template>

<script>
export default {
	name: "NavigationBar"
};
</script>

<style scoped lang="sass">
#navigation-bar
	display: flex
	flex-direction: column
.router-link
	border: none
	font: inherit
	cursor: pointer
	outline: inherit
	color: black
	text-decoration: none
	font-family: 'Lato', sans-serif
	font-size: 1.5rem
	font-weight: 200
// #navigation-bar .router-link-exact-active
// 	color: #ffffff
// #navigation-bar .router-link-active#about,
// #navigation-bar .router-link-active#projects
// 	color: #ffffff
</style>
