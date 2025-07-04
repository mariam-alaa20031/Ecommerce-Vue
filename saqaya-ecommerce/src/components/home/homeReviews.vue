<template>
  <div class="header titillium-web-regular">
    <div class="header__description titillium-web-semibold">
      <h1>What Our Clients Say</h1>
      <div class="header__description--review">
           “Honestly, Haelora is a game-changer. I ordered a smartwatch, kitchen blender, and shoes—all arrived early and in perfect condition. I’ve stopped shopping anywhere else!”
— Noura A., Cairo <br><br>
           “I love how easy it is to navigate Haelora’s site. They even remembered my last searches and made great suggestions. I bought everything I needed for my apartment in one go!”
— Dani S., Dubai
<br><br> “Prices are amazing, and the flash deals are even better. I got my makeup kit at half the retail price—super happy with the quality!”
— Lina M., Riyadh
    </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>
<style scoped lang="scss">
.header {
  background-color: #ffffff;
  padding: 20px;
  margin: 0 90px 20px 90px;

  h1 {
    font-size: 2em;
    margin-bottom: 10px;
  }

  &__description {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: justify;
    justify-content: flex-start;
    height: 300px;

    &--review {
      font-size: 1.2em;
      color: #555;
      max-width: 70%;
    }
  }
}

@media (max-width: 600px) {
  .header {
    max-width: 100%;
    padding: 5px;
    margin: 0 5px 10px 5px;

    h1 {
      font-size: 1.5em;
    }

    &__description {
      height: auto;

      &--review {
        font-size: 1em;
        max-width: 100%;
      }
    }
  }
}
</style>
