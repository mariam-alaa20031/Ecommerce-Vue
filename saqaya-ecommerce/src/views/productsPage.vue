<template>
  <productsHeader></productsHeader>
  <div class="sort">
    <div class="sort__order">
    <sortDropdown @sortProducts="orderProducts"></sortDropdown>
    </div>
    <div class="sort__filter">
    <filterProducts @filterProducts="chooseCategory"></filterProducts>
    </div>
  </div>
  <div class="products">
    <div
      class="products__product"
      v-for="product in products"
      :key="product.id"
    >
      <productCard :product="product" :clickable="true" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import productCard from "../components/product/productCard.vue";
import productsHeader from "../components/product/productsHeader.vue";
import { ref, computed} from "vue";
import { Product } from "../../public/interfaces/Product";
import sortDropdown from "../components/product/sortDropdown.vue";
import { useProductStore } from "../stores/productStore";
import filterProducts from "@/components/product/filterProducts.vue";
   
    defineProps<{ clickable:boolean }>()

    const productStore = useProductStore();
    let selectedSort = ref("");
    let selectedFilter= ref("")

    function orderProducts(value: string) {
      selectedSort.value = value;
    }

    function fetchProductsBasedOnSort(): Product[] {
      let products: Product[];
      switch (selectedSort.value) {
        case "rate-ascending":
          products = productStore.sortProductsRatingAsc;
          break;
        case "rate-descending":
          products = productStore.sortProductsRatingDesc;
          break;
        case "price-descending":
          products = productStore.sortProductsPriceDesc;
          break;
        case "price-ascending":
          products = productStore.sortProductsPriceAsc;
          break;
        default:
          products = productStore.products;
      }
      return products;
    }

   function chooseCategory(value:string){
        selectedFilter.value=value
   }
    let products = computed(()=> fetchProductsBasedOnSort());
    products= computed(()=>productStore.filterProductsBasedOnCategory(selectedFilter.value))
  
</script>

<style scoped lang="scss">
.sort {
  display: flex;
  justify-content: flex-end;
  width: 90%;
  gap: 25px;
  padding: 20px;
  align-items: center;

  &__order{
    display: flex;
    gap:5px;
  }

  &__filter{
    display: flex;
    gap:5px;
  }
}
.products {
  display: flex;
  flex-direction: row;
  gap: 50px;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  &__product {
    display: flex;
    justify-content: center;
    width: 20%;
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 800px) {
  .products__product {
    width: 30%;
  }
  .sort{
    width:100%;
    justify-content:space-evenly;
    gap:35px;
  }
}

@media screen and (max-width: 600px) {
  .products__product {
    width: 30%;
   
  }
  .sort{
    width:100%;
    justify-content:center;
    gap:20px;
  }
}
</style>
