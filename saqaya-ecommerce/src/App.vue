<template>
  <div id="nav" class="titillium-web-regular">
   <pageHeader></pageHeader>
     <router-view/>
   <pageFooter></pageFooter>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import pageHeader from './components/pageHeader.vue';
import pageFooter from './components/pageFooter.vue';

export default defineComponent({
  name: 'App',
  components: {
    pageHeader,
    pageFooter,
  },
  
});

</script>
<style lang="scss">
#nav{
    display:flex;
    flex-direction: column;
    height: 100%;

}
</style>
