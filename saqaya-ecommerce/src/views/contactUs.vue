<template>
  <div class="contact">
    <contactHeader class="titillium-web-semibold" />
    <div class="contact__content">
      <contactDetails />
      <contactForm />
    </div>
  </div>
</template>

<script lang="ts" setup>
import contactHeader from '../components/contact/contactHeader.vue'
import contactDetails from '../components/contact/contactDetails.vue';
import contactForm from '../components/contact/contactForm.vue';


</script>

<style scoped lang="scss">
.contact {
  padding: 50px;
  max-width: 1200px;
  margin: auto;
  background-color: #fefefe;
}

.contact__content {
  display: flex;
  flex-wrap: wrap;
  width:100%;
  justify-content: space-around;
  gap: 20px;
}
</style>
