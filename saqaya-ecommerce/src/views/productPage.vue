<template>
  <div class="stretch">
    <div class="product">
      <productCard :product="product" :clickable="false" />
      <productDescription :product="product" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {  computed } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '../stores/productStore';
import productCard from '../components/product/productCard.vue';
import productDescription from '../components/product/productDescription.vue';
import { Product } from '../../public/interfaces/Product';

    const route = useRoute();
    const productStore = useProductStore();

    const defaultProduct: Product = {
      id: -1,
      title: 'Unknown Product',
      image: '',
      rating: { rate: 0, count: 0 },
      price: 0,
      description: 'This product is not available.',
      category: '',
    };

    const product = computed(() => {
      const id = Number(route.params.id);
      return productStore.getProductById(id) || defaultProduct;
    });

</script>

<style scoped lang="scss">
.stretch {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height:400px;
}

.product {
  display: flex;
  align-items: center;
  gap: 2rem;      
  margin: 25px 0;
  height:400px;
}

@media (max-width: 600px) {
  .stretch {
    padding: 0 1rem;
    height:auto;
  }

  .product {
    flex-direction: column;
    align-items: flex-start;
    height:auto;
    gap: 1rem;   
    margin: 1rem 0;
  }
}
</style>
