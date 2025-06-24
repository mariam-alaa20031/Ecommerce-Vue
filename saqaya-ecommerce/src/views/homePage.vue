<template>
<homeHeader></homeHeader>
<homeReviews></homeReviews>
</template>


<script lang="ts">

import { defineComponent} from 'vue';
import homeHeader from  '../components/homeHeader.vue';
import homeReviews from '../components/homeReviews.vue';

export default defineComponent({
  name: 'homePage',
  components:{
    homeHeader,
    homeReviews
  }
})  



</script>

<style scoped lang="scss">


</style>
