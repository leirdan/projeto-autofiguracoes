<template lang="pug">
div
  PageHeader(
    title="Sobre a Equipe"
    :description-text="teamDescription"
  )

  section.team
    .container
      .team-grid
        TeamMember(v-for="member in members" 
          :name="member.name" 
          :role="member.role" 
          :description="member.description"
          )
</template>

<script setup>
import { useTeamStore } from "~/store/team";

const teamDescription = ref(
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established."
);

const store = useTeamStore();
await store.fetchTeamMembers();
const members = ref(store.getAllMembers);

useHead({
  title: "Autofigurações - Quem Somos",
});
</script>

<style lang="scss" scoped>
@use "~/assets/css/variables" as *;

.team {
  padding: $spacing-xl 0;

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: $spacing-lg;
  }
}

.mission {
  padding: $spacing-xl 0;
  background-color: #f9f9f9;

  .section-title {
    font-size: 2rem;
    margin-bottom: $spacing-xl;
    text-align: center;
    color: $primary-color;
  }

  .mission-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: $spacing-lg;
  }

  .mission-item {
    background: white;
    padding: $spacing-lg;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border-top: 4px solid $primary-color;

    h4 {
      font-size: 1.3rem;
      margin-bottom: $spacing-sm;
      color: $primary-color;
    }

    p {
      line-height: 1.6;
      color: $text-color;
    }
  }
}

.methodology {
  padding: $spacing-xl 0;

  .section-title {
    font-size: 2rem;
    margin-bottom: $spacing-lg;
    text-align: center;
    color: $primary-color;
  }

  .methodology-description {
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.8;
    color: $text-color;
    text-align: center;
    font-size: 1.1rem;
  }
}

@media (max-width: $mobile) {
  .team-grid {
    grid-template-columns: 1fr;
  }

  .mission-content {
    grid-template-columns: 1fr;
  }
}
</style>
