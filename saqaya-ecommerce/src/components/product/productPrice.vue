<template>
  <div class="details titillium-web-semibold">
    <div class="details__price" :class="!clickable ? 'singleProductPage' : ''">
      {{ price.toFixed(2) }} EGP
    </div>
  </div>
</template>

<script lang="ts" setup>
 defineProps<{
  price: number;
  clickable: boolean;
}>();
</script>

<style scoped lang="scss">
.details {
  display: flex;
  justify-content: center;
  align-items: center;

  &__price {
    font-size: 15px;
    color: black;
    text-decoration: none;
  }
}

.singleProductPage {
  font-size: 20px;
  color: black;
  text-decoration: none;
}

@media screen  and (max-width:600px){

  .singleProductPage{
    font-size: 0.85rem;
  }
  
}
</style>
