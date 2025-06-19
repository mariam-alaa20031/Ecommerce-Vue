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
  border-color: rgb(255, 245, 234);
  height:150px;
  width:100px;
}
.view__card{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

&-img{
  width:60px;
}

}


</style>
