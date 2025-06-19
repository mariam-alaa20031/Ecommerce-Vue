<template>

<div class="details titillium-web-regular">

  <div class="details__price" v-html="price +' EGP'">
     
  </div>


</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';


export default defineComponent({
  name:"productDetail",
  components:{

  },
  props:{
    price: {type: Number, required:true}
    
  }

})

</script>

<style scoped lang="scss">

.details{
  display:flex;
  justify-content: center;
  align-items: center;



}



</style>
