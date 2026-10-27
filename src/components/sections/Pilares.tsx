import { usePilares } from '@/hooks/useContent'
import { Reveal } from '@/components/shared/Reveal'

export function Pilares() {
  const { data } = usePilares()

  return (
    <section id="pilares" className="bg-topo relative mx-auto max-w-300 px-5 py-20 md:px-8 md:py-28">
      <Reveal className="mb-12 max-w-2xl md:mb-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] md:text-sm">O que nos move</p>
        <h2 className="mt-4 text-5xl font-semibold md:text-7xl">
          Mergulhe no que <em className="font-medium italic text-terra">te desperta</em>.
        </h2>
      </Reveal>

      <ul className="grid gap-px overflow-hidden border border-ink/20 bg-ink/20 sm:grid-cols-2 lg:grid-cols-4">
        {data?.map((p, i) => (
          <li key={p.id} className="group relative bg-paper p-6 transition-colors hover:bg-sun md:p-7">
            <div className="flex items-start justify-between">
              <p.icon className="size-8" strokeWidth={1.5} aria-hidden="true" />
              <span className="font-display text-sm italic text-muted-foreground group-hover:text-ink">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <h3 className="mt-10 text-2xl font-semibold md:mt-14">{p.titulo}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground group-hover:text-ink">{p.texto}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
