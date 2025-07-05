<template>
  <productsHeader></productsHeader>
  <div class="sort">
    <sortDropdown @sortProducts="orderProducts"></sortDropdown>
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

<script lang="ts">
import productCard from "../components/product/productCard.vue";
import productsHeader from "../components/product/productsHeader.vue";
import { defineComponent, ref, computed} from "vue";
import { Product } from "../../public/interfaces/Product";
import sortDropdown from "../components/product/sortDropdown.vue";
import { useProductStore } from "../stores/productStore";

export default defineComponent({
  name: "productsPage",
  components: {
    productCard,
    productsHeader,
    sortDropdown,
  },
  setup() {
    const productStore = useProductStore();
    let selectedSort = ref("");
    
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

    const products = computed(()=> fetchProductsBasedOnSort());
    return {
      selectedSort,
      orderProducts,
      products,
    };
  },
  props: {
    clickable: {
      type: Boolean,
      required: false,
    },
  },
});
</script>

<style scoped lang="scss">
.sort {
  display: flex;
  justify-content: flex-end;
  width: 90%;
  gap: 10px;
  padding: 20px;
  align-items: center;
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
}

@media screen and (max-width: 600px) {
  .products__product {
    width: 30%;
   
  }
}
</style>
