import { createRouter, createWebHistory } from "vue-router";
import Login from '../views/Login.vue'

const routers = [

    {
        path: '/login',          //! 定义路径名
        name: 'Login',           //! 定义路由名称
        component: Login,
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        children: [
            {
                path: '',
                redirect: '/home/user'  //! 路由的重定向
            },

            {
                path: '/home/user',
                name: 'User',
                component: () => import('../views/User.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routers
})

export default router