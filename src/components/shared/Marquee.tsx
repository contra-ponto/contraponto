import { Asterisk } from 'lucide-react'

const words = ['Ler', 'Debater', 'Criar', 'Conviver', 'Questionar', 'Descobrir', 'Ouvir']

export function Marquee() {
  const row = (
    <>
      {words.map((w) => (
        <span key={w} className="flex items-center gap-8 pr-8">
          <span className="font-display text-4xl font-semibold italic md:text-6xl">{w}</span>
          <Asterisk className="size-8 text-sun md:size-12" strokeWidth={2.5} aria-hidden="true" />
        </span>
      ))}
    </>
  )
  return (
    <div className="overflow-hidden bg-ink py-5 text-paper md:py-7" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        <div className="flex shrink-0">{row}</div>
        <div className="flex shrink-0">{row}</div>
      </div>
    </div>
  )
}
