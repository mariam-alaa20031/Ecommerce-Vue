<template>
<div class="header titillium-web-regular">
    <div class="description titillium-web-semibold">
        <h1>Welcome to Haelora</h1>
        <p>At Haelora, we believe that shopping shouldn’t be a hassle—it should be an experience. Whether you're searching for the latest fashion, cutting-edge tech, home essentials, beauty must-haves, or gifts that leave a mark, Haelora has it all under one digital roof.</p>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent} from 'vue'

export default defineComponent({
  name:"homeHeader",
})

</script>

<style scoped lang="scss">
.header{
    background-color:  #ffffff;
    h1{
        margin-bottom: 20px;
    }
}
.description{
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
    }
}

</style>
