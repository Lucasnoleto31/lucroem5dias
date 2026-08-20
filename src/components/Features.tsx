import { Reveal } from "./motion/Reveal";

const FEATURES = [
  {
    number: "01",
    title: "Como o mercado funciona de verdade",
    description:
      "O que é o mini índice, como o preço se move e por que a maioria dos iniciantes quebra tentando adivinhar. A base que separa operação de aposta.",
  },
  {
    number: "02",
    title: "O plano dos 5 dias",
    description:
      "O passo a passo do dia 1 ao dia 5 depois da aula: conta pronta, treino no simulador e a primeira operação com risco controlado. E a equipe da Zeve acompanha cada etapa com você.",
  },
  {
    number: "03",
    title: "Gerenciamento de risco de gente grande",
    description:
      "Quanto arriscar por operação, onde fica o stop e as regras que 20 anos de mercado ensinaram ao Fabricio, traduzidas pra quem está começando do zero.",
  },
];

export function Features() {
  return (
    <section id="aula" className="px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <p className="overline-label text-primary-300">A aula de 31/08</p>
          <h2 className="mt-4 max-w-[22ch] text-h1 text-text-strong md:text-display-lg">
            O que você leva das 2 horas ao vivo
          </h2>
          <p className="mt-4 max-w-[60ch] text-body-lg text-text-muted">
            Sem enrolação e sem promessa de riqueza: a aula existe pra você sair
            sabendo exatamente o que fazer nos 5 dias seguintes.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.number} delay={i * 80}>
              <article className="h-full rounded-lg border border-edge bg-surface-raised p-6 md:p-8">
                <span
                  aria-hidden="true"
                  className="tabular font-display text-display-lg text-primary-500"
                >
                  {feature.number}
                </span>
                <h3 className="mt-6 text-h3 text-text-strong">
                  {feature.title}
                </h3>
                <p className="mt-4 text-body-sm text-text-muted">
                  {feature.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
