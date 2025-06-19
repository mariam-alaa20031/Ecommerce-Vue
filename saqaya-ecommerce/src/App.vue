<template>
  <div id="nav" class="titillium-web-regular">
   <pageHeader></pageHeader>
   <productPage></productPage>
   <pageFooter></pageFooter>
  </div>
  <router-view/>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import pageHeader from './components/pageHeader.vue';
import pageFooter from './components/pageFooter.vue';
import productPage from './views/productPage.vue'

export default defineComponent({
  name: 'App',
  components: {
    pageHeader,
    pageFooter,
    productPage
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
