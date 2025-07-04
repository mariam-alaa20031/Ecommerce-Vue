<template>
  <div class="quantity">
    <button class="quantity__decrement" @click="decrementFromCart(product)">
      -
    </button>
    <div class="quantity__value">
      {{ fetchProductQuantity(product.id) }}
    </div>
    <button class="quantity__increment" @click="add(product)">+</button>
  </div>
</template>

<script lang="ts" setup>
import { Product } from "../../../public/interfaces/Product";
import { useCartStore } from "../../stores/cartStore";

defineProps<{ product: Product; add: (product:Product)=>void }>();

const store = useCartStore();
function fetchProductQuantity(id: number) {
  const count = store.cartProductCounts;
  return count[id];
}
function decrementFromCart(product: Product) {
  store.removeFromCart(product);
}
</script>
<style scoped lang="scss">
.quantity {
  display: flex;
  justify-content: space-around;
  align-content: center;
  color: initial;
  width: 100px;
  &__increment {
    cursor: pointer;
  }
  &__decrement {
    cursor: pointer;
  }
}

@media (max-width: 600px) {
  .quantity {
    width: 70px;              
  }

  .quantity__decrement,
  .quantity__increment,
  .quantity__value {
    font-size: 14px;         
  }
}


</style>
