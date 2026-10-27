import { Reveal } from '@/components/shared/Reveal'

export function Manifesto() {
  return (
    <section id="manifesto" className="bg-ink text-paper">
      <div className="mx-auto grid max-w-300 gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sun md:text-sm">Manifesto</p>
          <h2 className="mt-4 text-5xl font-semibold md:text-6xl">
            Cultura é <em className="font-medium italic text-sun">encontro</em>.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="space-y-6 text-lg leading-8 text-paper/85 lg:col-span-7 lg:col-start-6 md:text-xl md:leading-9">
          <p>
            O CONTRAPONTO nasce em Aracaju para criar espaços <strong className="text-paper">fora da internet</strong>, onde
            pessoas diferentes se conhecem, aprendem juntas e constroem relações que continuam além de um evento.
          </p>
          <p>
            Não somos só uma produtora de eventos, um clube de leitura ou uma plataforma de cursos. Somos uma comunidade
            cultural com programação contínua, e <strong className="text-paper">você não precisa ser especialista em nada</strong>.
            Basta querer aprender, questionar e ouvir outras perspectivas.
          </p>
          <p className="font-display text-2xl italic text-sun md:text-3xl">
            Perspectivas diferentes podem se encontrar, dialogar e construir algo em coletivo.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
