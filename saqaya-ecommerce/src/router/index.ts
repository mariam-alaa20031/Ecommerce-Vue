import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import homePage from '../views/homePage.vue'
import aboutUs from '../views/aboutUs.vue'
import contactUs from '../views/contactUs.vue'
import productsPage from '../views/productsPage.vue'
import productPage from '../views/productPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: homePage
  },

    {
    path: '/about',
    name: 'about',
    component: aboutUs
  },
    {
    path: '/about',
    name: 'contact',
    component: contactUs
  },
  {
    path:'/products',
    name: 'products',
    component: productsPage
  },
   {
    path:'/product/:id',
    name: 'product',
    component: productPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
