<template lang="pug">
.morphology-card
  .influence {{ influence }}
  h3.morphology-title {{ title }}
  .description {{ description }}
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
  description: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
@use "~/assets/css/variables" as *;

.morphology-card {
  background: white;
  padding: $spacing-lg;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  border-left: 5px solid $primary-color;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.15);
  }

  .influence {
    font-size: 0.9rem;
    color: $accent-color;
    margin-bottom: $spacing-sm;
    font-style: italic;
  }

  .morphology-title {
    font-size: 1.3rem;
    margin-bottom: $spacing-md;
    color: $primary-color;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .description {
    line-height: 1.6;
    color: $text-color;
  }
}
</style>

