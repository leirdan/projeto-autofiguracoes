<template lang="pug">
.interview-card
  h4 {{ title }}
  p.subtitle {{ subtitle }}
  p.date {{ date }}
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
@use "~/assets/css/variables" as *;

.interview-card {
  background: white;
  padding: $spacing-lg;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  h4 {
    font-size: 1.2rem;
    margin-bottom: $spacing-sm;
    color: $primary-color;
  }

  .subtitle {
    color: $accent-color;
    margin-bottom: $spacing-xs;
  }

  .date {
    font-size: 0.9rem;
    color: #999;
  }
}
</style>

