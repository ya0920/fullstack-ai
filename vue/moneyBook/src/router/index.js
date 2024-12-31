import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/page',
        name: 'Page',
        //component: () => import('@/views/Page.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router