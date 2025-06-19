import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

    {
    path: '/about',
    name: 'about',
    component: About
  },
    {
    path: '/about',
    name: 'contact',
    component: Contact
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
