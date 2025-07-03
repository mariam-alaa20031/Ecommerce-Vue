<template>
<button class="header__menu"
:class="{ 'header__menu-active': cartSelected }">
     <div class="header__bar">
     </div>
     <div class="header__bar">
     </div>
     <div class="header__bar">
     </div>
    </button>
</template>
<script lang=ts>
import {defineComponent} from 'vue'

export default defineComponent({
    name: 'menuNav',
    props:{
        cartSelected:{required:true, type: Boolean}
    }
})
</script>