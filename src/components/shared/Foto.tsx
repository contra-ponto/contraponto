import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const tones = {
  terra: 'bg-terra text-paper',
  coffee: 'bg-coffee text-paper',
  sun: 'bg-sun text-ink',
  sky: 'bg-[#8fb8d8] text-ink',
  lime: 'bg-lime text-ink',
  paper: 'bg-paper-deep text-ink',
} as const

interface FotoProps {
  tone?: keyof typeof tones
  icon?: LucideIcon
  label?: string
  className?: string
}

/**
 * Placeholder de foto: troque por <img> quando houver imagens reais
 * (mantém classes de tamanho/posição passadas em `className`).
 */
export function Foto({ tone = 'terra', icon: Icon, label, className }: FotoProps) {
  return (
    <div
      role="img"
      aria-label={label ? `Imagem ilustrativa: ${label}` : 'Imagem ilustrativa'}
      className={cn('grain relative overflow-hidden', tones[tone], className)}
    >
      <svg className="absolute inset-0 size-full opacity-20" aria-hidden="true">
        <defs>
          <pattern id={`dots-${tone}`} width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.6" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#dots-${tone})`} />
      </svg>
      {Icon && (
        <Icon className="absolute -bottom-[8%] -right-[6%] size-[70%] opacity-25" strokeWidth={1} aria-hidden="true" />
      )}
      {label && (
        <span className="absolute bottom-2 left-2 max-w-[85%] bg-ink/85 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-paper md:text-xs">
          {label}
        </span>
      )}
    </div>
  )
}
