// Composables
import Default from "@/layouts/default/Default.vue";
import Home from "@/views/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "",
        component: Default,
        children: [
            {
                path: "",
                name: "Home",
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: Home,
            },
        ],
    },
];

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
