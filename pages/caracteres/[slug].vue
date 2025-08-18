<template lang="pug">
div
  div(v-if="charactersStore.isLoading")
    .loading-container
      p Carregando...

  div(v-else-if="charactersStore.error")
    .error-container
      p Erro: {{ charactersStore.error }}

  div(v-else-if="character")
    PageHeader(
      :title="character.name"
      :description-text="character.description"
    )
      .categories
        h3 Categorias
        .category-tabs
          span.tab.active Tipos

    section.character-details
      .container
        .character-info
          h2.section-title Entrevista: {{ character.name }}, {{ character.role }}
          p.character-description {{ character.fullDescription }}
          .download-section(v-if="character.pdfAvailable")
            button.download-btn Baixar PDF

        .works-section(v-if="character.works && character.works.length > 0")
          h3.works-title Obras
          .works-grid
            WorkCard(
              v-for="work in character.works"
              :key="work.id"
              :title="work.title"
              :details="work.details"
              :description="work.description"
            )

        .recommended-interviews
          h3.interviews-title Entrevistas recomendadas
          .interviews-grid
            InterviewCard(
              v-for="interview in recommendedInterviews"
              :key="interview.id"
              :title="interview.title"
              :subtitle="interview.subtitle"
              :date="interview.date"
            )

  div(v-else)
    .not-found-container
      p Personagem não encontrado
</template>

<script setup lang="ts">
import { useCharactersStore } from "~/store/characters";
import type { Character, Interview } from "~/types";

const route = useRoute();
const charactersStore = useCharactersStore();

const slug = route.params.slug as string;

console.log(slug);
await charactersStore.fetchCharacterBySlug(slug);

const character = computed(
  (): Character | null => charactersStore.currentCharacter
);

// Mock data para entrevistas recomendadas - em produção viria da store
const recommendedInterviews = ref<Interview[]>([
  {
    id: "1",
    title: "Entrevista: Hirokazu Koreeda",
    subtitle: 'Diretor de "Monster"',
    date: "Março 25, 2025",
    category: "director",
    url: "",
  },
  {
    id: "2",
    title: "Entrevista: Nelson Pereira dos Santos",
    subtitle: 'Diretor de "Vidas Secas"',
    date: "Junho 25, 2010",
    category: "director",
    url: "",
  },
  {
    id: "3",
    title: "Entrevista: Kleber Mendonça Filho",
    subtitle: 'Diretor de "Bacurau"',
    date: "Dezembro 25, 2025",
    category: "director",
    url: "",
  },
]);

useHead({
  title: computed(() =>
    character.value
      ? `Autofigurações - ${character.value.name}`
      : "Autofigurações - Caracter"
  ),
});

// Limpar erro ao sair da página
onUnmounted(() => {
  charactersStore.clearError();
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

.categories {
  margin-top: $spacing-lg;

  h3 {
    margin-bottom: $spacing-md;
    color: $accent-color;
  }

  .category-tabs {
    display: flex;
    gap: $spacing-md;

    .tab {
      padding: $spacing-sm $spacing-md;
      border: 1px solid #ddd;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s ease;

      &.active {
        background-color: $primary-color;
        color: white;
        border-color: $primary-color;
      }

      &:hover:not(.active) {
        background-color: #f0f0f0;
      }
    }
  }
}

.character-details {
  padding: $spacing-xl 0;

  .section-title {
    font-size: 1.8rem;
    margin-bottom: $spacing-lg;
    color: $primary-color;
  }

  .character-description {
    line-height: 1.8;
    margin-bottom: $spacing-lg;
    color: $text-color;
  }

  .download-section {
    margin-bottom: $spacing-xl;

    .download-btn {
      background-color: $primary-color;
      color: white;
      padding: $spacing-sm $spacing-lg;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: darken($primary-color, 10%);
      }
    }
  }

  .works-section {
    margin-bottom: $spacing-xl;

    .works-title {
      font-size: 1.5rem;
      margin-bottom: $spacing-lg;
      color: $primary-color;
    }

    .works-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: $spacing-lg;
    }
  }

  .recommended-interviews {
    .interviews-title {
      font-size: 1.5rem;
      margin-bottom: $spacing-lg;
      color: $primary-color;
    }

    .interviews-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: $spacing-lg;
    }
  }
}

@media (max-width: $mobile) {
  .category-tabs {
    flex-direction: column;
  }

  .works-grid,
  .interviews-grid {
    grid-template-columns: 1fr;
  }
}
</style>
