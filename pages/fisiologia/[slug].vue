<template lang="pug">
div
  div(v-if="physiologyStore.isLoading")
    .loading-container
      p Carregando...

  div(v-else-if="physiologyStore.error")
    .error-container
      p Erro: {{ physiologyStore.error }}

  div(v-else-if="physiology")
    PageHeader(
      :title="physiology.title"
      :description="physiology.subtitle"
      :description-text="physiology.description"
    )

    section.physiology-details
      .container
        .physiology-info
          .influence-section
            h3 Influência: {{ physiology.influence }}
            p.influence-description {{ physiology.influenceDescription }}

        .case-study-section
          h3.section-title {{ physiology.caseStudyTitle }}
          p.case-study-description {{ physiology.caseStudyDescription }}

        .mechanisms-section(v-if="physiology.mechanisms && physiology.mechanisms.length > 0")
          h3.section-title Mecanismos Fisiológicos
          .mechanisms-grid
            .mechanism-card(v-for="mechanism in physiology.mechanisms" :key="mechanism.id")
              h4 {{ mechanism.title }}
              p {{ mechanism.description }}

        .works-section(v-if="physiology.works && physiology.works.length > 0")
          h3.section-title Obras Analisadas
          .works-grid
            WorkCard(
              v-for="work in physiology.works"
              :key="work.id"
              :title="work.title"
              :details="work.details"
              :description="work.description"
            )

        .related-content
          h3.section-title Conteúdo Relacionado
          .content-grid
            .content-item(v-for="content in relatedContent" :key="content.id")
              h4 {{ content.title }}
              p {{ content.description }}

  div(v-else)
    .not-found-container
      p Fisiologia não encontrada
</template>

<script setup lang="ts">
import { usePhysiologyStore } from "~/store/physiology";
import type { Physiology, RelatedContent } from "~/types";

const route = useRoute();
const physiologyStore = usePhysiologyStore();

const slug = route.params.slug as string;

// Buscar fisiologia pelo slug
await physiologyStore.fetchPhysiologyBySlug(slug);

const physiology = computed(
  (): Physiology | null => physiologyStore.currentPhysiology
);

const relatedContent = ref<RelatedContent[]>([
  {
    id: "1",
    title: "Artigos Acadêmicos",
    description: "Textos teóricos sobre fisiologia cinematográfica",
    type: "article",
  },
  {
    id: "2",
    title: "Entrevistas",
    description: "Conversas com cineastas sobre técnicas narrativas",
    type: "interview",
  },
  {
    id: "3",
    title: "Análises Fílmicas",
    description: "Estudos de caso de filmes representativos",
    type: "analysis",
  },
]);

useHead({
  title: computed(() =>
    physiology.value
      ? `Autofigurações - ${physiology.value.title}`
      : "Autofigurações - Fisiologia"
  ),
});

// Limpar erro ao sair da página
onUnmounted(() => {
  physiologyStore.clearError();
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

.physiology-details {
  padding: $spacing-xl 0;

  .physiology-info {
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

  .case-study-section {
    margin-bottom: $spacing-xl;

    .section-title {
      font-size: 1.8rem;
      margin-bottom: $spacing-lg;
      color: $primary-color;
    }

    .case-study-description {
      line-height: 1.8;
      color: $text-color;
    }
  }

  .mechanisms-section {
    margin-bottom: $spacing-xl;

    .section-title {
      font-size: 1.8rem;
      margin-bottom: $spacing-lg;
      color: $primary-color;
    }

    .mechanisms-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: $spacing-lg;
    }

    .mechanism-card {
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

      p {
        line-height: 1.5;
        color: $text-color;
      }
    }
  }

  .works-section {
    margin-bottom: $spacing-xl;

    .section-title {
      font-size: 1.8rem;
      margin-bottom: $spacing-lg;
      color: $primary-color;
    }

    .works-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: $spacing-lg;
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
  .mechanisms-grid,
  .works-grid,
  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>
