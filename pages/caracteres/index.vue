<template lang="pug">
div
  PageHeader(
    title="Caracteres"
  )

  .container
    .filters
      .search
        input(placeholder="ex. Walter Salles")
      .categories
        select
          option(selected, value="Val")
      .roles
        select(label="saldasl")
          option(selected, value="Val")

  section.content-grid
    .container
      .interviews-section
        h2.section-title Diretores
        .interviews-grid
          InterviewCard(
            title="Entrevista: Hirokazu Koreeda"
            subtitle="Diretor de \"Monster\""
            date="Março 25, 2025"
          )
          InterviewCard(
            title="Entrevista: Nelson Pereira dos Santos"
            subtitle="Diretor de \"Vidas Secas\""
            date="Junho 25, 2010"
          )
          InterviewCard(
            title="Entrevista: Kleber Mendonça Filho"
            subtitle="Diretor de \"Bacurau\""
            date="Dezembro 25, 2025"
          )

        h2.section-title Roteiristas
        .interviews-grid
          NuxtLink(to="/caracteres/celine-song")
            InterviewCard(
              title="Entrevista: Celine Song"
              subtitle="Roteirista de \"Vidas Passadas\""
              date="Fevereiro 12, 2023"
            )
          InterviewCard(
            title="Entrevista: Guilhermo del Toro"
            subtitle="Roteirista de \"Pinóquio\""
            date="Fevereiro 15, 2025"
          )
          InterviewCard(
            title="Entrevista: Alfonso Cuarón"
            subtitle="Roteirista de \"Roma\""
            date="Dezembro 24, 2024"
          )

      .content-types
        h2.section-title Tipos de Conteúdo
        .content-grid
          .content-section
            h3 Vídeos
            .video-grid
              .video-card
                h5 Entrevista: Hirokazu Koreeda
                p.subtitle Diretor de "Monster"
                p.date Março 25, 2025

              .video-card
                h5 Entrevista: Nelson Pereira dos Santos
                p.subtitle Diretor de "Vidas Secas"
                p.date Junho 25, 2010

              .video-card
                h5 Entrevista: Kleber Mendonça Filho
                p.subtitle Diretor de "Bacurau"
                p.date Dezembro 25, 2025

          .content-section
            h3 Artigos
            .article-grid
              .article-card
                h5 Silva, A.; Oliveira, B.
                p.title A Linguagem Cinematográfica e a Construção de Sentidos
                p.description Análise da narrativa fílmica e elementos técnicos (enquadramento, montagem).

              .article-card
                h5 Johnson, C.; Lee, D.
                p.title Cinema e Representação Social: Gênero e Raça
                p.description Crítica à falta de diversidade em blockbusters.

              .article-card
                h5 Müller, E.; Santos, F.
                p.title O Impacto do Streaming na Indústria Cinematográfica
                p.description Mudanças nos hábitos de consumo pós-Netflix.
</template>

<script setup lang="ts">
import { useCategoriesStore } from "~/store/categories";
import { useCharactersStore } from "~/store/characters";
import { useRolesStore } from "~/store/roles";

useHead({
  title: "Autofigurações - Caracteres",
});

const rolesStore = useRolesStore();
const categoriesStore = useCategoriesStore();
const charactersStore = useCharactersStore();

await charactersStore.fetchCharacters();
// const characters = charactersStore.get;

// Separar caracteres por categorias.

const data = ref({});
</script>

<style lang="scss" scoped>
@use "~/assets/css/variables" as *;

.filters {
  display: flex;
  flex-direction: row;
  margin-top: $spacing-lg;

  .search {
    width: 60%;
  }

  .categories {
    width: 20%;
  }

  .roles {
    width: 20%;
  }
}

.content-grid {
  padding: $spacing-xl 0;

  .section-title {
    font-size: 1.8rem;
    margin-bottom: $spacing-lg;
    color: $primary-color;
    border-bottom: 2px solid #eee;
    padding-bottom: $spacing-sm;
  }

  .interviews-section {
    margin-bottom: $spacing-xl;
  }

  .interviews-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: $spacing-lg;
    margin-bottom: $spacing-xl;

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  .content-types {
    .content-section {
      margin-bottom: $spacing-xl;

      h3 {
        font-size: 1.5rem;
        margin-bottom: $spacing-lg;
        color: $primary-color;
      }
    }

    .video-grid,
    .article-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: $spacing-md;
    }

    .video-card,
    .article-card {
      background: #f9f9f9;
      padding: $spacing-md;
      border-radius: 6px;
      border-left: 4px solid $primary-color;

      h5 {
        margin-bottom: $spacing-xs;
        color: $primary-color;
      }

      .title {
        font-weight: bold;
        margin-bottom: $spacing-xs;
        color: $text-color;
      }

      .subtitle {
        color: $accent-color;
        margin-bottom: $spacing-xs;
      }

      .description {
        font-size: 0.9rem;
        color: $text-color;
        line-height: 1.5;
      }

      .date {
        font-size: 0.8rem;
        color: #999;
      }
    }
  }
}

@media (max-width: $mobile) {
  .category-tabs {
    flex-direction: column;
  }

  .interviews-grid {
    grid-template-columns: 1fr;
  }

  .video-grid,
  .article-grid {
    grid-template-columns: 1fr;
  }
}
</style>
