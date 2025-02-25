import { pa } from 'element-plus/es/locale/index.mjs'
import {createRouter, createWebHistory} from 'vue-router'
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue'),
        meta: { showTabBar: false }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/Register.vue'),
        meta: { showTabBar: false }
    },
    {
        path: '/forget',
        name: 'forget',
        component: () => import('@/views/Forget.vue'),
        meta: { showTabBar: false }
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        meta: { showTabBar: true }
    },
    {
        path: '/plan',
        name: 'plan',
        component: () => import('@/views/Plan.vue'),
        meta: { showTabBar: true }
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/Profile.vue'),
        meta: { showTabBar: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router