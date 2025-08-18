<template lang="pug">
div
  PageHeader(
    title="Fisiologia"
    description="O que é Fisiologia no cinema?"
    :description-text="physiologyDescription"
  )

  section.categories-section
    .container
      h2.section-title Categorias
      .physiology-grid
        PhysiologyCard(
          influence="Influência: Alfred Hitchcock / Psicologia do Medo"
          title="Fisiologia do SUSPENSE"
          description="Estudo dos mecanismos psicológicos e físicos do suspense cinematográfico."
        )
        PhysiologyCard(
          influence="Influência: Gaspar Noé / Cinema Sensorial"
          title="Fisiologia DO ÊXTASE"
          description="Análise das reações corporais e sensoriais provocadas pelo cinema."
        )
        PhysiologyCard(
          influence="Influência: David Cronenberg / Body Horror"
          title="Fisiologia do TERROR CORPORAL"
          description="Investigação do horror visceral e suas manifestações físicas."
        )
        PhysiologyCard(
          influence="Influência: David Cronenberg / Body Horror"
          title="Fisiologia do TERROR CORPORAL"
          description="Transformações corporais e ansiedades contemporâneas no cinema."
        )
        PhysiologyCard(
          influence="Influência: Gaspar Noé / Cinema Sensorial"
          title="Fisiologia DO ÊXTASE"
          description="Experiências sensoriais extremas e alteração de consciência."
        )
        NuxtLink(to="/fisiologia/medo")
          PhysiologyCard(
            influence="Influência: Alfred Hitchcock / Psicologia do Medo"
            title="Fisiologia do SUSPENSE"
            description="Tensão narrativa e resposta emocional do espectador."
          )

  section.case-study
    .container
      h2.section-title A Fisiologia do Medo
      p.case-description It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.

      .works-section
        h3.works-title Obras
        .works-grid
          WorkCard(
            title="O Iluminado"
            details="1980, Kubrick"
            description="Análise psicológica do terror através do isolamento e da claustrofobia."
          )
          WorkCard(
            title="Hereditário"
            details="2018, Aster"
            description="Horror familiar e trauma geracional no cinema contemporâneo."
          )
          WorkCard(
            title="Corra!"
            details="2017, Peele"
            description="Terror racial e crítica social através do horror psicológico."
          )

      .recommended-interviews
        h3.interviews-title Entrevistas recomendadas dessa categoria
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
</template>

<script setup>
const physiologyDescription = ref('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.')

useHead({
  title: 'Autofigurações - Fisiologia'
})
</script>

<style lang="scss" scoped>
@use "~/assets/css/variables" as *;

.categories-section {
  padding: $spacing-xl 0;

  .section-title {
    font-size: 2rem;
    margin-bottom: $spacing-xl;
    text-align: center;
    color: $primary-color;
  }

  .physiology-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: $spacing-lg;

    a {
      text-decoration: none;
      color: inherit;
    }
  }
}

.case-study {
  padding: $spacing-xl 0;
  background-color: #f9f9f9;

  .section-title {
    font-size: 2rem;
    margin-bottom: $spacing-lg;
    text-align: center;
    color: $primary-color;
  }

  .case-description {
    max-width: 800px;
    margin: 0 auto $spacing-xl;
    line-height: 1.8;
    color: $text-color;
    text-align: center;
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
  .physiology-grid {
    grid-template-columns: 1fr;
  }

  .works-grid, .interviews-grid {
    grid-template-columns: 1fr;
  }
}
</style>

