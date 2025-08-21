<template lang="pug">
.container
  div(v-if="charactersStore.isLoading")
    .loading-container
      p Carregando...

  div(v-else-if="charactersStore.error")
    .error-container
      p Erro: {{ charactersStore.error }}

  div(v-else-if="character")
    section.character-header
      .character-photo
        img(:src="character.image")
      .character-name
        h1 {{character.name}}
        p {{character.description}}
        // Adicionar categorias/tipos


    section.character-details
      .character-info
        .info
          h2.section-title Entrevista:  
          p.character-description {{ character.fullDescription }}
          .download-section(v-if="character.pdfAvailable")
            button.download-btn Baixar PDF
        .video 
          iframe(
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5nKgGNhRtcI?si=048l9sko0FYRNNM7"
            title="Entrevista"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            )

      .works-section(v-if="character.works && character.works.length > 0")
        h3.works-title Obras
        .works-grid
          WorkCard(
            v-for="work in character.works"
            :key="work.id"
            :title="work.title"
            :image="work.image"
            :date="work.date"
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
            :image="interview.image"
          )

  div(v-else)
    .not-found-container
      p Personagem não encontrado
</template>

<script setup lang="ts">
import Divider from "~/components/Divider.vue";
import { useCharactersStore } from "~/store/characters";
import type { Character, Interview, Work } from "~/types";

const route = useRoute();
const charactersStore = useCharactersStore();

const slug = route.params.slug as string;

console.log(slug);

const character = ref<Character | null>(null);

if (slug === "celine-song") {
  const works: Work[] = [
    {
      id: 1,
      title: "Vidas Passadas",
      date: new Date(),
      image: "/images/past-lifes.png",
    },
    {
      id: 2,
      title: "Amores Materialistas",
      date: new Date(),
      image: "/images/materialists.png",
    },
    {
      id: 3,
      title: "Roda do Tempo",
      date: new Date(),
      image: "/images/wheel-of-time.png",
    },
  ];

  character.value = {
    name: "Celine Song",
    description: 'Roteirista de "Vidas Passadas"',
    fullDescription:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    image: "/images/celine-song.png",
    roles: ["writer", "actor"],
    slug: "celine-song",
    pdfAvailable: true,
    works,
  };
}

// Mock data para entrevistas recomendadas - em produção viria da store
const recommendedInterviews = ref<Interview[]>([
  {
    id: "1",
    title: "Entrevista: Hirokazu Koreeda",
    subtitle: 'Diretor de "Monster"',
    date: "Março 25, 2025",
    category: "director",
    image: "/images/koreeda.png",
  },
  {
    id: "2",
    title: "Entrevista: Nelson Pereira dos Santos",
    subtitle: 'Diretor de "Vidas Secas"',
    date: "Junho 25, 2010",
    category: "director",
    image: "/images/nelson.png",
  },
  {
    id: "3",
    title: "Entrevista: Kleber Mendonça Filho",
    subtitle: 'Diretor de "Bacurau"',
    date: "Dezembro 25, 2025",
    category: "director",
    image: "/images/kleber.png",
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

.character-header {
  display: flex;
  flex-direction: row;
  align-items: center;

  .character-photo {
    flex: 1;
    margin-right: 2rem;

    img {
      width: 100%;
      height: auto;
      border-radius: 6px;
      object-fit: cover;
    }
  }

  .character-name {
    flex: 1;
    h1 {
      margin: 0 0 0.5rem 0;
      font-size: $font-size-h2;
    }
    p {
      margin: 0;
      line-height: 1.5;
      color: $text-color;
    }
  }
}

.character-details {
  padding: $spacing-xl 0;

  .section-title {
    font-size: 1.8rem;
    margin-bottom: $spacing-lg;
  }

  .character-description {
    line-height: 1.8;
    margin-bottom: $spacing-lg;
    color: $text-color;
  }

  .character-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    .info {
      text-align: justify;
    }
    .video {
    }

    .download-section {
      margin-bottom: $spacing-xl;

      .download-btn {
        background-color: $primary-color;
        color: white;
        padding: $spacing-sm $spacing-lg;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: darken($primary-color, 10%);
        }
      }
    }
  }

  .works-section {
    margin-bottom: $spacing-xl;

    .works-title {
      font-size: 1.5rem;
      margin-bottom: $spacing-lg;
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
    }

    .interviews-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: $spacing-lg;
    }
  }
}

@media (max-width: $mobile) {
  .category-tabs,
  .character-info {
    flex-direction: column;
  }

  .works-grid,
  .interviews-grid {
    grid-template-columns: 1fr;
  }
}
</style>
