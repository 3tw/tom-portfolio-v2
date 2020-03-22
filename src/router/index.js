import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
		props: true,
		meta: { transitionType: 'fade' }
	},
	{
		path: "/menu",
		component: () => import(/* webpackChunkName: "about" */ "../views/MenuEmptyRouterView.vue"),
		children:[
			{
			path: "",
			name: "Menu",
			component: () => import(/* webpackChunkName: "about" */ "../views/Menu.vue"),
			meta: { transitionType: 'fade' }
			},
			{
				path: "/work",
				name: "WorkLinks",
				component: () => import(/* webpackChunkName: "about" */ "../views/WorkLinks.vue"),
				meta: { transitionType: 'slide' }
			},
			{
				path: "/exhibitions",
				name: "ExhibitionsLinks",
				component: () => import(/* webpackChunkName: "about" */ "../views/ExhibitionsLinks.vue"),
				meta: { transitionType: 'slide' }
			}
		]	
	},
	{
		path: "/about",
		name: "About",
		component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
		meta: { transitionType: 'slide' }
	}
];

const router = new VueRouter({
	routes
});

// router.replace({ path: '*', redirect: '/' }) //try replacing with manifest.json
export default router;
