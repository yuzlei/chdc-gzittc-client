import {createRouter, createWebHistory} from "vue-router";
import type {RouteRecordRaw} from "vue-router"

const routes: Readonly<Array<RouteRecordRaw>> = [{
    path: "/",
    redirect: "/index",
    component: () => import("@/App.vue"),
    children: [{
        path: "/index",
        name: "index",
        redirect: "/index/home",
        component: () => import("@/views/index.vue"),
        children: [{
            path: "/index/home",
            name: "home",
            component: () => import("@/views/home.vue"),
        }, {
            path: "/index/updates",
            name: "updates",
            component: () => import("@/views/updates.vue"),
        }, {
            path: "/index/contact",
            name: "contact",
            component: () => import("@/views/contact.vue"),
        }, {
            path: "/index/archives",
            name: "archives",
            component: () => import("@/views/archives.vue"),
        },{
            path: "/index/search",
            name: "search",
            component: () => import("@/views/search.vue"),
        }, {
            path: "/index/404",
            name: "404",
            component: () => import("@/views/notfound.vue"),
        }]
    }]
}, {
    path: '/:catchAll(.*)',
    redirect: '/index/404',
}]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router