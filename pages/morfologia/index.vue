<template lang="pug">
div
  section.custom-header
    .container.header-grid
      .header-image
        img(src="/images/morfologia_main.jpg" alt="Imagem representativa de Morfologia no Cinema")
      .header-content
        h1.header-title O que é Morfologia no cinema?
        p.header-description {{ morphologyDescription }}

  section.categories-section
    .container
      h2.section-title Categorias
      .morphology-grid
        NuxtLink(
          v-for="item in morphologyItems"
          :key="item.id"
          :to="`/morfologia/${item.slug}`"
        )
          MorphologyCard(
            :title="item.title"
            :influence="item.influence"
            :image="item.image"
          )
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Morphology } from '~/types/index';

useHead({
  title: 'Autofigurações - Morfologia'
});

const morphologyDescription = ref('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.');

const morphologyItems = ref<Morphology[]>([
  {
    id: 1,
    title: "Morfologia da Montagem",
    influence: "Influência: Sergei Eisenstein",
    slug: "montagem",
    image: "/images/morfologia_montagem.jpg"
  },
  {
    id: 2,
    title: "Morfologia do Plano-Sequência",
    influence: "Influência: André Bazin / Realismo",
    slug: "plano-sequencia",
    image: "/images/morfologia_planosequencia.jpg"
  },
  {
    id: 3,
    title: "Morfologia do Cinema de Atrações",
    influence: "Influência: Tom Gunning / Cinema primitivo",
    slug: "cinema-de-atracoes",
    image: "/images/morfologia_cinemaatracoes.jpg"
  },
  {
    id: 4,
    title: "Morfologia do PLANO-SEQUÊNCIA",
    influence: "Influência: André Bazin / Realismo",
    slug: "plano-sequencia-2",
    image: "/images/morfologia_planosequencia.jpg"
  },
  {
    id: 5,
    title: "Morfologia do CINEMA DE ATRAÇÕES",
    influence: "Influência: Tom Gunning / Cinema primitivo",
    slug: "cinema-de-atracoes-2",
    image: "/images/morfologia_cinemaatracoes.jpg"
  },
  {
    id: 6,
    title: "Morfologia da MONTAGEM",
    influence: "Influência: Sergei Eisenstein",
    slug: "montagem-2",
    image: "/images/morfologia_montagem.jpg"
  }
]);
</script>

<style lang="scss" scoped>
@use "~/assets/css/variables" as *;

.custom-header {
  padding: $spacing-xl 0;
  background-color: #fff; 

  .header-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $spacing-lg;
    align-items: center;
  }

  .header-image img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  .header-content {
    .header-title {
      font-size: 2.5rem;
      font-weight: bold;
      color: $text-color;
      margin-bottom: $spacing-md;
    }

    .header-description {
      font-size: 1rem;
      color: $text-color;
      line-height: 1.6;
    }
  }
}

.categories-section {
  padding: $spacing-xl 0;

  .section-title {
    font-size: 2rem;
    margin-bottom: $spacing-md;
    color: $text-color;
    text-align: left;
    border-bottom: 3px solid $primary-color;
    padding-bottom: $spacing-sm;
    display: inline-block;
  }

  .morphology-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: $spacing-lg;
    margin-top: $spacing-lg;

    a {
      text-decoration: none;
      color: inherit;
      display: flex;
      transition: transform 0.2s ease-in-out;

      &:hover {
        transform: translateY(-5px);
      }
    }
  }
}

@media (max-width: $tablet) {
  .custom-header .header-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .custom-header .header-content .header-title {
    font-size: 2rem;
  }
}

@media (max-width: $mobile) {
  .categories-section .morphology-grid {
    grid-template-columns: 1fr;
  }

  .custom-header .header-content .header-title {
    font-size: 1.8rem;
  }
}
</style>
