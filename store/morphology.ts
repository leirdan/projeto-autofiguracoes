import { defineStore } from 'pinia'
import type { Morphology, MorphologyExample, LoadingState } from '~/types'

interface MorphologyState extends LoadingState {
  morphologies: Morphology[]
  currentMorphology: Morphology | null
}

export const useMorphologyStore = defineStore('morphology', {
  state: (): MorphologyState => ({
    morphologies: [],
    currentMorphology: null,
    isLoading: false,
    error: null
  }),

  getters: {
    getMorphologyBySlug: (state) => {
      return (slug: string): Morphology | undefined => {
        return state.morphologies.find(morphology => morphology.slug === slug)
      }
    },

    getAllMorphologies: (state): Morphology[] => {
      return state.morphologies
    }
  },

  actions: {
    async fetchMorphologies(): Promise<void> {
      this.isLoading = true
      this.error = null

      try {
        // Simulando chamada de API
        await new Promise(resolve => setTimeout(resolve, 400))
        
        this.morphologies = [
          {
            id: '1',
            title: 'Morfologia da MONTAGEM',
            subtitle: 'Técnicas de montagem cinematográfica',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            influence: 'Sergei Eisenstein',
            influenceDescription: 'Pioneiro da teoria da montagem cinematográfica, Eisenstein desenvolveu conceitos fundamentais sobre como a justaposição de imagens cria significado.',
            examples: [
              {
                id: '1',
                title: 'Montagem de Conflito',
                description: 'Técnica que cria tensão através do contraste entre planos.',
                details: 'Exemplo: "O Encouraçado Potemkin" (1925)'
              },
              {
                id: '2',
                title: 'Montagem Métrica',
                description: 'Baseada na duração absoluta dos planos.',
                details: 'Ritmo criado pela duração dos cortes'
              },
              {
                id: '3',
                title: 'Montagem Rítmica',
                description: 'Considera o movimento dentro do quadro.',
                details: 'Movimento como elemento de continuidade'
              }
            ],
            slug: 'montagem'
          },
          {
            id: '2',
            title: 'Morfologia do PLANO-SEQUÊNCIA',
            subtitle: 'Continuidade temporal e espacial',
            description: 'Análise da continuidade temporal e espacial no cinema realista.',
            influence: 'André Bazin / Realismo',
            influenceDescription: 'Teórico do realismo cinematográfico que defendia a preservação da unidade espaço-temporal.',
            examples: [
              {
                id: '1',
                title: 'Plano-Sequência Clássico',
                description: 'Técnica que mantém a continuidade espacial e temporal.',
                details: 'Exemplo: "Cidadão Kane" (1941)'
              }
            ],
            slug: 'plano-sequencia'
          },
          {
            id: '3',
            title: 'Morfologia do CINEMA DE ATRAÇÕES',
            subtitle: 'Espetáculo e impacto sensorial',
            description: 'Estudo das primeiras formas cinematográficas e seu impacto sensorial.',
            influence: 'Tom Gunning / Cinema primitivo',
            influenceDescription: 'Teórico que conceituou o cinema de atrações como forma primitiva de espetáculo.',
            examples: [
              {
                id: '1',
                title: 'Atração Visual',
                description: 'Foco no impacto visual direto sobre o espectador.',
                details: 'Primeiros filmes dos irmãos Lumière'
              }
            ],
            slug: 'cinema-atracoes'
          }
        ]
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Erro ao carregar morfologias'
      } finally {
        this.isLoading = false
      }
    },

    async fetchMorphologyBySlug(slug: string): Promise<void> {
      this.isLoading = true
      this.error = null

      try {
        // Se já temos as morfologias carregadas, buscar localmente
        if (this.morphologies.length === 0) {
          await this.fetchMorphologies()
        }

        const morphology = this.getMorphologyBySlug(slug)
        if (morphology) {
          this.currentMorphology = morphology
        } else {
          this.error = 'Morfologia não encontrada'
        }
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Erro ao carregar morfologia'
      } finally {
        this.isLoading = false
      }
    },

    setCurrentMorphology(morphology: Morphology | null): void {
      this.currentMorphology = morphology
    },

    clearError(): void {
      this.error = null
    }
  }
})

