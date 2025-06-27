<template>
  <div class="stretch">
  <div class="product">
    <productCard
      :product="product" :clickable="false"></productCard>
    <productDescription :product="product"></productDescription>
    </div> </div>
</template>
 
<script lang="ts">
import {defineComponent} from 'vue';
import {Product} from '../../public/Product'
import productCard from '../components/product/productCard.vue'
import productDescription from '../components/product/productDescription.vue';
import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

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
    },

  },
  beforeRouteEnter( to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext) {
  next((vm: any) => {
    const productId = to.params.id;
    const exists = vm.$store.state.products.some((p: Product) => p.id + '' === productId);
    if (!exists) {
      next({ name: 'NotFound' });
    } else {
      next();
    }
  });
}
,
  computed:{
    
     product():Product {
        const productId = this.$route.params.id;
        return this.$store.state.products.find(p => p.id+'' == productId) || {
          id: -1,
          title: "Unknown Product",
          image: "",
          rating:{rate:0,count:0},
          price: 0,
          description: "This product is not available.",
          category: "",
        }
  

  }
}
  , 
  async created() {
    await this.$store.dispatch('loadProducts')
     
  }
})

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