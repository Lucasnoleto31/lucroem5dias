import { Reveal } from "./motion/Reveal";

const STEPS = [
  {
    number: "1",
    title: "Garanta sua vaga",
    description:
      "Preencha o formulário aqui embaixo, leva menos de 2 minutos. A vaga é gratuita e por ordem de chegada.",
  },
  {
    number: "2",
    title: "Fale com a equipe no WhatsApp",
    description:
      "A equipe da Zeve te chama pra confirmar sua conta na Genial. Ainda não tem? Eles abrem com você, sem custo, antes da aula.",
  },
  {
    number: "3",
    title: "Entre ao vivo dia 31/08",
    description:
      "Segunda-feira, 19h30. Duas horas com o Fabricio e o plano dos seus primeiros 5 dias no mercado, pronto pra executar.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="border-y border-edge bg-surface-raised/40 px-4 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <p className="overline-label text-primary-300">Como funciona</p>
          <h2 className="mt-4 max-w-[24ch] text-h1 text-text-strong md:text-display-lg">
            Da inscrição à aula em 3 passos
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, i) => (
            <li key={step.number} className="relative md:pt-2">
              <Reveal delay={i * 80}>
                <div className="flex items-center gap-4">
                  <span className="tabular flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary-700 bg-primary-900/50 font-display text-h3 text-primary-200">
                    {step.number}
                  </span>
                  {i < STEPS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden h-px flex-1 bg-edge md:block"
                    />
                  )}
                </div>
                <h3 className="mt-6 text-h3 text-text-strong">{step.title}</h3>
                <p className="mt-4 max-w-[38ch] text-body-sm text-text-muted">
                  {step.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
