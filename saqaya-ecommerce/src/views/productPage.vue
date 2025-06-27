<template>
  <div class="stretch" v-if="!loading">
    <div class="product">
      <productCard :product="product" :clickable="false" />
      <productDescription :product="product" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import { Product } from '../../public/Product';
import productCard from '../components/product/productCard.vue';
import productDescription from '../components/product/productDescription.vue';

export default defineComponent({
  name: 'productPage',
  components: {
    productCard,
    productDescription,
  },
  props: {
    clickable: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      loading: true as boolean
    };
  },
  computed: {
    product(): Product {
      const productId = this.$route.params.id;
      return (
        this.$store.state.products.find((p: Product) => p.id + '' === productId) || {
          id: -1,
          title: 'Unknown Product',
          image: '',
          rating: { rate: 0, count: 0 },
          price: 0,
          description: 'This product is not available.',
          category: '',
        }
      );
    }
  },
  beforeRouteEnter(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) {
    next(async (vm: any) => {
      if (!vm.$store.state.products.length) {
        await vm.$store.dispatch('loadProducts');
      }

      const productId = to.params.id;
      const exists = vm.$store.state.products.some(
        (p: Product) => p.id + '' === productId
      );

      if (!exists) {
        next({ name: 'notFound' });
      } else {
        vm.loading = false; 
      }
    });
  }
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
