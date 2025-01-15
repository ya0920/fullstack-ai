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
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

