import type { Campanha, IconeDetalhe } from "@/content/tipos";
import { Button } from "./ui/Button";
import {
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  LiveIcon,
  TicketIcon,
  BuildingIcon,
} from "./ui/Icons";

/** Conteúdo referencia ícones por nome; a resolução para componente mora aqui. */
const ICONES: Record<
  IconeDetalhe,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  calendario: CalendarIcon,
  relogio: ClockIcon,
  live: LiveIcon,
  ingresso: TicketIcon,
};

export function Hero({ campanha }: { campanha: Campanha }) {
  const { hero, nome } = campanha;

  return (
    <section className="px-4 pt-32 pb-24 md:px-8 md:pt-40 md:pb-32">
      <div className="mx-auto grid max-w-[1200px] items-start gap-16 lg:grid-cols-12">
        {/* Copy — renderiza visível: LCP não espera animação */}
        <div className="lg:col-span-7">
          <p className="overline-label flex items-center gap-2 text-primary-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-300" />
            </span>
            {hero.selo}
          </p>

          <h1 className="mt-6 max-w-[16ch] text-display-xl text-text-strong md:text-display-2xl">
            {hero.titulo.antes}
            <span className="text-primary-300">{hero.titulo.destaque}</span>
            {hero.titulo.depois}
          </h1>

          <p className="mt-6 max-w-[52ch] text-body-lg text-text-muted">
            {hero.subtitulo}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button size="lg" href="#inscricao">
              {hero.ctaPrimario}
            </Button>
            <Button variant="ghost" size="lg" href="#aula">
              {hero.ctaSecundario}
            </Button>
          </div>

          <div className="mt-12">
            <ul className="flex flex-wrap gap-x-8 gap-y-4">
              {hero.credenciais.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-body-sm text-text-muted"
                >
                  <CheckIcon className="h-4 w-4 shrink-0 text-primary-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card da aula: primeira dobra, renderiza visível (não espera hidratação) */}
        <div className="lg:col-span-5">
          <div className="rounded-lg border border-edge bg-surface-raised p-8">
            <p className="overline-label text-primary-300">{hero.card.rotulo}</p>
            <h2 className="mt-2 font-display text-h3 text-text-strong">
              {nome}
            </h2>
            <p className="mt-2 text-body-sm text-text-muted">
              {hero.card.descricao}
            </p>

            <ul className="mt-8 flex flex-col gap-4 border-t border-edge pt-8">
              {hero.card.detalhes.map((detalhe) => {
                const Icon = ICONES[detalhe.icone];
                return (
                  <li key={detalhe.label} className="flex items-center gap-2">
                    <Icon className="h-5 w-5 shrink-0 text-primary-300" />
                    <span className="text-body-sm text-text-default">
                      {detalhe.label}
                    </span>
                  </li>
                );
              })}
            </ul>

            {hero.card.preRequisito && (
              <div className="mt-8 rounded-lg border border-primary-700 bg-primary-900/50 p-4">
                <p className="flex gap-3 text-caption text-primary-100">
                  <BuildingIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary-300" />
                  <span>
                    <strong className="font-semibold">Pré-requisito:</strong>{" "}
                    {hero.card.preRequisito}
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
