<template lang="pug">
section.page
  // Barra superior com logo
  header.header
    //- img.logo(src="/logo-ufrn.png" alt="Logo UFRN")

  // Títulos centrais
  main.main-content
    h1.title-outlined
      .primary Autofigurações
    h1.title-filled Autofigurações
    h1.title-outlined
      .secondary Autofigurações

  // Texto sobre o projeto
  section.project-info
    h2 Sobre o projeto
    p.
      It is a long established fact that a reader will be distracted by the readable content 
      of a page when looking at its layout. The point of using Lorem Ipsum is that it has 
      a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
      making it look like readable English. Many desktop publishing packages and web page 
      editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
      will uncover many web sites still in their infancy. Various versions have evolved over 
      the years, sometimes by accident, sometimes on purpose (injected humour and the like).

  section.explore
    h3 Explore
    .icon-grid
      .icon-item
        //- Icon(name="mdi:home" size="48")
        span Quem Somos
      .icon-item
        //- Icon(name="mdi:account" size="48")
        span Caracteres
      .icon-item
        //- Icon(name="mdi:puzzle" size="48")
        span Morfologia
      .icon-item
        //- Icon(name="mdi:brain" size="48")
        span Fisiologia
      .icon-item
        //- Icon(name="mdi:file-document" size="48")
        span Produções Próprias

</template>

<script setup>
// Usando Iconify
// import { Icon } from "@iconify/vue";
</script>

<style scoped lang="scss">
@use "~/assets/css/variables" as *;

.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;

  .header {
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: flex-start;

    .logo {
      height: 40px;
    }
  }

  .main-content {
    text-align: center;
    margin-top: 2rem;

    h1 {
      font-style: italic;
      font-size: 3.6rem;

      &.title-outlined {
        color: transparent;
        .primary {
          -webkit-text-stroke: 1px $primary-light-blue;
        }
        .secondary {
          -webkit-text-stroke: 1px $neutral-lighter;
        }
      }

      &.title-filled {
        font-weight: bold;
        color: #0047b3;
      }
    }
  }

  .project-info {
    max-width: 700px;
    margin-top: 2rem;

    h2 {
      font-weight: bold;
      font-size: $font-size-h5;
      margin-bottom: $spacing-sm;
    }
  }

  .explore {
    width: 700px;
    margin-top: 3rem;

    h3 {
      font-size: $font-size-h5;
      font-weight: bolder;
    }

    .icon-grid {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    .icon-item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}

@media (max-width: $mobile) {
  .explore {
  }
}
</style>
