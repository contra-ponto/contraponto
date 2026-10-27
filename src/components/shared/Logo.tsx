import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" aria-label="CONTRAPONTO — início" className={cn('inline-flex items-center gap-2.5', className)}>
      <svg viewBox="0 0 32 24" className="h-6 w-8" aria-hidden="true">
        <circle cx="10" cy="12" r="9" fill="var(--sun)" />
        <circle cx="22" cy="12" r="8.2" fill="none" stroke="var(--ink)" strokeWidth="2" />
      </svg>
      <span className="font-display text-xl font-semibold tracking-tight">Contraponto</span>
    </a>
  )
}
