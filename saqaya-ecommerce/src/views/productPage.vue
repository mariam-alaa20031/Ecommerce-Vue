<template>
  <div class="stretch">
  <div class="product">
    <productCard
      :product="product" :clickable="false"></productCard>
    <productDescription :product="product"></productDescription>
    </div> </div>
</template>
 
<script lang="ts">
import {Product} from '../../public/Product'
import productCard from '../components/product/productCard.vue'
import productDescription from '../components/product/productDescription.vue';
import { PropType } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

export default {
  name: 'productPage',
  components: {
    productCard,
    productDescription,
  },
  props: {
    product:{
      type:Array as PropType<Product[]>
    },
    clickable: {
      type: Boolean,
      required: true
    },

  },
  computed:{
    
     product():Product| undefined{
        const productId = route.params.id;
        return this.$store.state.products.find(p => p.id+'' == productId);
  

  }
}
  ,
  created() {
    this.$store.dispatch('loadProducts')
     
  }
}
</script>

<style scoped lang="scss">
.stretch{
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product{
  display:flex;
  align-items:center;
  margin:25px 0 25px 0;
  height: 400px;

}

</style>