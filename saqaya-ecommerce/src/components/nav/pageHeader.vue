<template>
  <div>
    <div class="header titillium-web-regular">
      <menuNav
        :active-index="activeIndex"
        @update:index="handleUpdate"
      />
      <div class="header__left">
        <img src="../../assets/logo.png" class="header__logo" />
        <headerNav
          :active-index="activeIndex"
          @update-index="handleUpdate"
        />
      </div>
      <div class="header__right" v-if="!cartSelected">
        <a>Sign In</a>
        <button @click="cartSelected = true" class="header__button">
          <img class="header__cart" src="../../assets/shopping-cart.png" />
          <div class="header__count ">{{ ordersQuantity==0?"":ordersQuantity }}</div>
        </button>
      </div>
    </div>
    <cartDrawer
      v-if="cartSelected"
      :visible="cartSelected"
      @close="cartSelected = false"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import cartDrawer from "../cart/cartDrawer.vue";
import menuNav from "./menuNav.vue";
import headerNav from "./headerNav.vue";
import { useCartStore } from "../../stores/cartStore";

const cartSelected = ref(false);
const activeIndex = ref(0);
const cartStore= useCartStore();

function handleUpdate(payload: { index: number}) {
  activeIndex.value = payload.index;
}

const ordersQuantity=computed(()=>{
  return cartStore.getCartItemsCount;}
)
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: 17px;
  padding: 2px 10px;
  color: #2c3e50;
  border-bottom: 1px solid #ccc;

  &__left {
    display: flex;
    align-items: center;
    gap: 50px;
    margin-right: auto;
  }

  &__logo {
    width: 60px;
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 10px;
    a {
      cursor: pointer;
    }
  }

  &__button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    position:relative;
  }
  &__count{
    position: absolute;
    top:15%;
    width:11px;
    right:35%;
    background: white;
    color:rgb(130, 36, 36);
  }

  &__cart {
    width: 35px;
    height: 35px;
  }
}

@media screen and (max-width: 1000px) {
  .header__left {
    margin-right: 0;
    justify-content: space-between;
  }
}
</style>
