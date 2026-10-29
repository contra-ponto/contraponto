import { useState } from 'react'
import { CalendarDays, MapPin, Wifi } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Reveal } from '@/components/shared/Reveal'
import { LinkSeta } from '@/components/shared/LinkSeta'
import { categorias } from '@/data/eventos'
import { site } from '@/data/site'
import { useEventos } from '@/hooks/useContent'

const dia = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', timeZone: 'America/Maceio' })
const mes = new Intl.DateTimeFormat('pt-BR', { month: 'short', timeZone: 'America/Maceio' })
const hora = new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Maceio' })

export function Programacao() {
  const { data } = useEventos()
  const [filtro, setFiltro] = useState<string>('Todos')
  const lista = data?.filter((e) => filtro === 'Todos' || e.categoria === filtro) ?? []

  return (
    <section id="programacao" className="mx-auto max-w-300 px-5 pb-20 md:px-8 md:pb-28">
      <Reveal className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] md:text-sm">Programação</p>
          <h2 className="mt-4 text-5xl font-semibold md:text-7xl">Próximos encontros</h2>
        </div>
        <LinkSeta href={site.whatsapp('Olá! Quero receber a programação do CONTRAPONTO.')} target="_blank" rel="noreferrer">
          Receber a agenda
        </LinkSeta>
      </Reveal>

      <Tabs value={filtro} onValueChange={setFiltro}>
        <div className="-mx-5 overflow-x-auto overflow-y-hidden px-5 py-1.5 md:mx-0 md:px-1">
          <TabsList className="w-max gap-2 bg-transparent p-0 group-data-[orientation=horizontal]/tabs:h-auto">
            {categorias.map((c) => (
              <TabsTrigger
                key={c}
                value={c}
                className="h-10 rounded-full border border-ink/30 px-5 text-sm font-semibold data-[state=active]:border-ink data-[state=active]:bg-ink data-[state=active]:text-paper"
              >
                {c}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      </Tabs>

      <ul className="mt-8 border-t border-ink">
        {lista.map((e) => {
          const d = new Date(e.data)
          return (
            <li key={e.id} className="grid gap-4 border-b border-ink/20 py-6 transition-colors hover:bg-paper-deep md:grid-cols-[110px_1fr_auto] md:items-center md:gap-8 md:px-4">
              <div className="flex items-baseline gap-2 md:block">
                <span className="font-display text-5xl font-semibold md:text-6xl">{dia.format(d)}</span>
                <span className="text-sm font-semibold uppercase tracking-wider md:block">{mes.format(d).replace('.', '')}</span>
              </div>
              <div>
                <span className="mb-2 inline-block bg-lime px-2 py-0.5 text-xs font-bold uppercase tracking-wider">{e.categoria}</span>
                <h3 className="text-2xl font-semibold leading-tight md:text-3xl">{e.titulo}</h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">{e.descricao}</p>
              </div>
              <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm md:flex-col md:items-end">
                <li className="flex items-center gap-1.5"><CalendarDays className="size-4" />{hora.format(d)}</li>
                <li className="flex items-center gap-1.5">
                  {e.formato === 'On-line' ? <Wifi className="size-4" /> : <MapPin className="size-4" />}
                  {e.formato} · {e.local}
                </li>
              </ul>
            </li>
          )
        })}
        {lista.length === 0 && <li className="py-10 text-muted-foreground">Nenhum encontro nesta categoria por enquanto.</li>}
      </ul>
    </section>
  )
}
