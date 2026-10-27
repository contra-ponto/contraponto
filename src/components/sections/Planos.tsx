import { Check } from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'
import { Etiqueta } from '@/components/shared/Etiqueta'
import { CtaButton } from '@/components/shared/CtaButton'
import { site } from '@/data/site'
import { usePlanos } from '@/hooks/useContent'
import { cn } from '@/lib/utils'

export function Planos() {
  const { data } = usePlanos()

  return (
    <section id="participe" className="mx-auto max-w-300 px-5 py-20 md:px-8 md:py-28">
      <Reveal className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] md:text-sm">Participe</p>
        <h2 className="mt-4 text-5xl font-semibold md:text-7xl">Escolha como entrar na roda</h2>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
        {data?.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.1} className="h-full">
            <article
              className={cn(
                'relative flex h-full flex-col border border-ink p-7',
                p.destaque ? 'bg-ink text-paper md:-translate-y-4' : 'bg-paper',
              )}
            >
              {p.nota && (
                <Etiqueta tone={p.destaque ? 'lime' : 'sun'} className="absolute -top-3 right-5 px-3 py-1 text-[11px]">
                  {p.nota}
                </Etiqueta>
              )}
              <h3 className="text-3xl font-semibold">{p.nome}</h3>
              <p className="mt-6 flex flex-wrap items-baseline gap-x-2">
                <span className="whitespace-nowrap font-display text-6xl font-semibold">{p.preco}</span>
                <span className={cn('text-sm', p.destaque ? 'text-paper/70' : 'text-muted-foreground')}>{p.periodo}</span>
              </p>
              <ul className="my-8 flex-1 space-y-3">
                {p.beneficios.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-6">
                    <Check className="mt-0.5 size-5 shrink-0 text-terra data-[dark=true]:text-sun" data-dark={p.destaque} />
                    {b}
                  </li>
                ))}
              </ul>
              <CtaButton
                tone={p.destaque ? 'sun' : 'ink'}
                href={site.whatsapp(`Olá! Quero entrar no CONTRAPONTO pelo plano: ${p.nome}.`)}
                target="_blank"
                rel="noreferrer"
                className="w-full justify-between"
              >
                Quero fazer parte
              </CtaButton>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
