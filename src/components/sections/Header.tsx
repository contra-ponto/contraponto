import { useEffect, useState } from 'react'
import { Mail, Menu } from 'lucide-react'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Logo } from '@/components/shared/Logo'
import { CtaButton } from '@/components/shared/CtaButton'
import { nav, site } from '@/data/site'
import { cn } from '@/lib/utils'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 transition-colors',
        scrolled ? 'bg-paper/90 backdrop-blur' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-300 items-center justify-between border-b border-ink/15 px-5 md:h-20 md:px-8">
        <Logo />

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium uppercase tracking-wide hover:underline hover:decoration-2 hover:underline-offset-8">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contato" className="hidden text-sm font-medium uppercase tracking-wide md:block">Contato</a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Enviar e-mail"
            className="grid size-11 place-items-center rounded-full bg-white shadow-sm transition-colors hover:bg-sun"
          >
            <Mail className="size-5" />
          </a>

          <Sheet>
            <SheetTrigger asChild>
              <button aria-label="Abrir menu" className="grid size-11 place-items-center rounded-full bg-ink text-paper lg:hidden">
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full border-0 bg-paper p-0 sm:max-w-sm">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <SheetDescription className="sr-only">Navegação do site</SheetDescription>
              <div className="bg-topo flex h-full flex-col justify-between px-6 pb-8 pt-20">
                <nav aria-label="Mobile" className="flex flex-col gap-1">
                  {nav.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <a href={item.href} className="border-b border-ink/15 py-4 font-display text-4xl font-semibold tracking-tight">
                        {item.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
                <SheetClose asChild>
                  <CtaButton href="#participe" className="w-full justify-between">Quero fazer parte</CtaButton>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
