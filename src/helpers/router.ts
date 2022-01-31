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
		path: "/software",
		name: "Software",
		component: () => import("../views/SoftwarePage.vue"),
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
		path: "/dev/chassis",
		name: "DevelopmentChassis",
		component: () => import("../views/DevelopmentChassis.vue"),
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
