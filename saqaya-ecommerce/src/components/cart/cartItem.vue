<template>
  <div class="cart" v-for="id in Object.keys(cart)" :key="id">
    <img class="cart__img" :src="fetchProduct(id).image" />
    <cartItemDescription :product="fetchProduct(id)" :quantity="fetchQuantity(id)"></cartItemDescription>
  </div>
  <div class="cart__total titillium-web-bold">
    <div class="cart__total--display">Total:</div>
    <div class="cart__total--price">{{ sum.toFixed(2) + " LE" }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Product } from "../../../public/Product";
import cartItemDescription from "./cartItemDescription.vue";

export default defineComponent({
  name: "cartItem",
  components: {
    cartItemDescription,
  },

  methods: {

    fetchQuantity(id:string):number{
        return this.$store.getters.cartProductCounts[id]
    },
   
    fetchProduct(id: string): Product {
      const product = this.$store.state.products.find(
        (prod: Product) => prod.id.toString() === id
      );

      return (
        product || {
          id: -1,
          title: "Unknown Product",
          image: "",
          price: 0,
          description: "This product is not available.",
          category: "",
        }
      );
    },
  },
  computed: {
    sum(): number {
      let sum = 0;
      this.$store.state.cart.forEach((product: Product) => {
        sum += product.price;
      });
      return sum;
    },
    cart(): Record<number, number> {
      console.log(this.$store.getters.cartProductCounts)
      return this.$store.getters.cartProductCounts;
    },
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
</style>
