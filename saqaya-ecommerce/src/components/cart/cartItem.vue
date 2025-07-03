<template>
  <div class="cart" v-for="id in Object.keys(cart)" :key="id">
    <img class="cart__img" :src="fetchProduct(id).image" />
    <cartItemDescription
      :product="fetchProduct(id)"
      :quantity="fetchQuantity(id)"
    ></cartItemDescription>
  </div>
  <div class="cart__total titillium-web-bold">
    <div class="cart__total--display">Total:</div>
    <div class="cart__total--price">{{ sum.toFixed(2) + " LE" }}</div>
  </div>
  <router-link to="/checkout" class="checkout titillium-web-regular">
    <button class="checkout__button">checkout</button>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, computed} from "vue";
import { Product } from "../../../public/interfaces/Product";
import cartItemDescription from "./cartItemDescription.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "cartItem",
  components: {
    cartItemDescription,
  },
  setup() {
    const store = useStore();

    function fetchQuantity(id: string): number {
      return store.getters.cartProductCounts[id];
    }

    function fetchProduct(id: string): Product {
      const product = store.state.products.find(
        (prod: Product) => prod.id.toString() === id
      );
      return (
        product || {
          id: -1,
          title: "Unknown Product",
          image: "",
          rating: { rate: 4, count: 10 },
          price: 0,
          description: "This product is not available.",
          category: "",
        }
      );
    }

    function fetchTotal() {
      let sum = 0;
      store.state.cart.forEach((product: Product) => {
        sum += product.price;
      });
      return sum;
    }
    const sum = computed(()=>fetchTotal());

    const cart= computed(()=>store.getters.cartProductCounts);
    return {
      sum,
      cart,
      fetchProduct,
      fetchQuantity,
    };
  },
});
</script>

<style scoped lang="scss">
.cart {
  display: flex;
  padding: 20px;

  &__img {
    width: 50px;
    height: 50px;
  }

  &__total {
    display: flex;
    padding: 20px;
    justify-content: space-between;

    &--price {
      margin-right: 10px;
    }
  }
}

.checkout {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
  box-sizing: border-box;
  text-decoration: none;
  flex-wrap: wrap;
  &__button {
    background-color: #e0e0e0;
    color: #2e4d73;
    border: solid 1px #2e4d73;
    width: max-content;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #ffffff;
      border: solid 1px black;
      color: black;
    }
  }
}
</style>
