<template>
 <div class="description titillium-web-semibold">
            <div class="description__title">
           {{product.title }} 
            </div>
             <div class="description__category">
           {{"Category: "+ product.category }} 
            </div>
            <productRating :rating=product.rating.rate></productRating>
            <hr>
            <div class="description__details titillium-web-regular">
              {{"Description: "+product.description}}
            </div>
        </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import productRating from './productRating.vue';
export default defineComponent(
    {
        name:'productDescription',
        components:{
          productRating
        },
         props: {
         product: {
                type: Object,
                required: true,
      },
      
    }}
)

</script>

<style scoped lang="scss">
.description{
    width:60%;
    &__title{
        font-size: 35px;
        color: black;
        text-decoration: none;
    }
}
  
</style>