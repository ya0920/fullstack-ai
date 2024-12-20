import { createRouter, createWebHistory } from "vue-router";

const routes = [
    // 路由的重定向，（路径默认）
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue')// import Home from '@/views/Home.vue'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router