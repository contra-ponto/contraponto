import { BookOpen, Coffee, Landmark, Palette } from 'lucide-react'
import { CtaButton } from '@/components/shared/CtaButton'
import { Etiqueta } from '@/components/shared/Etiqueta'
import { Foto } from '@/components/shared/Foto'
import { LinkSeta } from '@/components/shared/LinkSeta'
import { Selo } from '@/components/shared/Selo'
import { Reveal } from '@/components/shared/Reveal'
import { site } from '@/data/site'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-300 px-5 pb-16 pt-8 md:px-8 md:pb-24 md:pt-14">
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-6">
        <Reveal className="lg:col-span-5 lg:pt-6">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] md:text-sm">
            {site.tagline} · {site.city}
          </p>
          <h1 className="text-[3.4rem] font-semibold sm:text-7xl lg:text-[5.2rem]">
            Ideias diferentes.{' '}
            <em className="font-medium italic text-terra">Espaço em comum.</em>
          </h1>
          <p className="mt-7 max-w-sm text-base leading-8 md:text-lg">
            Se você nunca foi a um encontro de cultura, <strong>o clube é pra você</strong>. Ler, debater,
            criar e conviver, fora da tela e junto de gente de verdade.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
            <CtaButton href="#participe">Quero fazer parte</CtaButton>
            <LinkSeta href="#programacao">Ver programação</LinkSeta>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-7">
          <div className="relative mx-auto aspect-[5/6] w-full max-w-xl sm:aspect-square lg:aspect-[7/8] lg:max-w-none">
            <Foto tone="terra" icon={BookOpen} label="Roda de leitura" className="absolute right-0 top-0 h-[54%] w-[80%]" />
            <Foto tone="sky" icon={Landmark} label="Caminhada histórica" className="absolute bottom-0 left-0 h-[52%] w-[48%]" />
            <Foto tone="sun" icon={Palette} className="absolute bottom-[10%] right-[4%] h-[27%] w-[24%]" />
            <Foto tone="coffee" icon={Coffee} className="absolute bottom-[30%] right-[34%] h-[17%] w-[18%]" />

            <Selo className="absolute -left-2 top-[6%] sm:left-[4%] lg:-left-8 lg:top-[10%]" />
            <Etiqueta tone="ink" className="absolute left-[44%] top-[48%] size-24 flex-col px-2 text-center leading-tight md:size-28">
              <span>Encontros</span>
              <span>presenciais</span>
            </Etiqueta>
            <Etiqueta tone="lime" className="absolute bottom-[8%] left-[40%] -rotate-3 rounded-lg px-4 py-2 font-display text-2xl normal-case tracking-normal md:text-3xl">
              #1 em Aracaju
            </Etiqueta>
            <LinkSeta href="#participe" className="absolute -bottom-3 right-0 hidden sm:inline-flex">
              Quero entrar
            </LinkSeta>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
