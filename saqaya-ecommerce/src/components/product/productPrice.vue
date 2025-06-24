<template>

<div class="details titillium-web-semibold">
  <div class="details__price"
  :class="!clickable? 'singleProductPage':''" v-html="price +' EGP'">   
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
    price: {type: Number, required:true},
    clickable: {type: Boolean, default: true, required: false}
    
  }

})

</script>

<style scoped lang="scss">

.details{
  display:flex;
  justify-content: center;
  align-items: center;

&__price{
    font-size:15px;
    color:black;
    text-decoration: none;
}

}

.singleProductPage{
  font-size: 20px;
  color: black;
  text-decoration: none;
}

</style>
