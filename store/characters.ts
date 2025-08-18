import { defineStore } from "pinia";
import type { Character, Interview, LoadingState } from "~/types";
import { useCategoriesStore } from "./categories";
import { useRolesStore } from "./roles";

interface CharactersState extends LoadingState {
  characters: Character[];
  interviews: Interview[];
  currentCharacter: Character | null;
}

export const useCharactersStore = defineStore("characters", {
  state: (): CharactersState => ({
    characters: [],
    interviews: [],
    currentCharacter: null,
    isLoading: false,
    error: null,
  }),

  getters: {
    getCharacterBySlug: (state) => {
      return (slug: string): Character | undefined => {
        return state.characters.find((character) => character.slug === slug);
      };
    },

    getCharactersByRole: (state) => {
      return (category: string): Character[] => {
        // return state.characters.find((character) => character.categories.)
        return [];
      };
    },

    getInterviewsByCategory: (state) => {
      return (category: string): Interview[] => {
        return state.interviews.filter(
          (interview) => interview.category === category
        );
      };
    },
  },

  actions: {
    async fetchCharacters(): Promise<void> {
      this.isLoading = true;
      this.error = null;

      try {
        await new Promise((resolve) => setTimeout(resolve, 500));

        // TODO: TESTAR SE ISSO É ESTÁVEL
        const categoriesStore = useCategoriesStore();
        if (categoriesStore.getCategories.length === 0) {
          await categoriesStore.fetchCategories();
        }
        const categories = categoriesStore.getCategories;

        const rolesStore = useRolesStore();
        if (rolesStore.getRoles.length === 0) {
          await rolesStore.fetchRoles();
        }
        const roles = rolesStore.getRoles;

        this.characters = [
          {
            id: 1,
            name: "Celine Song",
            roles: [roles[0], roles[2]],
            description:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            fullDescription:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            pdfAvailable: true,
            profile: new Blob(),
            works: [
              { id: 1, title: "Vidas Passadas", details: "Março 25, 2025" },
              { id: 2, title: "Materialists", details: "Junho 25, 2010" },
              { id: 3, title: "Roda do Tempo", details: "Dezembro 25, 2025" },
            ],
            slug: "celine-song",
            categories: categories,
          },
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

    async fetchInterviews(): Promise<void> {
      this.isLoading = true;
      this.error = null;

      try {
        await new Promise((resolve) => setTimeout(resolve, 300));

        this.interviews = [
          {
            id: "1",
            title: "Entrevista: Hirokazu Koreeda",
            subtitle: 'Diretor de "Monster"',
            date: "Março 25, 2025",
            category: "director",
          },
          {
            id: "2",
            title: "Entrevista: Nelson Pereira dos Santos",
            subtitle: 'Diretor de "Vidas Secas"',
            date: "Junho 25, 2010",
            category: "director",
          },
          {
            id: "3",
            title: "Entrevista: Kleber Mendonça Filho",
            subtitle: 'Diretor de "Bacurau"',
            date: "Dezembro 25, 2025",
            category: "director",
          },
          {
            id: "4",
            title: "Entrevista: Celine Song",
            subtitle: 'Roteirista de "Vidas Passadas"',
            date: "Fevereiro 12, 2023",
            slug: "celine-song",
            category: "screenwriter",
          },
          {
            id: "5",
            title: "Entrevista: Guilhermo del Toro",
            subtitle: 'Roteirista de "Pinóquio"',
            date: "Fevereiro 15, 2025",
            category: "screenwriter",
          },
          {
            id: "6",
            title: "Entrevista: Alfonso Cuarón",
            subtitle: 'Roteirista de "Roma"',
            date: "Dezembro 24, 2024",
            category: "screenwriter",
          },
        ];
      } catch (error) {
        this.error =
          error instanceof Error
            ? error.message
            : "Erro ao carregar entrevistas";
      } finally {
        this.isLoading = false;
      }
    },

    async fetchCharacterBySlug(slug: string): Promise<void> {
      this.isLoading = true;
      this.error = null;

      try {
        // Se já temos os caracteres carregados, buscar localmente
        if (this.characters.length === 0) {
          await this.fetchCharacters();
        }

        const character = this.getCharacterBySlug(slug);
        if (character) {
          this.currentCharacter = character;
        } else {
          this.error = "Personagem não encontrado";
        }
      } catch (error) {
        this.error =
          error instanceof Error
            ? error.message
            : "Erro ao carregar personagem";
      } finally {
        this.isLoading = false;
      }
    },

    setCurrentCharacter(character: Character | null): void {
      this.currentCharacter = character;
    },

    clearError(): void {
      this.error = null;
    },
  },
});
