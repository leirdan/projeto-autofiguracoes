<template lang="pug">
div
  PageHeader(
    title="Morfologia"
    description="O que é Morfologia no cinema?"
    :description-text="morphologyDescription"
  )

  section.categories-section
    .container
      h2.section-title Categorias
      .morphology-grid
        NuxtLink(to="/morfologia/montagem")
          MorphologyCard(
            influence="Influência: Sergei Eisenstein"
            title="Morfologia da MONTAGEM"
            description="Técnicas de montagem cinematográfica e construção de sentido através da edição."
          )
        MorphologyCard(
          influence="Influência: André Bazin / Realismo"
          title="Morfologia do PLANO-SEQUÊNCIA"
          description="Análise da continuidade temporal e espacial no cinema realista."
        )
        MorphologyCard(
          influence="Influência: Tom Gunning / Cinema primitivo"
          title="Morfologia do CINEMA DE ATRAÇÕES"
          description="Estudo das primeiras formas cinematográficas e seu impacto sensorial."
        )
        MorphologyCard(
          influence="Influência: André Bazin / Realismo"
          title="Morfologia do PLANO-SEQUÊNCIA"
          description="Continuidade e realismo na linguagem cinematográfica."
        )
        MorphologyCard(
          influence="Influência: Tom Gunning / Cinema primitivo"
          title="Morfologia do CINEMA DE ATRAÇÕES"
          description="Espetáculo e atração como elementos fundamentais do cinema."
        )
        MorphologyCard(
          influence="Influência: Sergei Eisenstein"
          title="Morfologia da MONTAGEM"
          description="Dialética e conflito na construção da narrativa fílmica."
        )

  section.related-content
    .container
      h2.section-title Conteúdo Relacionado
      .content-grid
        .content-item
          h4 Artigos Acadêmicos
          p Textos teóricos sobre morfologia cinematográfica
          
        .content-item
          h4 Entrevistas
          p Conversas com cineastas sobre técnicas narrativas
          
        .content-item
          h4 Análises Fílmicas
          p Estudos de caso de filmes representativos
</template>

<script setup>
const morphologyDescription = ref('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.')

useHead({
  title: 'Autofigurações - Morfologia'
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

  .morphology-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: $spacing-lg;

    a {
      text-decoration: none;
      color: inherit;
    }
  }
}

.related-content {
  padding: $spacing-xl 0;
  background-color: #f9f9f9;

  .section-title {
    font-size: 2rem;
    margin-bottom: $spacing-xl;
    text-align: center;
    color: $primary-color;
  }

  .content-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: $spacing-lg;
  }

  .content-item {
    background: white;
    padding: $spacing-lg;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
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
      color: $text-color;
      line-height: 1.5;
    }
  }
}

@media (max-width: $mobile) {
  .morphology-grid {
    grid-template-columns: 1fr;
  }

  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>

