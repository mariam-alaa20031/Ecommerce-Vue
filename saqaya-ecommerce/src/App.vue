<template>
  <div id="nav" class="titillium-web-regular">
   <Header></Header>
   <Footer></Footer>
  </div>
  <router-view/>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer
  }
});

</script>
<style lang="scss">
#nav{
    display:flex;
    flex-direction: column;
    height: 100%;

}
</style>
