import { Mail, MessageCircle } from 'lucide-react'
import { Selo } from '@/components/shared/Selo'
import { Reveal } from '@/components/shared/Reveal'
import { CtaButton } from '@/components/shared/CtaButton'
import { site } from '@/data/site'

export function CtaFinal() {
  return (
    <section id="contato" className="bg-sun">
      <div className="relative mx-auto max-w-300 overflow-hidden px-5 py-20 md:px-8 md:py-28">
        <Reveal className="relative z-10 max-w-3xl">
          <h2 className="text-5xl font-semibold md:text-8xl">
            Sua cadeira na roda <em className="font-medium italic">está livre</em>.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8">
            Fale com a gente pelo WhatsApp ou por e-mail. Respondemos com calma e sem burocracia.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <CtaButton tone="ink" href={site.whatsapp()} target="_blank" rel="noreferrer">
              <MessageCircle className="size-5" /> Atendimento por WhatsApp
            </CtaButton>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 font-semibold underline decoration-2 underline-offset-4">
              <Mail className="size-5" /> {site.email}
            </a>
          </div>
        </Reveal>
        <Selo className="absolute -bottom-6 -right-6 hidden !bg-sun md:grid md:size-52 lg:right-12" />
      </div>
    </section>
  )
}
