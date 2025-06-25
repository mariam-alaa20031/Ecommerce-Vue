<template>
  <productsHeader></productsHeader>
  <div class="sort">
    <sortDropdown @sortProducts="orderProducts"></sortDropdown>
  </div>
  <div class="products">
   <div class="products__product" v-for="product in products" :key="product.id">
    <productCard
      :product="product" :clickable="true"
    />
    </div>
  </div>
</template>

<script lang="ts">
import productCard from '../components/product/productCard.vue';
import productsHeader from '../components/product/productsHeader.vue';
import {defineComponent} from 'vue';
import {Product} from '../../public/Product';
import sortDropdown from '../components/product/sortDropdown.vue';

export default defineComponent({
  name: 'productsPage',
  components: {
    productCard,
    productsHeader,
    sortDropdown
  },
  data(){
    return ({
      selectedSort:""
    })
  },
  props:{
    clickable:{
      type:Boolean,
      required:false
    }
  },
  methods:{
         orderProducts(value:string){
               this.selectedSort=value
         }
  },
  computed:{
      products():Product[] {
        let products:Product[];
        switch(this.selectedSort){
          case "rate-ascending": products= this.$store.getters.sortProductsRatingAsc;
                                 break;
          case "rate-descending": products= this.$store.getters.sortProductsRatingDesc;
                                  break;        
          case "price-descending": products= this.$store.getters.sortProductsPriceDesc;
                                  break;     
          case "price-ascending": products= this.$store.getters.sortProductsPriceAsc;
                                  break;            
          default: products= this.$store.state.products                                                                                     
        }
        return products;
      }
  
  },
  created(){
    this.$store.dispatch('loadProducts');
  }
})
</script>

<style scoped lang="scss">

.sort{
  display: flex;
  justify-content: flex-end;
  width:90%;
  gap:10px;
  padding:20px;
  align-items: center;
}
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