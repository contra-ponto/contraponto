import { Quote } from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'
import { useDepoimentos } from '@/hooks/useContent'
import { cn } from '@/lib/utils'

const looks = [
  'bg-sun -rotate-1',
  'bg-paper ring-1 ring-ink/30 rotate-1',
  'bg-lime rotate-1',
  'bg-paper ring-1 ring-ink/30 -rotate-1',
]

export function Depoimentos() {
  const { data } = useDepoimentos()

  return (
    <section className="bg-paper-deep">
      <div className="mx-auto max-w-300 px-5 py-20 md:px-8 md:py-28">
        <Reveal className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] md:text-sm">Comunidade</p>
          <h2 className="mt-4 text-5xl font-semibold md:text-6xl">
            O que dizem quem <em className="font-medium italic text-terra">já veio</em>.
          </h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data?.map((d, i) => (
            <Reveal key={d.id} delay={i * 0.08}>
              <figure className={cn('flex h-full flex-col p-6 shadow-sm', looks[i % looks.length])}>
                <Quote className="size-7" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 font-display text-xl leading-snug">{d.texto}</blockquote>
                <figcaption className="mt-6 text-sm">
                  <strong>{d.nome}</strong>
                  <span className="block opacity-70">{d.detalhe}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
