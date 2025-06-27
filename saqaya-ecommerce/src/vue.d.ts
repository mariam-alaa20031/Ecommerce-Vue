import { Store } from 'vuex'
import { Product } from '../public/interfaces/Product' 
import { RouteLocationNormalizedLoaded } from 'vue-router'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<{
      products: Product[],
      cart: Product[]
    },
    >,
    $route: RouteLocationNormalizedLoaded
  }
}
