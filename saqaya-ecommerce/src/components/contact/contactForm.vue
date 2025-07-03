<template>
  <div class="contact__right">
    <h2 class="contact__section-title titillium-web-bold">Send a Message</h2>
    <form class="contact__form" @submit.prevent>
      <input type="text" placeholder="Your Name" class="contact__input" required />
      <input type="email" placeholder="Your Email" class="contact__input" required />
      <textarea placeholder="Your Message" class="contact__textarea" required></textarea>
      <button type="submit" class="contact__button titillium-web-semibold">Send Message</button>
    </form>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.contact__right {
  flex: 1 1 25%;
}

.contact__section-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
}

.contact__form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact__input,
.contact__textarea {
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

.contact__textarea {
  min-height: 120px;
  resize: vertical;
}

.contact__button {
  align-self: flex-start;
  padding: 10px 25px;
  color:white;
  font-size: 1rem;
  background-color: #2e4d73;
  border: solid 1px #91a6c0;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
       background-color: #e0e0e0;
       color:inherit;
       color: #2e4d73;
      }
}


</style>
