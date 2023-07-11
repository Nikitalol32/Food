import { createWebHistory, createRouter, type RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import DishPage from "../views/DishPage.vue";

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
		path: "/menu",
		name: "menu",
		component: Menu,
	},
	{
		path: "/dish-page/:id",
		name: "dish-page",
		component: DishPage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;