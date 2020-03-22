<template>
	<div>
		<PageTransitions>
			<router-view />
		</PageTransitions>
	</div>
</template>

<script>
import PageTransitions from "../components/PageTransitions.vue";

export default {
	name: 'MenuEmptyRouterView',
	components: {
		PageTransitions
	},
}
</script>