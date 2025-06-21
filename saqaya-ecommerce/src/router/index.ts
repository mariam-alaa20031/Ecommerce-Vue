import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import productsPage from '../views/productsPage.vue'
import productPage from '../views/productPage.vue'

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
  {
    path:'/products',
    name: 'products',
    component: productsPage
  },
   {
    path:'/products/:id',
    name: 'product',
    component: productPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
