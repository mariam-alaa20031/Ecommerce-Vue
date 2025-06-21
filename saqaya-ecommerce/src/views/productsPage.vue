<template>
  <productsHeader></productsHeader>
  <div class="products">
   <div class="products__product" v-for="product in products" :key="product.id">
    <productCard
      :product="product" :clickable="true"
    />
    </div>
  </div>
</template>

<script>
import productCard from '@components/productCard.vue'
import productsHeader from '../components/productsHeader.vue'


export default {
  name: 'productsPage',
  components: {
    productCard,
    productsHeader
  },
  props:{
    clickable:{
      type:Boolean,
      required:false
    }
  },
  computed:{
      products() {
        return this.$store.state.products;
      }
  
  },
  created(){
    this.$store.dispatch('loadProducts');
  }

}
</script>

<style scoped lang="scss">
.products{
  display:flex;
  flex-direction: row;
  gap:50;
  padding:20px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  &__product{
    display:flex;
    justify-content:center;
    width:20%;
    margin-bottom:20px;

  
  }
}

@media screen and (max-width: 800px) {
  .products__product {
    width: 30%;
  }
}

@media screen and (max-width: 600px) {
  .products__product {
    width: 50%;
  }
  
  
}

</style>