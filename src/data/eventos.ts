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
  { id: 'e2', titulo: 'Memória em movimento: a Aracaju que sumiu', descricao: 'Caminhada guiada pelo centro histórico, com fotos antigas e histórias de moradores.', categoria: 'História', formato: 'Presencial', data: '2026-11-21T09:00:00-03:00', local: 'Centro, Aracaju' },
  { id: 'e3', titulo: 'Oficina de lambe-lambe e cartaz', descricao: 'Criação coletiva de cartazes para a cidade. Material incluso, repertório não é exigido.', categoria: 'Oficinas', formato: 'Presencial', data: '2026-11-28T15:00:00-03:00', local: 'Aracaju, SE' },
  { id: 'e4', titulo: 'Roda de conversa: cidadania no dia a dia', descricao: 'Como a política aparece na fila do ônibus, na feira e no condomínio.', categoria: 'Política', formato: 'On-line', data: '2026-12-02T19:30:00-03:00', local: 'Via Meet' },
  { id: 'e5', titulo: 'Olhar de perto: arte popular sergipana', descricao: 'Do artesanato ao samba de coco: o que cada obra conta sobre quem a fez.', categoria: 'Arte', formato: 'Presencial', data: '2026-12-06T10:00:00-03:00', local: 'Aracaju, SE' },
]
