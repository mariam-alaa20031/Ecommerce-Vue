<template>
  <div class="details">
    <div class="details__description">
      <div class="details__description--title titillium-web-semibold">
        {{ product.title }}
      </div>
      <div class="details__description--category titillium-web-regular">
        {{ quantity + "  x" + "&nbsp;&nbsp;&nbsp;&nbsp;" + product.category }}
      </div>
    </div>
    <div class="details__price titillium-web-semibold">
      {{ Number((product.price * quantity).toFixed(2)) }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Product } from "../../../public/interfaces/Product";

defineProps<{
  product: Product;
  quantity: number;
}>();
</script>

<style scoped lang="scss">
.details {
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  width: 100%;
  border-bottom: 0.5px solid rgba(218, 218, 228, 0.187);
  &__description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 10px;
    width: 85%;
    &--title {
      font-size: 14px;

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

@media (max-width: 600px) {
  .details__description--title {
    font-size: 0.75rem;

  }

  .details__description--category {
    font-size: 0.7rem;
  }

  .details__price {
    font-size: 0.75rem;
  }
}
</style>
