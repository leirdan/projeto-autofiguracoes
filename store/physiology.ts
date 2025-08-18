import { defineStore } from 'pinia'
import type { Physiology, PhysiologyMechanism, Work, LoadingState } from '~/types'

interface PhysiologyState extends LoadingState {
  physiologies: Physiology[]
  currentPhysiology: Physiology | null
}

export const usePhysiologyStore = defineStore('physiology', {
  state: (): PhysiologyState => ({
    physiologies: [],
    currentPhysiology: null,
    isLoading: false,
    error: null
  }),

  getters: {
    getPhysiologyBySlug: (state) => {
      return (slug: string): Physiology | undefined => {
        return state.physiologies.find(physiology => physiology.slug === slug)
      }
    },

    getAllPhysiologies: (state): Physiology[] => {
      return state.physiologies
    }
  },

  actions: {
    async fetchPhysiologies(): Promise<void> {
      this.isLoading = true
      this.error = null

      try {
        // Simulando chamada de API
        await new Promise(resolve => setTimeout(resolve, 450))
        
        this.physiologies = [
          {
            id: '1',
            title: 'A Fisiologia do Medo',
            subtitle: 'Estudo das reações corporais ao terror cinematográfico',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            influence: 'Alfred Hitchcock / Psicologia do Medo',
            influenceDescription: 'Mestre do suspense, Hitchcock desenvolveu técnicas precisas para manipular as reações emocionais e físicas do espectador.',
            caseStudyTitle: 'A Fisiologia do Medo',
            caseStudyDescription: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            works: [
              {
                id: '1',
                title: 'O Iluminado',
                details: '1980, Kubrick',
                description: 'Análise psicológica do terror através do isolamento e da claustrofobia.'
              },
              {
                id: '2',
                title: 'Hereditário',
                details: '2018, Aster',
                description: 'Horror familiar e trauma geracional no cinema contemporâneo.'
              },
              {
                id: '3',
                title: 'Corra!',
                details: '2017, Peele',
                description: 'Terror racial e crítica social através do horror psicológico.'
              }
            ],
            mechanisms: [
              {
                id: '1',
                title: 'Resposta de Luta ou Fuga',
                description: 'Ativação do sistema nervoso simpático em resposta ao perigo percebido.'
              },
              {
                id: '2',
                title: 'Liberação de Adrenalina',
                description: 'Aumento dos batimentos cardíacos e da pressão arterial.'
              },
              {
                id: '3',
                title: 'Tensão Muscular',
                description: 'Contração involuntária dos músculos em preparação para ação.'
              }
            ],
            slug: 'medo'
          },
          {
            id: '2',
            title: 'Fisiologia do SUSPENSE',
            subtitle: 'Mecanismos psicológicos e físicos do suspense',
            description: 'Estudo dos mecanismos psicológicos e físicos do suspense cinematográfico.',
            influence: 'Alfred Hitchcock / Psicologia do Medo',
            influenceDescription: 'Técnicas de construção de tensão e manipulação da expectativa do espectador.',
            caseStudyTitle: 'Construção do Suspense',
            caseStudyDescription: 'Análise das técnicas utilizadas para criar e manter a tensão narrativa.',
            works: [],
            mechanisms: [],
            slug: 'suspense'
          },
          {
            id: '3',
            title: 'Fisiologia DO ÊXTASE',
            subtitle: 'Reações corporais e sensoriais',
            description: 'Análise das reações corporais e sensoriais provocadas pelo cinema.',
            influence: 'Gaspar Noé / Cinema Sensorial',
            influenceDescription: 'Diretor conhecido por criar experiências sensoriais extremas através do cinema.',
            caseStudyTitle: 'Cinema Sensorial',
            caseStudyDescription: 'Estudo das técnicas que provocam reações físicas intensas no espectador.',
            works: [],
            mechanisms: [],
            slug: 'extase'
          },
          {
            id: '4',
            title: 'Fisiologia do TERROR CORPORAL',
            subtitle: 'Horror visceral e manifestações físicas',
            description: 'Investigação do horror visceral e suas manifestações físicas.',
            influence: 'David Cronenberg / Body Horror',
            influenceDescription: 'Pioneiro do body horror, explorando ansiedades corporais e transformações físicas.',
            caseStudyTitle: 'Body Horror',
            caseStudyDescription: 'Análise do horror que emerge das transformações e disfunções corporais.',
            works: [],
            mechanisms: [],
            slug: 'terror-corporal'
          }
        ]
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Erro ao carregar fisiologias'
      } finally {
        this.isLoading = false
      }
    },

    async fetchPhysiologyBySlug(slug: string): Promise<void> {
      this.isLoading = true
      this.error = null

      try {
        // Se já temos as fisiologias carregadas, buscar localmente
        if (this.physiologies.length === 0) {
          await this.fetchPhysiologies()
        }

        const physiology = this.getPhysiologyBySlug(slug)
        if (physiology) {
          this.currentPhysiology = physiology
        } else {
          this.error = 'Fisiologia não encontrada'
        }
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Erro ao carregar fisiologia'
      } finally {
        this.isLoading = false
      }
    },

    setCurrentPhysiology(physiology: Physiology | null): void {
      this.currentPhysiology = physiology
    },

    clearError(): void {
      this.error = null
    }
  }
})

