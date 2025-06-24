<template>
  <div class="stretch">
  <div class="product">
    <productCard
      :product="product" :clickable="false"></productCard>
    <productDescription :product="product"></productDescription>
    </div> </div>
</template>

<script>
import productCard from '../components/product/productCard.vue'
import productDescription from '../components/productDescription.vue';

export default {
  name: 'productPage',
  components: {
    productCard,
    productDescription
  },
  props: {
    clickable: {
      type: Boolean,
      required: true
    },

  },
  computed:{
    
     product() {
        const productId = this.$route.params.id;
        return this.$store.state.products.find(p => p.id == productId);
  

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