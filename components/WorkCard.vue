<template lang="pug">
.work-card
  .card-photo
    img(:src="image")
  .card-info
    h4 {{ title }}
    p.work-details {{ dateStr }}
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
});

const dateStr = computed(() => {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const day = props.date.getDate();
  const month = months[props.date.getMonth()];
  const year = props.date.getFullYear();

  return `${month} ${day}, ${year}`;
});
</script>

<style lang="scss" scoped>
@use "~/assets/css/variables" as *;

.work-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;

  .card-photo {
    width: 100%;
    padding: 0;
    border-radius: 6px;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      display: block;
    }
  }

  .card-info {
    padding: $spacing-lg;
  }

  &:hover {
    transform: translateY(-3px);
  }

  h4 {
    font-size: 1.3rem;
    margin-bottom: $spacing-xs;
  }

  .work-details {
    margin-bottom: $spacing-sm;
    font-weight: 400;
  }
}
</style>
