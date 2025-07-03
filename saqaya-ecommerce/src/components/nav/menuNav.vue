<template>
  <div class="menu">
    <button class="menu__button" @click="clicked = true" >
      <div class="menu__button--bar"></div>
      <div class="menu__button--bar"></div>
      <div class="menu__button--bar"></div>
    </button>
    <div v-if="clicked" class="menu-panel" @mouseleave="clicked=!clicked">
      <headerNav />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import headerNav from './headerNav.vue'

const props = defineProps<{ cartSelected: boolean }>()
const clicked = ref(false)

watch(() => props.cartSelected, open => {
  if (open) clicked.value = false
})
</script>

<style scoped lang="scss">
.menu{
  border: 1px solid rgb(254, 255, 255);
  position: relative;
&__button{
  background: none;
  border: none;
  cursor: pointer;
  margin: 10px;

  &--bar {
    width: 30px;
    height: 2px;
    background-color: black;
    margin: 6px 0;
  }
}
  @media (min-width: 1000px) {
    display: none; 
  }
}

.menu-panel {
  position: absolute;
  top: 100%;
  left: 50%;
  background: white;
  padding: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  z-index: 10;

  @media (min-width: 1000px) {
    display: none; 
  }

  :deep(.links) {
    display: flex !important;
    flex-direction: column;
    gap: 8px;
    width:max-content;
    align-items: flex-start;
  }
}
</style>
