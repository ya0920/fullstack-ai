import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/home',
        name: 'Home', 
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/data',
        name: 'Data',
        component: () => import('@/views/Data.vue')
    },
    {
        path: '/setting',
        name: 'Setting',
        component: () => import('@/views/Setting.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router