import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import homePage from '../views/homePage.vue'
import aboutUs from '../views/aboutUs.vue'
import contactUs from '../views/contactUs.vue'
import productsPage from '../views/productsPage.vue'
import productPage from '../views/productPage.vue'
import notFound from '../components/error/notFound.vue'
import { useProductStore } from '../stores/productStore';


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
    path: '/contactUs',
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
  },
   { path: '/:pathMatch(.*)*', 
     name: 'notFound', 
     component: notFound },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})


router.beforeEach(async (to, from, next) => {
  
const productStore= useProductStore()
  if (to.path === '/products' && !productStore.fetched) {
    if (!productStore.products.length) {
      try {
        await productStore.loadProducts();
      } catch (err) {
        console.error('Failed to load products:', err);
        return next(false); 
      }
    }
  }
  next();
});


export default router
