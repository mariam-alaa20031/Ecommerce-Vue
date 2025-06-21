<template>
<button class="view"> 
<div class="view__card">
    <img class="view__card-img"  :src="image">
    <productDetail :price="price"  ></productDetail>
</div>
</button> 
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import productDetail from './productDetail.vue'

export default defineComponent({

  name:"productCard",
  components:{
    productDetail
  },
  props: {
  image: { type: String, required: true },
  price: { type: Number, required: true }
}

  

})

</script>

<style scoped lang="scss">

.view{
  cursor: pointer;
  padding: 10px;
  height:150px;
  width:150px;
  border:solid rgb(255, 255, 255);
  border-radius: 50%;
  background-color: white;
  
  &:hover{
       box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
       transform: scale(1.05) scale(1.05);
       transition: transform 0.2s ease-in-out;
    }


&__card{
  display: flex;
  flex-direction: column;
  height:100%;
  justify-content: space-between;
  align-items:center;

&-img{
  width:60px;
}
}
}


</style>
