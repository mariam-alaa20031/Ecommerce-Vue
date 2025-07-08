<template>
  <router-link :to="`/product/${product.id}`" v-if="clickable" @click="setProduct(product)" class="view">
    <div class="view__card">
      <img class="view__card--img" :src="product.image" />
      <productPrice :price="Number(product.price)" :clickable="true" />
    </div>
  </router-link>
  <div v-else class="view only">
    <div class="view__card only__card">
      <img class="view__card--img only__card--img" :src="product.image" />
      <productPrice :price="product.price" :clickable="false" />
      <buttonsProduct :product="product"></buttonsProduct>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Product } from "../../../public/interfaces/Product";
import productPrice from "./productPrice.vue";
import buttonsProduct from "./buttonsProduct.vue";
import { useProductStore } from "../../stores/productStore";

const store=useProductStore()
defineProps<{
  product: Product;
  clickable: boolean;
}>();

function setProduct(product:Product){
     store.product= product;
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

  &:active {
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
    transform: scale(0.97);
    transition: transform 0.1s ease-in-out;
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

    &--img {
      border-radius: 0px;
      width: 100px;
      height: 100px;
      margin-bottom: 5px;
    }
  }
}

@media (max-width: 600px) {
  .view {
    padding: 20px;
    height: 120px;
    width: 120px;
    border-radius: 50%;
  }

  .only {
    margin-left: 0%;
    border: 1.5px solid #2e4d73;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 0;
    z-index: 10;

    &__card--img {
      width: 60px;
      height: 60px;
      margin-bottom: 3px;
    }

    &:hover {
      cursor: default;
      transform: none;
    }
  }
}

@media (hover: none) and (pointer: coarse) {
  .view:hover {
    box-shadow: none !important;
    transform: none !important;
  }
}
</style>
