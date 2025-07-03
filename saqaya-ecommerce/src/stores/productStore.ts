import { defineStore } from "pinia";
import { Product } from "public/interfaces/Product";
import axios from "axios";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [] as Product[],
  }),
  getters: {
    getProductById: (state) => (id: string | number) => {
      return state.products.find((prod: Product) => "" + prod.id === "" + id);
    },

    sortProductsPriceAsc: (state) => {
      return state.products.sort((a, b) => a.price - b.price);
    },

    sortProductsPriceDesc: (state) => {
      return state.products.sort((a, b) => b.price - a.price);
    },
    sortProductsRatingAsc: (state) => {
      return state.products.sort((a, b) => a.rating.rate - b.rating.rate);
    },
    sortProductsRatingDesc: (state) => {
      return state.products.sort((a, b) => b.rating.rate - a.rating.rate);
    },
  },
  actions: {
    async loadProducts() {
      try {
        axios.get("https://fakestoreapi.com/products").then((response) => {
          console.log(response.data);
          this.products = response.data;
        });
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    },
  },
});
