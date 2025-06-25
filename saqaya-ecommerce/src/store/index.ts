import { createStore } from "vuex";
import axios from "axios";
import { Product } from "../../public/Product";

export default createStore({
  state: {
    products: [] as Product[],
    cart: [] as Product[],
  },
  getters: {
    sortProductsPriceAsc(state){
      return state.products.sort((a,b)=>a.price-b.price)
    },

    sortProductsPriceDesc(state){
      return state.products.sort((a,b)=>b.price-a.price)
    },
    sortProductsRatingAsc(state){
        return state.products.sort((a,b)=>b.rating.rate-a.rating.rate)
    },
    sortProductsRatingDesc(state){
        return state.products.sort((a,b)=>a.rating.rate-b.rating.rate)
    },
    cartProductCounts(state) {
      const counts: Record<number, number> = {};
      state.cart.forEach((product: Product) => {
        counts[product.id] = counts[product.id]?counts[product.id]+1:1;
      });
      return counts;
    },

  },
  mutations: {
    setProducts(state, products: Product[]) {
      state.products = products;
    },
    addToCart(state, product: Product) {
      state.cart.push(product);
    },
    removeFromCart(state, product:Product){
     const index = state.cart.findIndex(p => p.id === product.id);
     if (index !== -1) {
        state.cart.splice(index, 1);
    
     }
    }
  },
  actions: {
    loadProducts({ commit }) {
      try {
        axios.get("https://fakestoreapi.com/products").then((response) => {
          console.log(response.data)
          commit("setProducts", response.data);
        });
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    },
    addToCart({ commit }, product: Product) {
      commit("addToCart", product);
    },
    removeFromCart({commit}, product:Product){
      commit("removeFromCart", product)
    }
  },
  modules: {},
});
