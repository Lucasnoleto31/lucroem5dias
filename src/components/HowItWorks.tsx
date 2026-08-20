import type { Campanha } from "@/content/tipos";
import { Reveal } from "./motion/Reveal";

export function HowItWorks({ campanha }: { campanha: Campanha }) {
  const { passos } = campanha;

  return (
    <section
      id="como-funciona"
      className="border-y border-edge bg-surface-raised/40 px-4 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <p className="overline-label text-primary-300">Como funciona</p>
          <h2 className="mt-4 max-w-[24ch] text-h1 text-text-strong md:text-display-lg">
            {passos.titulo}
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {passos.itens.map((step, i) => (
            <li key={step.numero} className="relative md:pt-2">
              <Reveal delay={i * 80}>
                <div className="flex items-center gap-4">
                  <span className="tabular flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary-700 bg-primary-900/50 font-display text-h3 text-primary-200">
                    {step.numero}
                  </span>
                  {i < passos.itens.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden h-px flex-1 bg-edge md:block"
                    />
                  )}
                </div>
                <h3 className="mt-6 text-h3 text-text-strong">{step.titulo}</h3>
                <p className="mt-4 max-w-[38ch] text-body-sm text-text-muted">
                  {step.descricao}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
