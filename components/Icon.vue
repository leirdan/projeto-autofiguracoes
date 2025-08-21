<template lang="pug">
.icon-item
  img(:src="`/images/icons/${name}.png`" :alt="label" class="icon-img")
  span {{ label }}
</template>

<script setup lang="ts">
defineProps({
  name: { type: String, required: true },
  label: { type: String, required: true },
});
</script>

<style scoped lang="scss">
.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon-img {
    max-width: 90px;
    max-height: 90px;
    width: 10vw;
    height: 10vh;
    object-fit: contain;
    margin-bottom: 0.5rem;
  }

  span {
    margin-top: 0.5rem;
    text-align: center;
    font-size: 0.9rem;
  }
}
</style>
