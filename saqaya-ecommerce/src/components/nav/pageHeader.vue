<template>
  <div>
    <div class="header titillium-web-regular">
      <button
        class="header__menu"
        :class="{ 'header__menu-active': cartSelected }"
      >
        <div class="header__bar"></div>
        <div class="header__bar"></div>
        <div class="header__bar"></div>
      </button>
      <div class="header__left" v-if="!cartSelected">
        <img src="../../assets/logo.png" class="header__logo" />
        <div class="header__links">
          <a
            @click="clickLink('home')"
            :class="clickedHome ? 'links__active' : 'links__default'"
            href="#/"
            >Home</a
          >
          <a
            @click="clickLink('products')"
            :class="clickedProducts ? 'links__active' : 'links__default'"
            href="#/products"
            >Products</a
          >
          <a
            @click="clickLink('contact')"
            :class="clickedContact ? 'links__active' : 'links__default'"
            href="#/contactUs"
            >Contact us</a
          >
        </div>
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
import { defineComponent, ref } from "vue";
import cartDrawer from "../cart/cartDrawer.vue";

let cartSelected = ref(false);
let clickedHome = ref(false);
let clickedProducts = ref(false);
let clickedContact = ref(false);
function clickLink(link: string) {
  switch (link) {
    case "home":
      clickedHome.value = true;
      clickedProducts.value = false;
      clickedContact.value = false;
      break;
    case "products":
      clickedHome.value = false;
      clickedProducts.value = true;
      clickedContact.value = false;
      break;
    case "contact":
      clickedHome.value = false;
      clickedProducts.value = false;
      clickedContact.value = true;
      break;
    default:
      break;
  }
}
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

  &__menu {
    display: block;
    margin: 10px 10px;
    background-color: white;
    border: none;
    cursor: pointer;
  }

  &__menu-active {
    display: block !important;
    margin: 10px 10px;
    background-color: white;
    border: none;
    cursor: pointer;
  }
  &__bar {
    width: 30px;
    height: 2px;
    background-color: black;
    margin: 7px 0;
  }

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
  .header__menu {
    display: none;
  }
  .header__links {
    display: flex;
    gap: 40px;
  }
}
</style>
