<template>
  <div class="details">
    <div class="details__description">
      <div class="details__description--title titillium-web-semibold">
        {{ product.title }}
      </div>
      <div class="details__description--category titillium-web-regular">
        {{ product.category }}
      </div>
    </div>
    <div class="details__price titillium-web-semibold">{{ product.price }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Product } from "../../../public/Product";
import { PropType } from "vue";

export default defineComponent({
  name: "cartItem",
  props: {
    product: { type: Object as PropType<Product>, required: true },
  },
});
</script>

<style scoped lang="scss">
.details {
  display: flex;
  justify-content: space-between;
  margin-right:10px;
  width:100%;
  border-bottom: 0.5px solid rgba(218, 218, 228, 0.187) ;
  &__description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left:10px;
 
    &--title {
      font-size: 14px;
      width:200px;
      text-align: left;
    }
 
    &--category {
      font-size: 12px;

    }
  }
  &__price {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
}
</style>
