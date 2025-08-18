import type { Category, LoadingState } from "~/types";

interface CategoriesState extends LoadingState {
  categories: Category[];
  currentCategory: Category | null;
}

export const useCategoriesStore = defineStore("categories", {
  state: (): CategoriesState => ({
    categories: [],
    currentCategory: null,
    isLoading: false,
    error: null,
  }),

  getters: {
    getCategories: (state): Category[] => {
      return state.categories;
    },

    getCurrentCategory: (state): Category | null => {
      return state.currentCategory;
    },
  },

  actions: {
    async fetchCategories(): Promise<void> {
      this.isLoading = true;
      this.error = null;

      try {
        await new Promise((resolve) => setTimeout(resolve, 100));

        this.categories = [
          { id: 1, name: "Fisiologia do Medo", description: "Lorem ipsum sit" },
          { id: 2, name: "Morfologia da Censura", description: "lorem ipsum" },
        ];
      } catch (error) {
        this.error =
          error instanceof Error
            ? error.message
            : "Erro ao carregar caracteres";
      } finally {
        this.isLoading = false;
      }
    },

    setCurrentCategory(category: Category): void {
      this.currentCategory = category;
    },
  },
});
