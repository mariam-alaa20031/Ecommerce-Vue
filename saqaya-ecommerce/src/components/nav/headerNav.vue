<template>
  <div class="links" v-for="(link, index) in linkOptions" :key="index">
    <a
      @click="clickLink(index)"
      :class="index === activeIndex ? 'links__active' : 'links__default'"
      :href="link.href"
    >
      {{ link.name }}
    </a>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const linkOptions = [
  { name: "Home", href: "#/" },
  { name: "Products", href: "#/products" },
  { name: "Contact us", href: "#/contactUs" },
];

const activeIndex = ref(0);

function clickLink(index: number) {
  activeIndex.value = index;
}

</script>

<style lang="scss" scoped>
.links {
  display: none;

  &a {
    cursor: pointer;
  }

  &__active {
    font-weight: bold;
    text-decoration: underline;
    color: #acaef3;
  }

  &__default {
    font-weight: normal;
    text-decoration: none;
    color: #2c3e50;
  }
}
@media screen and (min-width: 1000px) {
  .links {
    display: flex;
    gap: 40px;
  }
}
</style>
