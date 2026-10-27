// Planos — PLACEHOLDER: valores e benefícios ilustrativos.
export interface Plano {
  id: string
  nome: string
  preco: string
  periodo: string
  nota?: string
  destaque?: boolean
  beneficios: string[]
}

export const planos: Plano[] = [
  {
    id: 'avulso',
    nome: 'Encontro avulso',
    preco: 'R$ 35',
    periodo: 'por encontro',
    beneficios: ['Escolha o encontro que quiser', 'Sem compromisso de permanência', 'Conheça a turma antes de decidir'],
  },
  {
    id: 'mensal',
    nome: 'Clube mensal',
    preco: 'R$ 59',
    periodo: 'por mês',
    destaque: true,
    nota: 'Mais escolhido',
    beneficios: ['Todos os encontros presenciais do mês', 'Atividades on-line inclusas', 'Grupo da comunidade no WhatsApp', 'Voto nos temas dos próximos encontros'],
  },
  {
    id: 'anual',
    nome: 'Clube anual',
    preco: 'R$ 49',
    periodo: 'por mês, no plano anual',
    nota: 'Economize até 17%',
    beneficios: ['Tudo do clube mensal', 'Acesso antecipado a eventos especiais', 'Kit de boas-vindas do clube', 'Convidado extra em um encontro'],
  },
]
