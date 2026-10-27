import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SeloProps {
  text?: string
  className?: string
}

/** Selo circular com texto girando, ao estilo carimbo editorial. */
export function Selo({ text = 'ideias diferentes · espaço em comum · ', className }: SeloProps) {
  return (
    <div className={cn('relative grid size-28 place-items-center rounded-full bg-paper md:size-32', className)} aria-hidden="true">
      <svg viewBox="0 0 120 120" className="absolute inset-0 animate-spin-slow">
        <defs>
          <path id="selo-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <circle cx="60" cy="60" r="57" fill="none" stroke="var(--ink)" strokeWidth="1.5" strokeDasharray="2 3" />
        <text fontSize="9.5" fontWeight="700" fill="var(--ink)" className="uppercase">
          <textPath href="#selo-circle" textLength="270" lengthAdjust="spacing">{text}</textPath>
        </text>
      </svg>
      <ArrowUpRight className="size-7 md:size-8" strokeWidth={2.2} />
    </div>
  )
}
