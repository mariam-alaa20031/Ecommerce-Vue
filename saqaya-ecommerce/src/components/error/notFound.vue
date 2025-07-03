<template>
  <div class="not-found">
    <div class="not-found__container">
    <h1>404 - Page Not Found</h1>
    <p>Oops! The page you are looking for doesn't exist.</p>
    <router-link to="/">Go Home</router-link>
  </div>
  </div>
</template>
<script lang="ts" setup>
  
</script>
<style scoped lang="scss">
.not-found{
    display:flex;
    width:100%;
    justify-content: center;
    align-items: center;
    height:400px;
    &__container{
        height:400px;
        align-content: center;
    }
    }
</style>