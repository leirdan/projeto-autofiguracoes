import type { Category, LoadingState, Role } from "~/types";

interface RolesState extends LoadingState {
  roles: Role[];
}

export const useRolesStore = defineStore("roles", {
  state: (): RolesState => ({
    roles: [],
    isLoading: false,
    error: null,
  }),

  getters: {
    getRoles: (state): Role[] => {
      return state.roles;
    },
  },

  actions: {
    async fetchRoles(): Promise<void> {
      this.isLoading = true;
      this.error = null;

      try {
        await new Promise((resolve) => setTimeout(resolve, 100));

        this.roles = [
          { id: 1, name: "Diretor" },
          { id: 2, name: "Artista Plástico" },
          { id: 3, name: "Ator/Atriz" },
          { id: 4, name: "Engenheiro de Som" },
        ];
      } catch (error) {
        this.error =
          error instanceof Error ? error.message : "Erro ao carregar papéis";
      } finally {
        this.isLoading = false;
      }
    },
  },
});
