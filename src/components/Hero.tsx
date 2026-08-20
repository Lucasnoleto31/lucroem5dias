import { Button } from "./ui/Button";
import { Reveal } from "./motion/Reveal";
import {
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  LiveIcon,
  TicketIcon,
  BuildingIcon,
} from "./ui/Icons";

const CREDENTIALS = [
  "20 anos de mercado",
  "5º no Top Traders InfoMoney 2025",
  "Sócio da Genial Investimentos",
];

const DETAILS = [
  { icon: CalendarIcon, label: "Segunda-feira, 31 de agosto" },
  { icon: ClockIcon, label: "19h30 · 2 horas de duração" },
  { icon: LiveIcon, label: "100% ao vivo, com espaço pra perguntas" },
  { icon: TicketIcon, label: "Gratuita, com vagas por ordem de chegada" },
];

export function Hero() {
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
            Aula ao vivo e gratuita · 31 de agosto · 19h30
          </p>

          <h1 className="mt-6 max-w-[16ch] text-display-xl text-text-strong md:text-display-2xl">
            Do zero ao seu{" "}
            <span className="text-primary-300">primeiro lucro</span> em 5 dias
          </h1>

          <p className="mt-6 max-w-[52ch] text-body-lg text-text-muted">
            Uma aula ao vivo de 2 horas com Fabricio Gonçalvez pra quem está
            começando: o método, os erros que mais quebram iniciantes e o
            passo a passo pra buscar seu primeiro resultado no mercado. Sem
            promessa milagrosa.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button size="lg" href="#inscricao">
              Quero minha vaga gratuita
            </Button>
            <Button variant="ghost" size="lg" href="#aula">
              Ver o que você vai aprender →
            </Button>
          </div>

          <div className="mt-12">
            <ul className="flex flex-wrap gap-x-8 gap-y-4">
              {CREDENTIALS.map((item) => (
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
            <p className="overline-label text-primary-300">A aula</p>
            <h2 className="mt-2 font-display text-h3 text-text-strong">
              Primeiro Lucro em 5 Dias
            </h2>
            <p className="mt-2 text-body-sm text-text-muted">
              O plano de 5 dias pra sair da dúvida e destravar suas primeiras
              operações com acompanhamento.
            </p>

            <ul className="mt-8 flex flex-col gap-4 border-t border-edge pt-8">
              {DETAILS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2">
                  <Icon className="h-5 w-5 shrink-0 text-primary-300" />
                  <span className="text-body-sm text-text-default">{label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-lg border border-primary-700 bg-primary-900/50 p-4">
              <p className="flex gap-3 text-caption text-primary-100">
                <BuildingIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary-300" />
                <span>
                  <strong className="font-semibold">Pré-requisito:</strong> ter
                  conta na Genial Investimentos com a assessoria da Zeve. Ainda
                  não tem? A equipe te ajuda a abrir depois da inscrição.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
