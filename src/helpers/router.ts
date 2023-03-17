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
		path: "/blog",
		name: "Blog",
		component: () => import("../views/Blog.vue"),
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
