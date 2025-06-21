import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products:[]
  },
  getters: {
  },
  mutations: {
    setProducts(state,products){
      state.products=products;
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
    }
  },
  modules: {
  }
})
