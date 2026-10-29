import { Reveal } from '@/components/shared/Reveal'

export function Manifesto() {
  return (
    <section id="manifesto" className="bg-ink text-paper">
      <div className="mx-auto grid max-w-300 gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sun md:text-sm">Manifesto</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Um convite para <em className="font-medium italic text-sun">desacelerar</em> enquanto amplia o seu olhar para o mundo.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="space-y-6 text-lg leading-8 text-paper/85 lg:col-span-7 lg:col-start-6 md:text-xl md:leading-9">
          <p>
            Todos os meses, uma nova experiência criativa, de aprendizado, cultura e arte. O CONTRAPONTO é um espaço
            para criar <strong className="text-paper">fora da internet</strong>, onde pessoas diferentes se conhecem e aprendem juntas.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
