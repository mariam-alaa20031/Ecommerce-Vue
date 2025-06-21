<template>
  <div>
    <div
      v-if="visible"
      class="overlay"
      @click="closeDrawer"
    ></div>

    <div class="drawer" :class="{ open: visible }" @click.stop>
      <h2>Cart</h2>
      <div class="drawer__line"></div>
      <p>Your cart is empty, try to add products.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'cartDrawer',
  props: {
    visible: Boolean
  },
  methods:{
   closeDrawer() {
    this.$emit('close');
  }}
});
</script>

<style scoped>
h2{
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
}

.drawer {
  position: fixed;
  top: 0;
  right: -300px;
  width: 25%;
  height: 100%;
  background: linear-gradient(to bottom, #1d2c3b, #0a1a24);
  color: white;

  z-index: 10;
  padding:2px;
  text-align: center;
  transition: right 0.3s ease-in-out;
}
.drawer__line{
    height:1px;
    width:100%;
    background-color: #fff;
}
.drawer.open {
  right: 0;
}

</style>
