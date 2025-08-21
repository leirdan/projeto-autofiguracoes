<template lang="pug">
.morphology-card
  img.card-image(v-if="image" :src="image" :alt="title")
  .card-content
    p.influence {{ influence }}
    h3.morphology-title {{ title }}
</template>

<script setup>

defineProps({
  influence: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },

  description: {
    type: String,
    required: false
  }
})
</script>

<style lang="scss" scoped>
@use "~/assets/css/variables" as *;

.morphology-card {
  background: white;
  border-radius: 0; 
  box-shadow: none;
  transition: all 0.3s ease;
  border: none; 
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {

    transform: translateY(-5px);
  }

  .card-image {
    width: 100%;
    height: 200px; 
    object-fit: cover; 
  }

  .card-content {
    padding: $spacing-md $spacing-xs;
  }

  .influence {
    font-size: 0.9rem;
    color: $neutral-dark; 
    margin-bottom: $spacing-xs;
    font-style: normal;
  }

  .morphology-title {
    font-size: 1.25rem;
    color: #113272; 
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: normal; 
    line-height: 1.3;
  }

}
</style>
