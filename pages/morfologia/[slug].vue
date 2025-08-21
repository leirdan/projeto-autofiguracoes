<template lang="pug">
div
  div(v-if="morphologyStore.isLoading")
    .loading-container
      p Carregando...

  div(v-else-if="morphologyStore.error")
    .error-container
      p Erro: {{ morphologyStore.error }}

  div(v-else-if="morphology")
    .container
      .main-image-container(v-if="morphology.mainImage")
        img(:src="morphology.mainImage" alt="Imagem principal da morfologia")

      PageHeader(
        :title="morphology.title"
        :description="morphology.subtitle"
        :description-text="morphology.description"
      )

    section.morphology-details.white-background
      .container
        .morphology-info
          .influence-section
            h3 Influência: {{ morphology.influence }}
            p.influence-description {{ morphology.influenceDescription }}

        .examples-section(v-if="morphology.examples && morphology.examples.length > 0")
          h3.section-title.with-line Exemplos e Análises
          .examples-grid
            .example-card(v-for="example in morphology.examples" :key="example.id")
              img.example-image(v-if="example.image" :src="example.image" :alt="`Imagem para ${example.title}`")
              .card-content
                h4 {{ example.title }}
                p.example-description {{ example.description }}
                .example-details {{ example.details }}

    section.related-content-section
      .container
        .related-content
          h3.section-title.with-line Conteúdo Relacionado
          .content-grid
            .content-item(v-for="content in relatedContent" :key="content.id")
              h4 {{ content.title }}
              p {{ content.description }}

  div(v-else)
    .not-found-container
      p Morfologia não encontrada
</template>

<script setup lang="ts">

import { useMorphologyStore } from "~/store/morphology";
import type { Morphology, RelatedContent } from "~/types";

const route = useRoute();
const morphologyStore = useMorphologyStore();

const slug = route.params.slug as string;

await morphologyStore.fetchMorphologyBySlug(slug);

const morphology = computed(
  () => morphologyStore.currentMorphology
);

const relatedContent = ref<RelatedContent[]>([
  {
    id: "1",
    title: "Artigos Acadêmicos",
    description: "Textos teóricos sobre montagem cinematográfica",
    type: "article",
  },
  {
    id: "2",
    title: "Entrevistas",
    description: "Conversas com editores e diretores",
    type: "interview",
  },
  {
    id: "3",
    title: "Análises Fílmicas",
    description: "Estudos de caso de filmes clássicos",
    type: "analysis",
  },
]);

useHead({
  title: computed(() =>
    morphology.value
      ? `Autofigurações - ${morphology.value.title}`
      : "Autofigurações - Morfologia"
  ),
});

onUnmounted(() => {
  morphologyStore.clearError();
});
</script>

<style lang="scss" scoped>
@use "~/assets/css/variables" as *;

.loading-container,
.error-container,
.not-found-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  p {
    font-size: 1.2rem;
    color: $text-color;
  }
}

.error-container p {
  color: #d32f2f;
}

.main-image-container {
  width: 100%;
  max-height: 500px;
  overflow: hidden;
  margin-top: $spacing-xl;
  margin-bottom: $spacing-xl;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
}

.section-title.with-line {
  position: relative;
  padding-bottom: $spacing-sm;
  margin-bottom: $spacing-lg;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 70px;
    height: 4px;
    background-color: $primary-color;
  }
}

.white-background {
  background-color: #ffffff;
}

.light-blue-background {
  background-color: #f0f8ff;
}

section {
  padding: $spacing-xl 0;
}

.morphology-details {
  padding-top: 0;
}

.morphology-details .morphology-info {
  margin-bottom: $spacing-xl;
}

.morphology-details .influence-section {
  background: #f9f9f9;
  padding: $spacing-lg;
  border-radius: 8px;
  border-left: 4px solid $primary-color;
}

.morphology-details .influence-section h3 {
  font-size: 1.3rem;
  margin-bottom: $spacing-md;
  color: $primary-color;
}

.morphology-details .influence-section .influence-description {
  line-height: 1.6;
  color: $text-color;
}

.morphology-details .examples-section {
  margin-bottom: $spacing-xl;
}

.morphology-details .examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 350px));
  gap: $spacing-lg;
}

.morphology-details .example-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  overflow: hidden;
}

.morphology-details .example-card:hover {
  transform: translateY(-5px);
}

.morphology-details .example-card .example-image {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.morphology-details .example-card .card-content {
  padding: $spacing-lg;
}

.morphology-details .example-card h4 {
  font-size: 1.2rem;
  margin-bottom: $spacing-sm;
  color: $primary-color;
}

.morphology-details .example-card .example-description {
  line-height: 1.5;
  margin-bottom: $spacing-sm;
  color: $text-color;
}

.morphology-details .example-card .example-details {
  font-size: 0.9rem;
  color: $accent-color;
  font-style: italic;
}

.related-content-section {
  background-color: #DAE6F2;
  padding: $spacing-xl 0;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
}

.related-content-section .related-content .section-title {
  font-size: 1.8rem;
  color: $primary-color;
}

.related-content-section .content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: $spacing-lg;
}

.related-content-section .content-item {
  background: #ffffff;
  padding: $spacing-lg;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.related-content-section .content-item h4 {
  font-size: 1.2rem;
  margin-bottom: $spacing-sm;
  color: $primary-color;
}

.related-content-section .content-item p {
  color: $text-color;
  line-height: 1.5;
}

@media (max-width: $mobile) {
  .examples-grid,
  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>
