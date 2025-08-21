<template lang="pug">
section.page-header(:class="headerClass")
  .container
    h1.page-title {{ title }}
    p.page-description(v-if="description") {{ description }}
    p.description-text(v-if="descriptionText") {{ descriptionText }}
    slot
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  descriptionText: {
    type: String,
    default: ''
  },
  headerClass: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
@use "~/assets/css/variables" as *;

.page-header {
  padding: $spacing-xl 0;
  // background: linear-gradient(135deg, #f9f9f9 0%, #e9e9e9 100%);
  background: transparent;

  &.hero {
    text-align: center;
    background-color: #f9f9f9;
  }

  .page-title {
    font-size: 2.5rem;
    margin-bottom: $spacing-md;
    color: $primary-color;
  }

  .page-description {
    font-size: $font-size-h4;
    margin-bottom: $spacing-lg;
    color: $accent-color;
    font-weight: 600;
  }

  .description-text {
    max-width: 800px;
    line-height: 1.8;
    color: $text-color;
  }

  &.hero {
    .page-title {
      font-size: 3rem;
    }

    .description-text {
      margin: 0 auto;
    }
  }
}

@media (max-width: $mobile) {
  .page-header {
    .page-title {
      font-size: 2rem;
    }

    &.hero .page-title {
      font-size: 2rem;
    }
  }
}
</style>

