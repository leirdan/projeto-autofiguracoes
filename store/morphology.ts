import { defineStore } from 'pinia'
import type { Morphology, MorphologyExample, LoadingState } from '~/types'

interface CustomMorphologyExample extends MorphologyExample {
  image?: string
}

interface CustomMorphology extends Morphology {
  mainImage?: string
  examples: CustomMorphologyExample[]
}

interface MorphologyState extends LoadingState {
  morphologies: CustomMorphology[]
  currentMorphology: CustomMorphology | null
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
      return (slug: string): CustomMorphology | undefined => {
        return state.morphologies.find(morphology => morphology.slug === slug)
      }
    },

    getAllMorphologies: (state): CustomMorphology[] => {
      return state.morphologies
    }
  },

  actions: {
    async fetchMorphologies(): Promise<void> {
      this.isLoading = true
      this.error = null

      try {
        await new Promise(resolve => setTimeout(resolve, 400))
        
        this.morphologies = [
          {
            id: '1',
            title: 'Morfologia da Montagem',
            subtitle: 'Técnicas de montagem cinematográfica',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            influence: 'Sergei Eisenstein',
            influenceDescription: 'Pioneiro da teoria da montagem cinematográfica, Eisenstein desenvolveu conceitos fundamentais sobre como a justaposição de imagens cria significado.',
            mainImage: '/images/sergeieisenstein.jpg',
            examples: [
              {
                id: '1',
                title: 'Montagem de Conflito',
                description: 'Técnica que cria tensão através do contraste entre planos.',
                details: 'Exemplo: "O Encouraçado Potemkin" (1925 )',
                image: '/images/oencouracadopotemkin.jpg'
              },
            ],
            slug: 'montagem'
          },
          {
            id: '2',
            title: 'Morfologia do Plano-Sequência',
            subtitle: 'Continuidade temporal e espacial',
            description: 'Análise da continuidade temporal e espacial no cinema realista.',
            influence: 'André Bazin / Realismo',
            influenceDescription: 'Teórico do realismo cinematográfico que defendia a preservação da unidade espaço-temporal.',
            mainImage: '/images/andre-bazin.jpg',
            examples: [
              {
                id: '1',
                title: 'Plano-Sequência Clássico',
                description: 'Técnica que mantém a continuidade espacial e temporal.',
                details: 'Exemplo: "Cidadão Kane" (1941 )',
                image: '/images/cidadaokane.jpeg'
              },
            ],
            slug: 'plano-sequencia'
          },
          {
            id: '3',
            title: 'Morfologia do Cinema de Atrações',
            subtitle: 'Espetáculo e impacto sensorial',
            description: 'Estudo das primeiras formas cinematográficas e seu impacto sensorial.',
            influence: 'Tom Gunning / Cinema primitivo',
            influenceDescription: 'Teórico que conceituou o cinema de atrações como forma primitiva de espetáculo.',
            mainImage: '/images/tomgunning.jpg',
            examples: [
              {
                id: '1',
                title: 'Atração Visual',
                description: 'Foco no impacto visual direto sobre o espectador.',
                details: 'Primeiros filmes dos irmãos Lumière',
                image: '/images/irmaoslumiere.jpg'
              },
            ],
            slug: 'cinema-atracoes'
          }
        ]
      } catch (error ) {
        this.error = error instanceof Error ? error.message : 'Erro ao carregar morfologias'
      } finally {
        this.isLoading = false
      }
    },

    async fetchMorphologyBySlug(slug: string): Promise<void> {
      this.isLoading = true
      this.error = null

      try {
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

    setCurrentMorphology(morphology: CustomMorphology | null): void {
      this.currentMorphology = morphology
    },

    clearError(): void {
      this.error = null
    }
  }
})
