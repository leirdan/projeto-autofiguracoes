<template lang="pug">
section.page
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
        Icon(name="home", label="Quem Somos")
      .icon-item
        NuxtLink(to="/caracteres")
          Icon(name="user", label="Caracteres")
      .icon-item
        NuxtLink(to="/morfologia")
          Icon(name="extension", label="Morfologia")
      .icon-item
        Icon(name="brain", label="Fisiologia")
      .icon-item
        Icon(name="video-camera", label="Produções Próprias")

</template>

<script setup></script>

<style scoped lang="scss">
@use "~/assets/css/variables" as *;

.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;

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
        font-size: 4.4rem;
        font-weight: 900;

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
    margin-bottom: 5rem;

    h3 {
      font-size: $font-size-h4;
      font-weight: bolder;
    }

    .icon-grid {
      display: flex;
      gap: 2rem;
      margin-top: 1rem;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    .icon-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      a {
        color: $text-color;
        text-decoration: none;
      }
    }
  }
}

@media (max-width: $mobile) {
}
</style>
