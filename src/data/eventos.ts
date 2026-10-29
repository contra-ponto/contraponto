// Programação — EXEMPLO: conteúdo ilustrativo até o calendário real existir.
export type Categoria = 'Literatura' | 'História' | 'Arte' | 'Política' | 'Oficinas'
export type Formato = 'Presencial' | 'On-line'

export interface Evento {
  id: string
  titulo: string
  descricao: string
  categoria: Categoria
  formato: Formato
  data: string // ISO
  local: string
}

export const categorias: Array<'Todos' | Categoria> = ['Todos', 'Literatura', 'História', 'Arte', 'Política', 'Oficinas']

export const eventos: Evento[] = [
  { id: 'e1', titulo: 'Clube de leitura: Vidas Secas', descricao: 'Uma tarde para ler Graciliano em voz alta e discutir o Nordeste que ele escreveu.', categoria: 'Literatura', formato: 'Presencial', data: '2026-11-14T16:00:00-03:00', local: 'Aracaju, SE' },
]
