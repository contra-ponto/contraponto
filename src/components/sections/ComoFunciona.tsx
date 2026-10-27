import { Reveal } from '@/components/shared/Reveal'

const passos = [
  { n: '01', titulo: 'Chegue como está', texto: 'Sem pré-requisito, sem repertório mínimo. Escolha um encontro e apareça.' },
  { n: '02', titulo: 'Participe de verdade', texto: 'Leia, converse, crie. Aqui ninguém só assiste: todo mundo entra na roda.' },
  { n: '03', titulo: 'Volte e construa', texto: 'Dos encontros nascem vínculos, ideias e projetos que seguem além do evento.' },
]

export function ComoFunciona() {
  return (
    <section className="bg-paper-deep">
      <div className="mx-auto max-w-300 px-5 py-20 md:px-8 md:py-28">
        <Reveal className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] md:text-sm">Como funciona</p>
          <h2 className="mt-4 text-5xl font-semibold md:text-6xl">
            Para quem quer sair do <em className="font-medium italic text-terra">consumo passivo</em>.
          </h2>
        </Reveal>
        <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
          {passos.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.1}>
              <li className="border-t-2 border-ink pt-5">
                <span className="font-display text-6xl italic text-sun [-webkit-text-stroke:1.5px_var(--ink)]">{p.n}</span>
                <h3 className="mt-4 text-3xl font-semibold">{p.titulo}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{p.texto}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
