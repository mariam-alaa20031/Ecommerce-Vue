<template>
  <div class="description titillium-web-semibold">
    <div class="description__title">
      {{ product.title }}
    </div>
    <div class="description__category">
      {{ "Category: " + product.category }}
    </div>
    <productRating :rating="product.rating.rate"></productRating>
    <hr />
    <div class="description__details titillium-web-regular">
      {{ "Description: " + product.description }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Product } from "../../../public/interfaces/Product";
import productRating from "./productRating.vue";

defineProps<{
  product: Product;
}>();
</script>

<style scoped lang="scss">
.description {
  width: 60%;
  &__title {
    font-size: 35px;
    color: black;
    text-decoration: none;
  }
}
</style>
