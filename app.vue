<template lang="pug">
NuxtLayout
  div
    header.header
      nav.nav
        .nav-brand
          NuxtLink(to="/") 
            img(src="/assets/images/LogoUFRN.png")
        .nav-links
         NuxtLink(
          v-for="(item, index) in navbarItems"
          :key="index"
          :to="item.path"
          ) {{ item.name }}
  
    main.main
      NuxtPage(:key="$route.fullPath") 
  
    footer.footer
      .footer-content
        img(src="/assets/images/LogoUFRNFooter.png")
        .footer-info
          p © Autofigurações, {{year}} 
          p contato@autofigurações.com
          p Universidade Federal do Rio Grande do Norte
</template>

<script setup lang="ts">
import type { NavbarItem } from "./types";

useHead({
  title: "Autofigurações",
  meta: [
    {
      name: "description",
      content: "Site sobre cinema e narrativas cinematográficas",
    },
  ],
});

const year = new Date().getFullYear();

const navbarItems = ref<NavbarItem[]>([
  { name: "Caracteres", path: "caracteres" },
  { name: "Morfologia", path: "morfologia" },
]);
</script>

<style lang="scss" scoped>
@use "~/assets/css/variables" as *;

.header {
  background-color: $background-color;
  border-bottom: 1px solid $neutral-lighter;
  position: sticky;
  top: 0;
  z-index: 100;

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $spacing-md $spacing-lg;
    max-width: 1200px;
    margin: 0 auto;

    .nav-brand {
      a {
        font-size: $font-size-h4;
        font-weight: bold;
        color: $primary-color;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: $secondary-color;
        }
      }
    }

    .nav-links {
      display: flex;
      gap: $spacing-lg;

      a {
        color: $text-color;
        text-decoration: none;
        font-weight: 500;
        padding: $spacing-sm $spacing-md;
        border-radius: $border-radius-small;
        transition: all 0.3s ease;
        position: relative;

        &:hover {
          background-color: $primary-lightest-blue;
          color: $primary-color;
        }

        &.router-link-active {
          color: $primary-color;
          background-color: $primary-lightest-blue;
        }

        &[href="/caracteres"] {
          &:hover,
          &.router-link-active {
            background-color: rgba($characters-color, 0.1);
            color: $characters-color;
          }
        }

        &[href="/morfologia"] {
          &:hover,
          &.router-link-active {
            background-color: rgba($morphology-color, 0.1);
            color: $morphology-color;
          }
        }

        &[href="/fisiologia"] {
          &:hover,
          &.router-link-active {
            background-color: rgba($physiology-color, 0.1);
            color: $physiology-color;
          }
        }

        &[href="/producoes"] {
          &:hover,
          &.router-link-active {
            background-color: rgba($productions-color, 0.1);
            color: $productions-color;
          }
        }
      }
    }
  }
}

.main {
  min-height: calc(100vh - 120px);
  background-color: $background-color;
}

.footer {
  background-color: $primary-color;
  color: $neutral-lightest;
  padding: $spacing-xl 0;
  margin-top: auto;

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 $spacing-lg;
    display: flex;
    flex-direction: row;

    .footer-info {
      font-style: normal;
      font-weight: bold;
      font-size: $font-size-p;
      align-self: center;
    }
  }
}

@media (max-width: $mobile) {
  .nav {
    flex-direction: column;
    gap: $spacing-md;
    padding: $spacing-md;

    .nav-links {
      flex-wrap: wrap;
      justify-content: center;
      gap: $spacing-sm;
    }
  }

  .footer-content {
    padding: 0 $spacing-md;
  }
}
</style>
