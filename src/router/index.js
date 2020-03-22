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
			name: "MenuMain",
			component: () => import(/* webpackChunkName: "about" */ "../views/MenuMain.vue"),
			meta: { transitionType: 'fade' }
			},
			{
				path: "work",
				name: "MenuWork",
				component: () => import(/* webpackChunkName: "about" */ "../views/MenuWork.vue"),
				meta: { transitionType: 'slide' }
			},
			{
				path: "exhibitions",
				name: "MenuExhibitions",
				component: () => import(/* webpackChunkName: "about" */ "../views/MenuExhibitions.vue"),
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
