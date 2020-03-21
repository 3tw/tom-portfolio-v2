<template>
	<transition name="fade" mode="out-in">
		<slot></slot>
	</transition>
</template>

<script>
export default {
	name: "MenuTransition",
	data() {
		return {};
	}
};
</script>

<style lang="sass" scoped>
.fade-enter-active,
.fade-leave-active
	transition: opacity 0.4s ease-in-out
.fade-enter,
.fade-leave-to
	opacity: 0
</style>
