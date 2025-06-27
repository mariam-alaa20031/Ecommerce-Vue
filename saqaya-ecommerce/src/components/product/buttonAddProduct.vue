<template>
  <button class="add" @click="add(product)">
    Add to cart
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PropType } from "vue";
import { Product } from "../../../public/interfaces/Product";

export default defineComponent({
  name: "buttonAddProduct",
  props: {
    product: { type: Object as PropType<Product>, required: true },
    add:{type:Function, required:true}  
  
  },
});
</script>
<style scoped lang="scss">
.add{
      background-color: #2e4d73;
      border: solid 1px #91a6c0;
      color:inherit;
      width: 70%;
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        background-color: #e0e0e0;
        color: #2e4d73;
      }}
</style>