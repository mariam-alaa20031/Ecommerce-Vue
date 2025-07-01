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
import { defineComponent, ref } from "vue";
import { Product } from "../../public/interfaces/Product";
import sortDropdown from "../components/product/sortDropdown.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "productsPage",
  components: {
    productCard,
    productsHeader,
    sortDropdown,
  },
  setup() {
    const store = useStore();
    let selectedSort = ref("");
    function orderProducts(value: string) {
      selectedSort.value = value;
    }

    function fetchProductsBasedOnSort(): Product[] {
      let products: Product[];
      switch (selectedSort.value) {
        case "rate-ascending":
          products = store.getters.sortProductsRatingAsc;
          break;
        case "rate-descending":
          products = store.getters.sortProductsRatingDesc;
          break;
        case "price-descending":
          products = store.getters.sortProductsPriceDesc;
          break;
        case "price-ascending":
          products = store.getters.sortProductsPriceAsc;
          break;
        default:
          products = store.state.products;
      }
      return products;
    }

    let products: Product[] = fetchProductsBasedOnSort();
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
    width: 50%;
  }
}
</style>
