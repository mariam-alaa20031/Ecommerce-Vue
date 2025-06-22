import { Store } from 'vuex'
import { Product } from '../public/Product' 

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<{
      products: Product[],
      cart: Product[]
    }>
  }
}
