import {createRouter, createWebHistory} from 'vue-router'
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/article',
        name: 'article',
        component: () => import('@/views/Article.vue')
    },
    {
        path: '/detail',
        name: 'detail',
        component: () => import('@/views/Detail.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

