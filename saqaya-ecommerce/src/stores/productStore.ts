import { defineStore } from "pinia";
import { Product } from "public/interfaces/Product";
import axios from "axios";

export const useProductStore = defineStore("products", {
  state: () => ({
    products: [] as Product[],
    fetched: false as boolean,
    product: {} as Product
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

    filterProductsBasedOnCategory: (state) => (filter: string) => {
      if (
        filter === "men's clothing" ||
        filter === "women's clothing" ||
        filter === "jewelery" ||
        filter === "electronics"
      ) {
        return state.products.filter((prod: Product) => prod.category === filter);
      }
      return state.products;
    },
  },
  actions: {
    async loadProducts() {
      if (!this.fetched) {
        try {
          const response = await axios.get("https://fakestoreapi.com/products");
          this.products = response.data;
          this.fetched = true;
        } catch (error) {
          console.error("Error fetching products: ", error);
        }
      }
    },
  },
  persist: true
});
