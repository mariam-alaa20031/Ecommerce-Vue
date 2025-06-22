import { createStore } from 'vuex'
import axios from 'axios'
import {Product} from '../../public/Product';

export default createStore({
  state: {
    products:[] as Product[],
    cart:[] as Product[]
  },
  getters: {
  },
  mutations: {
    setProducts(state,products: Product[]){
      state.products=products;
    },
    addToCart(state,product:Product){
      state.cart.push(product);
    }

  },
  actions: {
     loadProducts({commit}){
      try{
        axios.get('https://fakestoreapi.com/products')
      .then(response => {
           commit('setProducts', response.data)
      })}
      catch(error){
        console.error("Error fetching products: ",error);
      }
    },
    addToCart({commit},product:Product){
          commit('addToCart', product);
    }},
  modules: {
  }
})
