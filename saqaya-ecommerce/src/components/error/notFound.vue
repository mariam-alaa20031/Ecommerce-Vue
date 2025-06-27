<template>
  <div class="not-found">
    <h1>404 - Page Not Found</h1>
    <p>Oops! The page you are looking for doesn't exist.</p>
    <router-link to="/">Go Home</router-link>
  </div>
</template>
<script lang="ts">
  import {defineComponent} from 'vue'
  export default defineComponent(
    {
        name:"notFound",
        
    }
  )
</script>
