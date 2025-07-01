<template>
  <div class="stretch">
    <div class="product">
      <productCard :product="product" :clickable="false" />
      <productDescription :product="product" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import productCard from '../components/product/productCard.vue';
import productDescription from '../components/product/productDescription.vue';
import { Product } from '../../public/interfaces/Product';

export default defineComponent({
  name: 'productPage',
  components: {
    productCard,
    productDescription,
  },
  setup() {
    const route = useRoute();
    const store = useStore();

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
      return store.getters.getProductById(id) || defaultProduct;
    });

    return {
      product,
    };
  },
});
</script>

<style scoped lang="scss">
.stretch {
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product {
  display: flex;
  align-items: center;
  margin: 25px 0;
  height: 400px;
}
</style>
