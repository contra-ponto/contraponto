import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/queryClient'
import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { Manifesto } from '@/components/sections/Manifesto'
import { Pilares } from '@/components/sections/Pilares'
import { Programacao } from '@/components/sections/Programacao'
import { Marquee } from '@/components/shared/Marquee'
import { ComoFunciona } from '@/components/sections/ComoFunciona'
import { Planos } from '@/components/sections/Planos'
import { Depoimentos } from '@/components/sections/Depoimentos'
import { Faq } from '@/components/sections/Faq'
import { CtaFinal } from '@/components/sections/CtaFinal'
import { Footer } from '@/components/sections/Footer'
import { StickyCta } from '@/components/shared/StickyCta'

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-topo">
        <Header />
        <main>
          <Hero />
          <Manifesto />
          <Pilares />
          <Programacao />
          <Marquee />
          <ComoFunciona />
          <Planos />
          <Depoimentos />
          <Faq />
          <CtaFinal />
        </main>
        <Footer />
        <StickyCta />
      </div>
    </QueryClientProvider>
  )
}
