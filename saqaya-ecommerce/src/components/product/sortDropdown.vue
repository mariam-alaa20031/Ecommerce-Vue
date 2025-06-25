<template>
  <label for="product">Sort by:</label>
  <select  name="sort" v-model="selectedSort" @change="changeSort()">
    <option value="rate-ascending">least rated</option>
    <option value="rate-descending">most rated</option>
    <option value="price-ascending">lowest price</option>
    <option value="price-descending">highest price</option>
  </select>
</template>
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name:'sortDropdown',
  data(){
     return ({
         selectedSort:"",
     })
  },
  emits: ['sortProducts'],
  methods:{
    changeSort(){
      this.$emit('sortProducts',this.selectedSort)
    }
  }
})
</script>

<style scoped lang="scss"></style>
