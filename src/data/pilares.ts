import {
  BookOpen,
  Brush,
  Coffee,
  Landmark,
  Languages,
  Hourglass,
  Scissors,
  Vote,
  type LucideIcon,
} from 'lucide-react'

export interface Pilar {
  id: string
  titulo: string
  texto: string
  icon: LucideIcon
}

export const pilares: Pilar[] = [
  { id: 'brasil', titulo: 'Cultura brasileira', texto: 'Diversidade regional, saberes e fazeres de um país que é muitos.', icon: Landmark },
  { id: 'literatura', titulo: 'Literatura', texto: 'Clubes de leitura para ler junto, discordar e descobrir autores.', icon: BookOpen },
  { id: 'historia', titulo: 'História e memória', texto: 'O que lembramos, o que esquecemos e quem decide isso.', icon: Hourglass },
  { id: 'arte', titulo: 'Arte e manifestações', texto: 'Do museu à rua: a arte como linguagem de todo mundo.', icon: Brush },
  { id: 'politica', titulo: 'Política e cidadania', texto: 'Conversa qualificada sobre sociedade, sem gritaria.', icon: Vote },
  { id: 'letramento', titulo: 'Pensamento crítico', texto: 'Letramento para ler o mundo com mais perguntas que certezas.', icon: Languages },
  { id: 'oficinas', titulo: 'Oficinas criativas', texto: 'Aprender com as mãos, em grupo, e levar algo pra casa.', icon: Scissors },
  { id: 'convivencia', titulo: 'Convivência', texto: 'Mesa, café e papo: vínculos que continuam depois do evento.', icon: Coffee },
]
