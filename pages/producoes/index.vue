<template lang="pug">
div
  section.page-header
    .container
      h1.page-title Produções Próprias
      p.page-description Conteúdo original produzido pela equipe Autofigurações

  section.productions-showcase
    .container
      .production-categories
        h2.section-title Categorias de Produção
        .categories-grid
          .category-card
            h3 Documentários
            p Filmes documentários sobre cinema e narrativa
            .count 12 produções

          .category-card
            h3 Entrevistas
            p Conversas exclusivas com cineastas
            .count 45 entrevistas

          .category-card
            h3 Ensaios Visuais
            p Experimentos audiovisuais autorais
            .count 8 ensaios

          .category-card
            h3 Podcasts
            p Discussões sobre teoria cinematográfica
            .count 23 episódios

      .featured-productions
        h2.section-title Produções em Destaque
        .featured-grid
          .featured-item
            .production-image
              .placeholder-image Imagem do Projeto
            .production-info
              h4 Série: Morfologias do Cinema Brasileiro
              p.production-type Documentário • 2024
              p.description Uma investigação profunda sobre as diferentes formas narrativas do cinema nacional, explorando desde o Cinema Novo até as produções contemporâneas.
              .production-meta
                span.duration 45 min
                span.episodes 6 episódios

          .featured-item
            .production-image
              .placeholder-image Imagem do Projeto
            .production-info
              h4 Podcast: Fisiologia do Espectador
              p.production-type Podcast • 2024
              p.description Análise das reações físicas e emocionais provocadas pelo cinema, com base em estudos neurocientíficos e teoria cinematográfica.
              .production-meta
                span.duration 30 min
                span.episodes 12 episódios

          .featured-item
            .production-image
              .placeholder-image Imagem do Projeto
            .production-info
              h4 Ensaio: Tempo e Memória em Tarkovsky
              p.production-type Ensaio Visual • 2023
              p.description Experimento audiovisual que explora a concepção temporal na obra do cineasta russo através de montagem e sobreposições.
              .production-meta
                span.duration 18 min
                span.format Experimental

      .upcoming-projects
        h2.section-title Projetos em Desenvolvimento
        .upcoming-grid
          .upcoming-item
            h4 Cinema e Inteligência Artificial
            p.project-type Documentário
            p.status Em pré-produção
            p.description Investigação sobre o impacto da IA na criação cinematográfica contemporânea.

          .upcoming-item
            h4 Arquivo Vivo: Glauber Rocha
            p.project-type Plataforma Digital
            p.status Em desenvolvimento
            p.description Arquivo interativo com materiais inéditos do cineasta baiano.

          .upcoming-item
            h4 Laboratório de Narrativas
            p.project-type Série Web
            p.status Roteiro em desenvolvimento
            p.description Experimentos narrativos com novas tecnologias de storytelling.
</template>

<script setup>
useHead({
  title: "Autofigurações - Produções Próprias",
});
</script>

<style lang="scss" scoped>
@use "~/assets/css/variables" as *;

.page-header {
  padding: $spacing-xl 0;
  background: linear-gradient(135deg, #f6f6f6 0%, #e6e6e6 100%);
  text-align: center;

  .page-title {
    font-size: 2.5rem;
    margin-bottom: $spacing-md;
    color: $primary-color;
  }

  .page-description {
    font-size: $font-size-h4;
    color: $accent-color;
    max-width: 600px;
    margin: 0 auto;
  }
}

.productions-showcase {
  padding: $spacing-xl 0;

  .section-title {
    font-size: 2rem;
    margin-bottom: $spacing-xl;
    color: $primary-color;
    text-align: center;
  }

  .production-categories {
    margin-bottom: $spacing-xl * 2;

    .categories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: $spacing-lg;
    }

    .category-card {
      background: white;
      padding: $spacing-lg;
      border-radius: 12px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
      text-align: center;
      transition: all 0.3s ease;
      border-top: 4px solid $primary-color;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
      }

      h3 {
        font-size: 1.3rem;
        margin-bottom: $spacing-sm;
        color: $primary-color;
      }

      p {
        color: $text-color;
        margin-bottom: $spacing-md;
        line-height: 1.5;
      }

      .count {
        font-weight: bold;
        color: $accent-color;
        font-size: 1.1rem;
      }
    }
  }

  .featured-productions {
    margin-bottom: $spacing-xl * 2;

    .featured-grid {
      display: grid;
      gap: $spacing-xl;
    }

    .featured-item {
      display: grid;
      grid-template-columns: 300px 1fr;
      gap: $spacing-lg;
      background: white;
      padding: $spacing-lg;
      border-radius: 12px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-3px);
      }

      .production-image {
        .placeholder-image {
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: $accent-color;
          font-weight: 600;
        }
      }

      .production-info {
        h4 {
          font-size: 1.4rem;
          margin-bottom: $spacing-xs;
          color: $primary-color;
        }

        .production-type {
          color: $accent-color;
          margin-bottom: $spacing-md;
          font-weight: 600;
        }

        .description {
          line-height: 1.6;
          margin-bottom: $spacing-md;
          color: $text-color;
        }

        .production-meta {
          display: flex;
          gap: $spacing-md;

          span {
            background: #f0f0f0;
            padding: $spacing-xs $spacing-sm;
            border-radius: 4px;
            font-size: 0.9rem;
            color: $accent-color;
          }
        }
      }
    }
  }

  .upcoming-projects {
    background: #f9f9f9;
    padding: $spacing-xl;
    border-radius: 12px;

    .upcoming-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: $spacing-lg;
    }

    .upcoming-item {
      background: white;
      padding: $spacing-lg;
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      border-left: 4px solid #ffa726;

      h4 {
        font-size: 1.2rem;
        margin-bottom: $spacing-xs;
        color: $primary-color;
      }

      .project-type {
        color: $accent-color;
        margin-bottom: $spacing-xs;
        font-weight: 600;
      }

      .status {
        color: #ffa726;
        margin-bottom: $spacing-sm;
        font-weight: 600;
        font-size: 0.9rem;
      }

      .description {
        line-height: 1.5;
        color: $text-color;
        font-size: 0.95rem;
      }
    }
  }
}

@media (max-width: $mobile) {
  .page-title {
    font-size: 2rem;
  }

  .categories-grid {
    grid-template-columns: 1fr;
  }

  .featured-item {
    grid-template-columns: 1fr !important;
  }

  .upcoming-grid {
    grid-template-columns: 1fr;
  }
}
</style>
