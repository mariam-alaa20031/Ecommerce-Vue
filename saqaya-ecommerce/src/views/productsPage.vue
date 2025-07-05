<template>
  <productsHeader></productsHeader>
  <div class="sort">
    <div class="sort__order">
      <sortDropdown @sortProducts="orderProducts" />
    </div>
    <div class="sort__filter">
      <filterProducts @filterProducts="chooseCategory" />
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
import { ref, computed } from "vue";
import productCard from "../components/product/productCard.vue";
import productsHeader from "../components/product/productsHeader.vue";
import sortDropdown from "../components/product/sortDropdown.vue";
import filterProducts from "@/components/product/filterProducts.vue";
import { useProductStore } from "../stores/productStore";
import { Product } from "../../public/interfaces/Product";

defineProps<{ clickable: boolean }>();

const productStore = useProductStore();
const selectedSort = ref("");
const selectedFilter = ref("");

function orderProducts(value: string) {
  selectedSort.value = value;
}

function chooseCategory(value: string) {
  selectedFilter.value = value;
}

const products = computed(() => {
  let sorted: Product[];

  switch (selectedSort.value) {
    case "rate-ascending":
      sorted = productStore.sortProductsRatingAsc;
      break;
    case "rate-descending":
      sorted = productStore.sortProductsRatingDesc;
      break;
    case "price-descending":
      sorted = productStore.sortProductsPriceDesc;
      break;
    case "price-ascending":
      sorted = productStore.sortProductsPriceAsc;
      break;
    default:
      sorted = productStore.products;
  }

  if (selectedFilter.value) {
    return sorted.filter(
      (product) => product.category === selectedFilter.value
    );
  }

  return sorted;
});
</script>

<style scoped lang="scss">
.sort {
  display: flex;
  justify-content: flex-end;
  width: 90%;
  gap: 25px;
  padding: 20px;
  align-items: center;
  margin-left:0;
  padding-left:0;
  &__order {
    display: flex;
    gap: 5px;
  }

  &__filter {
    display: flex;
    gap: 5px;
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

  .sort {
    width: 100%;
    justify-content: center;
    gap: 35px;
  }
}

@media screen and (max-width: 600px) {
  .products__product {
    width: 40%;
  }

  .sort {
    width: 100%;
    justify-content: space-evenly;
    gap: 20px;
  }
}
</style>
