import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const tones = {
  ink: 'bg-ink text-paper',
  lime: 'bg-lime text-ink ring-2 ring-ink/80',
  sun: 'bg-sun text-ink',
  paper: 'bg-paper text-ink ring-1 ring-ink/30',
} as const

interface EtiquetaProps {
  tone?: keyof typeof tones
  className?: string
  children: ReactNode
}

/** Etiqueta sobreposta às fotos (estilo colagem). */
export function Etiqueta({ tone = 'ink', className, children }: EtiquetaProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center text-xs font-semibold uppercase tracking-wider',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
