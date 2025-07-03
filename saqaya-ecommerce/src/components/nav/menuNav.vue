<template>
  <button class="menu" :class="{ 'menu--active': cartSelected }">
    <div class="menu__bar"></div>
    <div class="menu__bar"></div>
    <div class="menu__bar"></div>
  </button>
</template>
<script lang="ts" setup>
defineProps<{ cartSelected: boolean }>();
</script>

<style lang="scss" scoped>

.menu {
    display: block;
    margin: 10px 10px;
    background-color: white;
    border: none;
    cursor: pointer;
  &--active {
    display: block !important;
    margin: 10px 10px;
    background-color: white;
    border: none;
    cursor: pointer;
  }

  &__bar {
    width: 30px;
    height: 2px;
    background-color: black;
    margin: 7px 0;
  }
}
@media screen and (min-width: 1000px) {
  .menu {
    display: none;
  }}
</style>
