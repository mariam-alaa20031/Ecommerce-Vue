<template>
  <label class="titillium-web-regular" for="product">Filter by:</label>
  <select name="sort" v-model="selectedFilter"   @change="changeFilter">
    <option class="titillium-web-extralight" disabled hidden value="default">none</option>
    <option value="men's clothing">men</option>
    <option value="women's clothing">women</option>
    <option value="jewelery">jewelery</option>
    <option value="electronics">electronics</option>
  </select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const emit = defineEmits<{
  (e: 'filterProducts', value: string): void
}>();

const selectedFilter = ref("default");

function changeFilter() {
  emit('filterProducts', selectedFilter.value);
}
</script>

<style scoped lang="scss">
</style>
