<template>
  <router-link :to="`/product/${product.id}`" v-if="clickable" class="view">
    <div class="view__card">
      <img class="view__card--img" :src="product.image" />
      <productPrice :price="product.price"></productPrice>
    </div>
  </router-link>
  <div v-else :class="!clickable ? 'view only' : ''">
    <div class="view__card only__card">
      <img class="view__card--img only__card--img" :src="product.image" />
      <productPrice :price="product.price" :clickable="false"></productPrice>
      <button class="only__card--add"
      @click="addToCart(product)">Add to cart</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import productPrice from "./productPrice.vue";
import {Product} from '../../public/Product';

export default defineComponent({
  name: "productCard",
  components: {
    productPrice,
  },
  props: {
    product: {
      type: Object as ()=> Product,
      required: true,
    },
    clickable: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    addToCart(product: Product) {
      this.$store.dispatch("addToCart", product);
    }
  },

});
</script>

<style scoped lang="scss">
.view {
  cursor: pointer;
  padding: 10px;
  height: 150px;
  width: 150px;
  border: solid rgb(255, 255, 255);
  border-radius: 50%;
  background-color: white;
  padding: 15px;
  color: black;
  text-decoration: none;
  :deep(*) {
    text-decoration: none;
    color: inherit;
  }
  &:hover {
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
    transform: scale(1.05) scale(1.05);
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
  margin-left:4%;
  cursor: default;
  &:hover {
    box-shadow: none;
    transform: none;
  }
  &__card{

    &--add {
      background-color: #2e4d73;
      border: solid 1px #91a6c0;
      color:white;
      width:70%;
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        background-color: #e0e0e0;
        color: #2e4d73;
      }
    }

    &--img{
      border-radius: 0px;
      width:100px;
      height:100px;
      margin-bottom:5px;
    }}
      
  }
</style>
