<template>
  <div id="nav" class="titillium-web-regular">
   <pageHeader></pageHeader>
     <router-view/>
   <pageFooter></pageFooter>
  </div>
</template>

<script lang="ts" setup>
import pageHeader from './components/nav/pageHeader.vue';
import pageFooter from './components/nav/pageFooter.vue';


</script>
<style lang="scss">
#nav{
    display:flex;
    flex-direction: column;
    height: 100%;

}
</style>
