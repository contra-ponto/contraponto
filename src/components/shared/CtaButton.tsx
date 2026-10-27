import type { ComponentProps } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CtaButtonProps extends Omit<ComponentProps<'a'>, 'ref'> {
  tone?: 'sun' | 'ink'
}

/** CTA retangular com divisor e seta, como no layout de referência. */
export function CtaButton({ tone = 'sun', className, children, ...props }: CtaButtonProps) {
  return (
    <Button
      asChild
      className={cn(
        'group h-14 rounded-none px-6 text-sm font-bold uppercase tracking-wide shadow-none',
        tone === 'sun' ? 'bg-sun text-ink hover:bg-ink hover:text-paper' : 'bg-ink text-paper hover:bg-sun hover:text-ink',
        className,
      )}
    >
      <a {...props}>
        {children}
        <span className="mx-1 h-5 w-px bg-current opacity-60" aria-hidden="true" />
        <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </Button>
  )
}
