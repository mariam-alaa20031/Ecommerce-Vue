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

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Product } from "../../../public/interfaces/Product";
import { useStore } from "vuex";

export default defineComponent({
  name: "buttonChangeQuantity",
  props: {
    product: { type: Object as PropType<Product>, required: true },
    add: {
      type: Function,
      required: true,
    },
  },
  setup() {
    const store = useStore();
    function fetchProductQuantity(id: number) {
      const count = store.getters.cartProductCounts;
      return count[id];
    }
    function decrementFromCart(product: Product) {
      store.dispatch("removeFromCart", product);
    }

    return {
      decrementFromCart,
      fetchProductQuantity,
    };
  },
});
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
</style>
