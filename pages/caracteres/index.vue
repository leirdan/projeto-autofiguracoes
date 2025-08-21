<template lang="pug">
div
  .page-header

  .container
    .filters
      .search
        input(placeholder="ex: Walter Salles" v-model="searchQuery")
      .categories
        select(v-model="selectedCategory")
          option(v-for="cat in categories" :key="cat" :value="cat") {{ cat }}
      .roles
        select(v-model="selectedRole")
          option(v-for="role in roles" :key="role" :value="role") {{ role }}

  section.content-grid
    .container
      .interviews-section(
        v-for="(interviews, role) in groupedByRole"
        :key="role"
      )
        h2.section-title {{ roleLabels[role] || role }}
        .interviews-grid
          NuxtLink(
            v-for="(interview, index) in interviews"
            :key="index"
            :to="`/caracteres/${interview.slug}`"
          )
            InterviewCard(
              :title="interview.title"
              :subtitle="interview.subtitle"
              :date="interview.date"
              :image="interview.image"
            )
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

useHead({
  title: "Autofigurações - Caracteres",
});

const searchQuery = ref("");
const selectedCategory = ref("Categorias");
const selectedRole = ref("Tipos");

const categories = ref(["Categorias"]);
const roles = ref(["Tipos", "Diretor", "Roteirista", "Ator", "Artista Visual"]);

const roleLabels: Record<string, string> = {
  director: "Diretores",
  writer: "Roteiristas",
  actor: "Atores",
  "visual-artist": "Artistas Visuais",
};

const persons = ref([
  /*  {
    title: "Entrevista: Hirokazu Koreeda",
    subtitle: 'Diretor de "Monster"',
    date: "Março 25, 2025",
    image: "/assets/images/koreeda.jpg",
    roles: ["director", "writer"],
    slug: "koreeda",
  },
  {
    title: "Entrevista: Nelson Pereira dos Santos",
    subtitle: 'Diretor de "Vidas Secas"',
    date: "Junho 25, 2010",
    image: "/assets/images/nelson.jpg",
    roles: ["director", "actor"],
    slug: "nelson-pereira",
  },
  {
    title: "Entrevista: Kleber Mendonça Filho",
    subtitle: 'Diretor de "Bacurau"',
    date: "Dezembro 25, 2025",
    image: "/assets/images/kleber.jpg",
    roles: ["director", "writer", "visual-artist"],
    slug: "kleber",
  },*/
  {
    title: "Entrevista: Celine Song",
    subtitle: 'Roteirista de "Vidas Passadas"',
    date: "Dezembro 24, 2024",
    image: "/images/celine-song.jpg",
    roles: ["writer", "actor"],
    slug: "celine-song",
  },
  /*{
    title: "Entrevista: Guilhermo del Toro",
    subtitle: 'Roteirista de "Pinóquio"',
    date: "Fevereiro 12, 2023",
    image: "/assets/images/deltoro.jpg",
    roles: ["writer"],
    slug: "guilhermo-del-toro",
  },
  {
    title: "Entrevista: Alfonso Cuarón",
    subtitle: 'Roteirista de "Roma"',
    date: "Fevereiro 15, 2025",
    image: "/assets/images/cuaron.jpg",
    roles: ["writer", "actor"],
    slug: "alfonso-cuaron",
  },*/
]);

const groupedByRole = computed(() => {
  const groups: Record<string, typeof persons.value> = {};

  for (const person of persons.value) {
    for (const role of person.roles) {
      if (!groups[role]) {
        groups[role] = [];
      }

      groups[role].push(person);
    }
  }
  return groups;
});
</script>

<style lang="scss" scoped>
@use "~/assets/css/variables" as *;

.page-header {
  height: 300px;
  background: #ccc;
  margin-bottom: $spacing-lg;
}

.filters {
  display: flex;
  flex-direction: row;
  margin: $spacing-lg 0;
  gap: $spacing-md;

  .search {
    flex: 1;
  }

  input {
    width: 100%;
    padding: $spacing-sm;
    border: 1px solid $neutral-lighter;
    border-radius: 4px;
  }

  select {
    padding: $spacing-sm;
    border: 1px solid $neutral-lighter;
    border-radius: 4px;
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

  .interviews-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $spacing-lg;
    margin-bottom: $spacing-xl;

    a {
      text-decoration: none;
      color: inherit;
      display: flex;
    }

    :deep(.interview-card) {
      flex: 1;
      min-height: 320px;
    }
  }
}
</style>
