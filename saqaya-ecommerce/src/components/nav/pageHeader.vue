<template>
  <div>
    <div class="header titillium-web-regular">
     <menuNav :cartSelected="cartSelected"></menuNav>
      <div class="header__left" v-if="!cartSelected">
        <img src="../../assets/logo.png" class="header__logo" />
       <headerNav></headerNav>
      </div>
      <div class="header__right" v-if="!cartSelected">
        <a>Sign In</a>
        <button @click="cartSelected = true" class="header__button">
          <img class="header__cart" src="../../assets/shopping-cart.png" />
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
import { ref } from "vue";
import cartDrawer from "../cart/cartDrawer.vue";
import menuNav from "./menuNav.vue";
import headerNav from "./headerNav.vue";

let cartSelected = ref(false);

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
  }

  &__links {
    display: none;
    &a {
      cursor: pointer;
    }
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
  }
  &__cart {
    width: 35px;
    height: 35px;
  }
}

.links__active {
  font-weight: bold;
  text-decoration: underline;
  color: #acaef3;
}

.links__default {
  font-weight: normal;
  text-decoration: none;
  color: #2c3e50;
}

@media screen and (min-width: 1000px) {
 
  .header__links {
    display: flex;
    gap: 40px;
  }
}
</style>
