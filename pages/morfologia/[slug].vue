<template lang="pug">
div
  div(v-if="morphologyStore.isLoading")
    .loading-container
      p Carregando...

  div(v-else-if="morphologyStore.error")
    .error-container
      p Erro: {{ morphologyStore.error }}

  div(v-else-if="morphology")
    PageHeader(
      :title="morphology.title"
      :description="morphology.subtitle"
      :description-text="morphology.description"
    )

    section.morphology-details
      .container
        .morphology-info
          .influence-section
            h3 Influência: {{ morphology.influence }}
            p.influence-description {{ morphology.influenceDescription }}

        .examples-section(v-if="morphology.examples && morphology.examples.length > 0")
          h3.section-title Exemplos e Análises
          .examples-grid
            .example-card(v-for="example in morphology.examples" :key="example.id")
              h4 {{ example.title }}
              p.example-description {{ example.description }}
              .example-details {{ example.details }}

        .related-content
          h3.section-title Conteúdo Relacionado
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

// Buscar morfologia pelo slug
await morphologyStore.fetchMorphologyBySlug(slug);

const morphology = computed(
  (): Morphology | null => morphologyStore.currentMorphology
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

// Limpar erro ao sair da página
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

.morphology-details {
  padding: $spacing-xl 0;

  .morphology-info {
    margin-bottom: $spacing-xl;

    .influence-section {
      background: #f9f9f9;
      padding: $spacing-lg;
      border-radius: 8px;
      border-left: 4px solid $primary-color;

      h3 {
        font-size: 1.3rem;
        margin-bottom: $spacing-md;
        color: $primary-color;
      }

      .influence-description {
        line-height: 1.6;
        color: $text-color;
      }
    }
  }

  .examples-section {
    margin-bottom: $spacing-xl;

    .section-title {
      font-size: 1.8rem;
      margin-bottom: $spacing-lg;
      color: $primary-color;
    }

    .examples-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: $spacing-lg;
    }

    .example-card {
      background: white;
      padding: $spacing-lg;
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-3px);
      }

      h4 {
        font-size: 1.2rem;
        margin-bottom: $spacing-sm;
        color: $primary-color;
      }

      .example-description {
        line-height: 1.5;
        margin-bottom: $spacing-sm;
        color: $text-color;
      }

      .example-details {
        font-size: 0.9rem;
        color: $accent-color;
        font-style: italic;
      }
    }
  }

  .related-content {
    .section-title {
      font-size: 1.8rem;
      margin-bottom: $spacing-lg;
      color: $primary-color;
    }

    .content-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: $spacing-lg;
    }

    .content-item {
      background: #f9f9f9;
      padding: $spacing-lg;
      border-radius: 8px;
      text-align: center;

      h4 {
        font-size: 1.2rem;
        margin-bottom: $spacing-sm;
        color: $primary-color;
      }

      p {
        color: $text-color;
        line-height: 1.5;
      }
    }
  }
}

@media (max-width: $mobile) {
  .examples-grid,
  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>
