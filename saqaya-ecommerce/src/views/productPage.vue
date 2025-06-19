<template>
  <div class="products">
   <div class="products__product" v-for="product in products" :key="product.id">
    <productCard
      :image="product.image ? product.image : ''"
      :price="product.price"
    />
    </div>
  </div>
</template>

<script>
import productCard from '../components/productCard.vue'
import axios from 'axios'

export default {
  name: 'productDisplay',
  components: {
    productCard
  },
  data() {
    return {
      products: []
    }
  },
  created() {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        this.products = response.data
      })
      .catch(error => {
        console.error('Error fetching products:', error)
      })
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

    width:20%;
    margin-bottom:15px;
  }
}
</style>