<template>
	<div class="work">
			<router-link class="router-link" :to="{ name: 'Home' }">Project 1</router-link>
			<router-link class="router-link" :to="{ name: 'Home' }">Project 2</router-link>
	</div>
</template>

<script>
export default {
	name: "MenuWork"
};
</script>

<style scoped lang="sass">
.router-link
	display: block
</style>
