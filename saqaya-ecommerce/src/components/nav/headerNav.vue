<template>
  <div class="links" :class="$attrs.class" v-for="(link, index) in linkOptions" :key="index">
    <a
      @click="clickLink(index)"
      :class="index === props.activeIndex ? 'links__active' : 'links__default'"
      :href="link.href"
    >
      {{ link.name }}
    </a>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  activeIndex: number;
}>()

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'update-index', payload: { index: number}): void;
}>()

const linkOptions = [
  { name: "Home", href: "#/" },
  { name: "Products", href: "#/products" },
  { name: "Contact us", href: "#/contactUs" },
];

function clickLink(index: number) {
  emit('update-index', {
    index,
  })
  emit('close')
}
</script>

<style lang="scss">
.links {
  display: none;

  a {
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
