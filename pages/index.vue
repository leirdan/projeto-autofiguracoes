<template lang="pug">
section.page
  header.header
    //- img.logo(src="/logo-ufrn.png" alt="Logo UFRN")

  main
    .main-title
      h1.filled Autofigurações

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

<script setup></script>

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

  main {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    .main-title {
      text-align: center;
      margin-top: 2rem;

      h1 {
        font-style: italic;
        font-size: 3.6rem;

        &.filled {
          font-weight: bold;
          color: $primary-blue;
        }
      }
    }

    .project-info {
      max-width: 700px;
      margin-top: 2rem;

      h2 {
        font-weight: bold;
        font-size: $font-size-h4;
        margin-bottom: $spacing-sm;
      }
      p {
        text-align: justify;
        line-height: 20px;
      }
    }
  }

  .explore {
    width: 700px;
    margin-top: 3rem;

    h3 {
      font-size: $font-size-h4;
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
