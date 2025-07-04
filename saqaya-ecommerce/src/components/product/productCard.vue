<template>
  <router-link :to="`/product/${product.id}`" v-if="clickable" class="view">
    <div class="view__card">
      <img class="view__card--img" :src="product.image" />
      <productPrice :price="Number(product.price)" :clickable="true" />
    </div>
  </router-link>
  <div v-else class="view only">
    <div class="view__card only__card">
      <img class="view__card--img only__card--img" :src="product.image" />
      <productPrice :price="product.price" :clickable="false" />
      <buttonChangeQuantity
        v-if="isProductInCart(product)"
        :add="addToCart"
        :product="product"
      />
      <buttonAddProduct
        :product="product"
        :add="addToCart"
        v-else
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Product } from "../../../public/interfaces/Product";
import productPrice from "./productPrice.vue";
import buttonAddProduct from "./buttonAddProduct.vue";
import buttonChangeQuantity from "./buttonChangeQuantity.vue";
import { useCartStore } from "../../stores/cartStore";

defineProps<{
  product: Product;
  clickable: boolean;
}>();

const store = useCartStore();

function addToCart(product: Product) {
  store.addToCart(product);
}

function isProductInCart(product: Product) {
  return store.cart.some((prod: Product) => prod.id === product.id);
}
</script>
<style scoped lang="scss">
.view {
  cursor: pointer;
  padding: 15px;
  height: 150px;
  width: 150px;
  border: solid white;
  border-radius: 50%;
  background-color: white;
  color: black;
  text-decoration: none;

  :deep(*) {
    text-decoration: none;
  }

  &:hover {
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
  }

  &__card {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    align-items: center;

    &--img {
      width: 60px;
    }
  }
}

.only {
  margin-left: 4%;
  cursor: default;

  &:hover {
    box-shadow: none;
    transform: none;
  }

  &__card {
    color: white;
  }

  &--img {
    border-radius: 0px;
    width: 100px;
    height: 100px;
    margin-bottom: 5px;
  }
}

@media (max-width: 600px) {
  .view {
    padding: 10px;
    height: 120px;
    width: 120px;

    &:hover {
      box-shadow: none;
      transform: none;
    }
  }

  .view__card {
    &--img {
      width: 50px;
    }
  }

  .only {
    margin-left: 2%;

    &--img {
      width: 80px;
      height: 80px;
      margin-bottom: 3px;
    }
  }
}
</style>
