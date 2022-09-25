import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

import Home from "../views/Home.vue"

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/admin",
		name: "AdminPage",
		component: () => import("../views/Admin.vue"),
	},
	{
		path: "/about",
		name: "About",
		component: () => import("../views/About.vue"),
	},
	{
		path: "/dev",
		name: "SoftwarePage",
		component: () => import("../views/Development.vue"),
	},
	{
		path: "/dev/hardware",
		name: "DevelopmentHardware",
		component: () => import("../views/DevelopmentHardware.vue"),
	},
	{
		path: "/dev/dev_stack",
		name: "DevelopmentChassis",
		component: () => import("../views/DevelopmentStack.vue"),
	},
	{
		path: "/:pathMatch(.*)*",
		name: "notFound",
		component: () => import("../views/404.vue"),
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
