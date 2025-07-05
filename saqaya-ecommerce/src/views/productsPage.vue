<template>
  <productsHeader />

  <div class="products__sort">
    <sortDropdown @sortProducts="orderProducts" />
  </div>

  <div class="products__wrapper">
    <!-- Arrows only on desktop -->
    <button
      class="products__arrow products__arrow--left"
      @click="goPrev"
      :disabled="isPrevDisabled"
      v-if="!isMobile"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
        <path
          fill-rule="evenodd"
          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
        />
      </svg>
    </button>

    <div class="products__list" ref="productContainer">
      <div
        class="products__item"
        v-for="product in displayedProducts"
        :key="product.id"
      >
        <productCard :product="product" :clickable="true" />
      </div>
    </div>

    <!-- Arrows only on desktop -->
    <button
      class="products__arrow products__arrow--right"
      @click="goNext"
      :disabled="isNextDisabled"
      v-if="!isMobile"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
        />
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import productCard from "../components/product/productCard.vue";
import productsHeader from "../components/product/productsHeader.vue";
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
    const selectedSort = ref("");
    const currentPage = ref(1);
    const productContainer = ref<HTMLElement | null>(null);
    const isMobile = ref(window.innerWidth <= 600);

    const products = computed(() => {
      switch (selectedSort.value) {
        case "rate-ascending":
          return productStore.sortProductsRatingAsc;
        case "rate-descending":
          return productStore.sortProductsRatingDesc;
        case "price-descending":
          return productStore.sortProductsPriceDesc;
        case "price-ascending":
          return productStore.sortProductsPriceAsc;
        default:
          return productStore.products;
      }
    });

    const itemsPerPage = computed(() => (isMobile.value ? 0 : 2));

    const paginatedProducts = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return products.value.slice(start, end);
    });

    const displayedProducts = computed(() =>
      isMobile.value ? products.value : paginatedProducts.value
    );

    const goNext = () => {
      currentPage.value++;
    };

    const goPrev = () => {
      currentPage.value--;
    };

    const isPrevDisabled = computed(() =>
      isMobile.value ? false : currentPage.value === 1
    );

    const isNextDisabled = computed(() =>
      isMobile.value
        ? false
        : currentPage.value >= Math.ceil(products.value.length / itemsPerPage.value)
    );

    const orderProducts = (value: string) => {
      selectedSort.value = value;
      currentPage.value = 1;
    };

    const handleResize = () => {
      isMobile.value = window.innerWidth <= 600;
    };

    onMounted(() => {
      window.addEventListener("resize", handleResize);
    });

    return {
      selectedSort,
      orderProducts,
      products,
      displayedProducts,
      currentPage,
      itemsPerPage,
      goNext,
      goPrev,
      isPrevDisabled,
      isNextDisabled,
      productContainer,
      isMobile,
    };
  },
});
</script>

<style scoped lang="scss">
.products__sort {
  display: flex;
  justify-content: flex-end;
  width: 90%;
  gap: 10px;
  padding: 20px;
  align-items: center;
}

.products__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
}

.products__list {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.products__item {
  display: flex;
  justify-content: center;
  width: 30%;
  margin-bottom: 20px;

  @media screen and (max-width: 800px) {
    width: 30%;
  }
}

.products__arrow {
  background-color: #a1acb9;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &--left {
    margin-right: 20px;
  }

  &--right {
    margin-left: 20px;
  }
}

@media screen and (max-width: 600px) {
 

  .products__item {
    flex: 0 0 30%;
    scroll-snap-align: center;
    margin-bottom: 0;
  }

  .products__arrow {
    display: none;
  }
}
</style>
