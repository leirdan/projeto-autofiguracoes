import { defineStore } from "pinia";
import type { TeamMember, LoadingState } from "~/types";

interface TeamState extends LoadingState {
  members: TeamMember[];
}

export const useTeamStore = defineStore("team", {
  state: (): TeamState => ({
    members: [],
    isLoading: false,
    error: null,
  }),

  getters: {
    getAllMembers: (state): TeamMember[] => {
      return state.members;
    },

    getMemberById: (state) => {
      return (id: string): TeamMember | undefined => {
        return state.members.find((member) => member.id === id);
      };
    },
  },

  actions: {
    async fetchTeamMembers(): Promise<void> {
      this.isLoading = true;
      this.error = null;

      try {
        // await new Promise((resolve) => setTimeout(resolve, 300));

        this.members = [
          {
            id: "1",
            name: "Prof. Sebastião Albino",
            role: "Coordenação Geral",
            description: "lorem ipsum sit dolor amet",
          },
          {
            id: "2",
            name: "Larissa",
            role: "Bolsista de pesquisa",
            description: "lorem ipsum sit dolor amet",
          },
          {
            id: "3",
            name: "Tiago",
            role: "Bolsista de pesquisa",
            description: "lorem ipsum sit dolor amet",
          },
          {
            id: "4",
            name: "Andriel Fernandes",
            role: "Desenvolvedor Web",
            description: "lorem ipsum sit dolor amet",
          },
          {
            id: "5",
            name: "Fernando Santos",
            role: "Desenvolvedor Web ",
            description: "lorem ipsum sit dolor amet",
          },
        ];
      } catch (error) {
        this.error =
          error instanceof Error
            ? error.message
            : "Erro ao carregar membros da equipe";
      } finally {
        this.isLoading = false;
      }
    },

    clearError(): void {
      this.error = null;
    },
  },
});
