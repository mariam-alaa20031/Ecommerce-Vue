<template>
<div>
<div class="header titillium-web-regular">
<button class="header__menu"
:class="{ 'header__menu-active': cart_selected }">
     <div class="header__bar">
     </div>
     <div class="header__bar">
     </div>
     <div class="header__bar">
     </div>
    </button>
    <div class="header__left" v-if="!cart_selected">
    <img src="../assets/logo.png" class="header__logo"/>
    <div class="header__links">
      <a @click="clickLink('home')" 
      :class="clickedHome?'links__active':'links__default'" href="#/">Home</a>
       <a @click="clickLink('products')"
       :class="clickedProducts?'links__active':'links__default'" href="#/products">Products</a>
        <a @click="clickLink('contact')"
        :class="clickedContact?'links__active':'links__default'" href="#/contactUs">Contact us</a>
    </div>
    </div>
    <div class="header__right" v-if="!cart_selected">
    <a >Sign In</a>
    <button @click="cart_selected=true" class="header__button">
    <img class="header__cart" src="../assets/shopping-cart.png"/>
    </button>
  </div>
</div>
  <cartDrawer v-if="cart_selected" :visible="cart_selected" @close="cart_selected = false" />
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import cartDrawer from '@/cartDrawer.vue';

export default defineComponent({
name: 'pageHeader',
 components: {
    cartDrawer
  },
  data() {
    return {
      cart_selected: false,
      clickedHome:false,
      clickedProducts:false,
      clickedContact:false,

    };
  }
,
methods: {
  clickLink(link: string) {
      switch (link) {
        case 'home':
          this.clickedHome = true;
          this.clickedProducts = false;
          this.clickedContact = false;
          break;
        case 'products':
          this.clickedHome = false;
          this.clickedProducts = true;
          this.clickedContact = false;
          break;
        case 'contact':
          this.clickedHome = false; 
          this.clickedProducts = false;
          this.clickedContact = true;
          break;
        default:
          break;
      }
    }
}
})

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

  &__menu{
  display:block;
  margin:10px 10px;
  background-color: white;
  border: none;
  cursor:pointer;
}

&__menu-active{
  display:block !important;
  margin:10px 10px;
  background-color: white;
  border: none;
  cursor:pointer;
}
&__bar {
  width: 30px;
  height: 2px;
  background-color: black;
  margin: 7px 0;
}

&__left{
  display:flex;
  align-items: center;
  gap:50px;
}

&__links{
  display: none;
  &a{
    cursor: pointer;
    
  }
 


}


&__logo{
  width:60px;

}

&__right{
  display: flex;
  align-items: center;
  gap: 10px;
  a{
    cursor:pointer;
  }
}

&__button{
  background-color: transparent;
  border: none;
  cursor: pointer;

}
&__cart{
  width:35px;
  height:35px;

}
}

.links__active {
  font-weight: bold;
  text-decoration: underline;
  color: #acaef3;;
}

.links__default {
  font-weight: normal;
  text-decoration: none;
  color: #2c3e50;
}


@media screen and (min-width:1000px) {
  .header__menu{
    display:none;
  }
  .header__links{
    display: flex;
    gap: 40px;

   
  }
}


</style>
