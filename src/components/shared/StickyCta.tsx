import { useEffect, useState } from 'react'
import { CtaButton } from '@/components/shared/CtaButton'
import { cn } from '@/lib/utils'

/** CTA fixo no rodapé da tela, só no mobile e depois de passar do hero. */
export function StickyCta() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={cn(
        'fixed inset-x-0 bottom-0 z-30 bg-paper/95 p-3 shadow-[0_-8px_24px_rgb(0_0_0/0.08)] backdrop-blur transition-transform md:hidden',
        show ? 'translate-y-0' : 'translate-y-full',
      )}
    >
      <CtaButton href="#participe" className="w-full justify-between">Quero fazer parte</CtaButton>
    </div>
  )
}
