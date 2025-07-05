<template>
  <label class="titillium-web-regular" for="product">Sort by:</label>
  <select name="sort" v-model="selectedSort"   @change="changeSort">
    <option class="titillium-web-extralight" disabled hidden value="default">default</option>
    <option value="rate-ascending">least rated</option>
    <option value="rate-descending">most rated</option>
    <option value="price-ascending">lowest price</option>
    <option value="price-descending">highest price</option>
  </select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const emit = defineEmits<{
  (e: 'sortProducts', value: string): void
}>();

const selectedSort = ref("default");

function changeSort() {
  emit('sortProducts', selectedSort.value);
}
</script>

<style scoped lang="scss">
</style>
