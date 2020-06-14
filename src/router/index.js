import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About')
  },
  {
    path: '/competitions',
    name: 'Competitions',
    component: () => import('../views/Competitions')
  },
  {
    path: '/tutorials',
    name: 'Tutorials',
    component: () => import('../views/Tutorials')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUp')
  },
]

const router = new VueRouter({
  routes
})

export default router
