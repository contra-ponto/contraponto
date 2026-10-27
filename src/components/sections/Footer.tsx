import { Logo } from '@/components/shared/Logo'
import { nav, site } from '@/data/site'

export function Footer() {
  return (
    <footer className="bg-ink pb-28 text-paper md:pb-0">
      <div className="mx-auto max-w-300 px-5 py-14 md:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <Logo className="[&_span]:text-paper [&_circle:last-child]:stroke-paper" />
            <p className="mt-4 max-w-xs text-sm leading-6 text-paper/70">
              Clube de cultura e ideias. Nascido em Aracaju, sem fronteiras.
            </p>
          </div>
          <nav aria-label="Rodapé" className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium uppercase tracking-wide">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-sun">{n.label}</a>
            ))}
          </nav>
          <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid size-11 place-items-center rounded-full border border-paper/30 hover:bg-sun hover:text-ink">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
            </svg>
          </a>
        </div>
        <p className="mt-12 border-t border-paper/15 pt-6 text-xs text-paper/60">
          © {new Date().getFullYear()} CONTRAPONTO. Ideias diferentes. Espaço em comum.
        </p>
      </div>
    </footer>
  )
}
