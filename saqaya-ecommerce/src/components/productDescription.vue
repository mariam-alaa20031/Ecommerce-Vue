<template>
 <div class="description titillium-web-semibold">
            <div class="description__title">
           {{product.title }} 
            </div>
             <div class="description__category">
           {{"Category: "+ product.category }} 
            </div>
            <hr>
            <div class="description__details titillium-web-regular">
              {{"Description: "+product.description}}
            </div>
        </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent(
    {
        name:'productDescription',
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
    width:50%;
    &__title{
        font-size: 35px;
        color: black;
        text-decoration: none;
    }
}
  
</style>