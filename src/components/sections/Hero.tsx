import { BookOpen, Coffee, Landmark, Palette } from 'lucide-react'
import { CtaButton } from '@/components/shared/CtaButton'
import { Etiqueta } from '@/components/shared/Etiqueta'
import { Foto } from '@/components/shared/Foto'
import { LinkSeta } from '@/components/shared/LinkSeta'
import { Selo } from '@/components/shared/Selo'
import { Reveal } from '@/components/shared/Reveal'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-300 px-5 pb-16 pt-8 md:px-8 md:pb-24 md:pt-14">
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-6 lg:pt-6">
          <h1 className="text-[2.5rem] font-semibold sm:text-6xl lg:text-[3.4rem] xl:text-[3.8rem]">
            Encontre sua galera. Comunidade para quem quer{' '}
            <em className="font-medium italic text-terra">ampliar seu olhar para o mundo.</em>
          </h1>
          <p className="mt-6 font-display text-2xl font-medium italic md:text-3xl">
            Ideias diferentes. Espaço em comum.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
            <CtaButton href="#participe">Quero fazer parte</CtaButton>
            <LinkSeta href="#programacao">Ver programação</LinkSeta>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-6">
          <div className="relative mx-auto aspect-[5/6] w-full max-w-xl sm:aspect-square lg:ml-auto lg:aspect-square lg:max-w-md xl:max-w-[30rem]">
            <Foto tone="terra" icon={BookOpen} label="Roda de leitura" className="absolute right-0 top-0 h-[54%] w-[80%]" />
            <Foto tone="sky" icon={Landmark} label="Caminhada histórica" className="absolute bottom-0 left-0 h-[52%] w-[48%]" />
            <Foto tone="sun" icon={Palette} className="absolute bottom-[10%] right-[4%] h-[27%] w-[24%]" />
            <Foto tone="coffee" icon={Coffee} className="absolute bottom-[30%] right-[34%] h-[17%] w-[18%]" />

            <Selo className="absolute -left-2 top-[6%] sm:left-[4%] lg:left-0 lg:top-[10%]" />
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
