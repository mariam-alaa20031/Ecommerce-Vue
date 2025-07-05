<template>
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
</template>
<script lang="ts" setup>
import {Product} from '../../../public/interfaces/Product';
import { useCartStore } from '../../stores/cartStore';
import buttonAddProduct from './buttonAddProduct.vue';
import buttonChangeQuantity from './buttonChangeQuantity.vue';

defineProps<{
    product:Product,
}>()

const store = useCartStore();

function addToCart(product: Product) {
  store.addToCart(product);
}

function isProductInCart(product: Product) {
  return store.cart.some((prod: Product) => prod.id === product.id);
}

</script>