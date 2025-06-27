<template>
  <div class="contact__left">
    <h2 class="contact__section-title titillium-web-bold">Get in Touch</h2>
    <p class="contact__paragraph titillium-web-semibold">
      You can reach us through the contact form or via our official communication channels. We aim to respond within 24 hours on business days.
    </p>

    <div class="contact__details">
      <div class="contact__detail">
        <span class="contact__label titillium-web-bold">Address:</span>
        <span class="contact__text titillium-web-regular">399 Crowfield Road, Phoenix, Arizona 85012</span>
      </div>
      <div class="contact__detail">
        <span class="contact__label titillium-web-bold">Email:</span>
        <span class="contact__text titillium-web-regular">asff@fdsfsdc.com</span>
      </div>
      <div class="contact__detail">
        <span class="contact__label titillium-web-bold">Phone:</span>
        <span class="contact__text titillium-web-regular">+602-926-5809</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'contactDetails'
});
</script>

<style scoped lang="scss">
.contact__left {
  flex: 1 1 25%;
}

.contact__section-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
}

.contact__paragraph {
  margin-bottom: 25px;
  line-height: 1.6;
  color: #444;
}

.contact__details {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact__detail {
  display: flex;
  flex-direction: column;
}

.contact__label {
  font-weight: bold;
  color: #555;
}

.contact__text {
  color: #222;
}
</style>
