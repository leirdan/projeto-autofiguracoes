<template lang="pug">
.team-member
  h4 {{ name }}
  p.role {{ role }}
  p.description {{ description }}
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  profile: {
    type: Image,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
@use "~/assets/css/variables" as *;

.team-member {
  background: white;
  padding: $spacing-lg;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  h4 {
    font-size: $font-size-h4;
    margin-bottom: $spacing-sm;
    color: $primary-color;
  }

  .role {
    font-weight: bold;
    color: $accent-color;
    margin-bottom: $spacing-sm;
  }

  .description {
    line-height: 1.6;
    color: $text-color;
  }
}
</style>
