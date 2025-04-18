// import Home from './Home.vue'
// import About from './About.vue'

const routes = [
  {
    path: '/',
    component: () => import('./Home.vue')
  },
  {
    path: '/about',
    component: () => import('./About.vue')
  }
]