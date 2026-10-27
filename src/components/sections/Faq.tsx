import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Reveal } from '@/components/shared/Reveal'
import { useFaq } from '@/hooks/useContent'

export function Faq() {
  const { data } = useFaq()

  return (
    <section id="duvidas" className="mx-auto grid max-w-300 gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12">
      <Reveal className="lg:col-span-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] md:text-sm">Dúvidas</p>
        <h2 className="mt-4 text-5xl font-semibold md:text-6xl">Ficou com alguma pergunta?</h2>
      </Reveal>
      <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
        <Accordion type="single" collapsible className="border-t border-ink">
          {data?.map((item, i) => (
            <AccordionItem key={item.q} value={`i${i}`} className="border-ink/20">
              <AccordionTrigger className="py-5 text-lg font-semibold hover:no-underline md:text-xl">{item.q}</AccordionTrigger>
              <AccordionContent className="text-base leading-7 text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  )
}
