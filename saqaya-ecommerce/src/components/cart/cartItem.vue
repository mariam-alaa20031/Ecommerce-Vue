<template>
    <div class="cart" v-for="product in cart" :key="product.id">
        <img class="cart__img" :src="product.image">
         <cartItemDescription :product="product"></cartItemDescription>  
    </div>
     <div class="cart__total titillium-web-bold">
            <div class="cart__total--display">Total:</div>
            <div class="cart__total--price">{{ sum.toFixed(2) +" LE" }}</div>
         </div> 

</template>

<script lang="ts">
import {defineComponent} from 'vue'
import { Product} from '../../../public/Product';
import { PropType } from 'vue';
import cartItemDescription from './cartItemDescription.vue';

export default defineComponent({
    name:"cartItem",
    components:{
        cartItemDescription
    },
    props:{
        cart: {type: Object as PropType<Record<number,number>>,
               required:true
        },
    },
    methods:{
          
    },
    computed:{
    sum():number{
             let sum=0
             this.$store.state.cart.forEach((product:Product)=>{
                sum+=product.price
             })
             return sum
    },
    }
    
})
</script>

<style scoped lang="scss">
.cart{
    display:flex;
    padding:20px;

    &__img{
        width:50px;
        height:50px;
    }

    &__total{
        display:flex;
        padding:20px;
        justify-content: space-between;

        &--price{
            margin-right:10px
        }
    }

}
</style>