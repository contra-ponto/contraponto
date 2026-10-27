import type { ComponentProps } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/** Link sublinhado em caixa-alta com seta ↗. */
export function LinkSeta({ className, children, ...props }: ComponentProps<'a'>) {
  return (
    <a
      className={cn(
        'group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide md:text-base',
        className,
      )}
      {...props}
    >
      <span className="border-b-2 border-ink pb-0.5">{children}</span>
      <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  )
}
