import { useQuery } from '@tanstack/react-query'
import { eventos } from '@/data/eventos'
import { pilares } from '@/data/pilares'
import { planos } from '@/data/planos'
import { faq } from '@/data/faq'
import { depoimentos } from '@/data/depoimentos'

// Camada de dados assíncrona: hoje lê os módulos locais; quando existir
// API/CMS, basta trocar a queryFn mantendo as mesmas chaves de cache.
const resolve = <T,>(data: T) => () => Promise.resolve(data)

export const useEventos = () => useQuery({ queryKey: ['eventos'], queryFn: resolve(eventos) })
export const usePilares = () => useQuery({ queryKey: ['pilares'], queryFn: resolve(pilares) })
export const usePlanos = () => useQuery({ queryKey: ['planos'], queryFn: resolve(planos) })
export const useFaq = () => useQuery({ queryKey: ['faq'], queryFn: resolve(faq) })
export const useDepoimentos = () => useQuery({ queryKey: ['depoimentos'], queryFn: resolve(depoimentos) })
