<template>
<div>
<div class="header titillium-web-regular">
<button class="header__menu"
:class="{ 'header__menu-active': cart_selected }">
     <div class="header__menu__bar">
     </div>
     <div class="header__menu__bar">
     </div>
     <div class="header__menu__bar">
     </div>
    </button>
    <div class="header__left" v-if="!cart_selected">
    <img src="../assets/logo.png" class="header__left__logo"/>
    <div class="header__left__links">
      <a>Home</a>
       <a>Products</a>
        <a>Contact us</a>
    </div>
    </div>
    <div class="header__right" v-if="!cart_selected">
    <a >Sign In</a>
    <button @click="cart_selected=true" class="header__right__cart">
    <img class="header_right__cart__logo" src="../assets/shopping-cart.png"/>
    </button>
  </div>
</div>
  <CartDrawer v-if="cart_selected" :visible="cart_selected" @close="cart_selected = false" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CartDrawer from './CartDrawer.vue';

@Options({

 components: {
    CartDrawer
  },
  data() {
    return {
      cart_selected: false
    };
  }

})
export default class Header extends Vue {

}
</script>

<style scoped lang="scss">

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: 17px;
  padding:2px 10px;
  color: #2c3e50;
  border-bottom: 1px solid #ccc;
}

.header__menu{
  display:block;
  margin:10px 10px;
  background-color: white;
  border: none;
  cursor:pointer;
}

.header__menu-active{
  display:block !important;
  margin:10px 10px;
  background-color: white;
  border: none;
  cursor:pointer;
}
 .header__menu__bar {
  width: 30px;
  height: 2px;
  background-color: black;
  margin: 7px 0;
}

.header__left{
  display:flex;
  align-items: center;
  gap:50px;
}

.header__left__links{
  display: none;
  a{
    cursor: pointer;
  }
}

.header__left__logo{
  width:60px;

}


.header__right{
  display: flex;
  align-items: center;
  gap: 10px;
  a{
    cursor:pointer;
  }
}

.header__right__cart{
  background-color: transparent;
  border: none;
  cursor: pointer;

}
.header_right__cart__logo{
  width:35px;
  height:35px;

}



@media screen and (min-width:1000px) {
  .header__menu{
    display:none;
  }
  .header__left__links{
    display: flex;
    gap: 40px;
  }
}
</style>
