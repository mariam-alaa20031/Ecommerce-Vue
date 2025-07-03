<template>
  <div>
    <div v-if="visible" class="overlay" @click="closeDrawer"></div>

    <div class="drawer" :class="{ open: visible }" @click.stop>
      <h2>Cart</h2>
      <div class="drawer__line"></div>
      <p v-if="cart.length == 0">
        Your cart is empty, take a look at our products.
      </p>
      <cartItem v-else></cartItem>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed} from "vue";
import { useCartStore } from "../../stores/cartStore";
import cartItem from "./cartItem.vue";

    const store = useCartStore();
    defineProps<{
      visible: boolean
    }>()
    const emit = defineEmits<{
      (e: 'close'): void
    }>()
    const cart = computed(()=>store.cart);
    function closeDrawer() {
      emit("close");
    }

</script>

<style scoped>
h2 {
  margin-bottom: 0;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9;
  overflow: scroll;
}

.drawer {
  position: fixed;
  top: 0;
  right: -400px;
  width: 35%;
  height: 100%;
  background: linear-gradient(to bottom, #1d2c3b, #0a1a24);
  color: white;
  overflow: scroll;
  z-index: 10;
  padding: 2px;
  text-align: center;
  transition: right 0.3s ease-in-out;
}
.drawer__line {
  height: 1px;
  width: 100%;
  background-color: #fff;
}
.drawer.open {
  right: 0;
}
</style>
