import type { Campanha } from "@/content/tipos";
import { Reveal } from "./motion/Reveal";

export function Features({ campanha }: { campanha: Campanha }) {
  const { features } = campanha;

  return (
    <section id="aula" className="px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <p className="overline-label text-primary-300">{features.rotulo}</p>
          <h2 className="mt-4 max-w-[22ch] text-h1 text-text-strong md:text-display-lg">
            {features.titulo}
          </h2>
          <p className="mt-4 max-w-[60ch] text-body-lg text-text-muted">
            {features.subtitulo}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.itens.map((feature, i) => (
            <Reveal key={feature.numero} delay={i * 80}>
              <article className="h-full rounded-lg border border-edge bg-surface-raised p-6 md:p-8">
                <span
                  aria-hidden="true"
                  className="tabular font-display text-display-lg text-primary-500"
                >
                  {feature.numero}
                </span>
                <h3 className="mt-6 text-h3 text-text-strong">
                  {feature.titulo}
                </h3>
                <p className="mt-4 text-body-sm text-text-muted">
                  {feature.descricao}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
