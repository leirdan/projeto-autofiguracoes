<template lang="pug">
.work-card
  h4 {{ title }}
  p.work-details {{ details }}
  .work-description(v-if="description") {{ description }}
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
@use "~/assets/css/variables" as *;

.work-card {
  background: white;
  padding: $spacing-lg;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  h4 {
    font-size: 1.3rem;
    margin-bottom: $spacing-xs;
    color: $primary-color;
  }

  .work-details {
    color: $accent-color;
    margin-bottom: $spacing-sm;
    font-weight: 600;
  }

  .work-description {
    font-size: 0.9rem;
    line-height: 1.5;
    color: $text-color;
  }
}
</style>

