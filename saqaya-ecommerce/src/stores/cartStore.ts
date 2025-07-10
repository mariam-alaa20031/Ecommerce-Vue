import { defineStore } from "pinia";
import { Product } from "public/interfaces/Product";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [] as Product[],
  }),
  getters: {
    cartProductCounts: (state) => {
      const counts: Record<number, number> = {};
      state.cart.forEach((product: Product) => {
        counts[product.id] = counts[product.id] ? counts[product.id] + 1 : 1;
      });
      return counts;
    },
    getCartItemsCount:(state)=>{
      return state.cart.length;
    }
  },
  actions: {
    addToCart(product: Product) {
      this.cart.push(product);
    },
    removeFromCart(product: Product) {
      const index = this.cart.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    },

    clearCart(){
      this.cart=[]
    }
  },
  persist:true
});
