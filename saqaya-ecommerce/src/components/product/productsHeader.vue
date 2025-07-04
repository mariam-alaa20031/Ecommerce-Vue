<template>
<div class="header titillium-web-regular">
    <div class="header__description titillium-web-semibold">
        <h1>Products</h1>
        <p>Step into the world of Haelora — where fashion meets meaning. Whether it's a handcrafted ring or a flowy statement piece, every item in our collection is designed to reflect the light in you. Wear your story with confidence, grace, and a touch of everyday magic.</p>
    </div>
</div>
</template>

<script lang="ts" setup>


</script>

<style scoped lang="scss">
.header{
    background-color:  #ffffff;
&__description{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height:300px;
    padding: 20px;
    text-align: left;
    margin:0 90px 20px 90px;
    border-bottom: 1px solid rgb(237, 233, 237);
    
    h1 {
        font-size: 2em;
        margin-bottom: 10px;
    }

    p {
        font-size: 1.2em;
        color: #555;
        max-width:70%;
    }}
}

@media (max-width: 600px) {
  .header {
    &__description {
      height: auto;
      padding: 16px;
      margin: 0 16px 20px;
      max-width: 100%;

      h1 {
        font-size: 1.5em; 
      }

      p {
        font-size: 1em;    
        max-width: 100%;    
      }
    }
  }
}

</style>
