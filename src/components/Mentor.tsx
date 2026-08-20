import { Reveal } from "./motion/Reveal";
import { CheckIcon } from "./ui/Icons";

const FACTS = [
  "No mercado desde 2006, com 20 anos operando de verdade, todo dia",
  "Sócio da Genial Investimentos e CEO e cofundador da gestora Box Asset",
  "5º colocado no prêmio Top Traders InfoMoney 2025",
  "Criador dos indicadores FGZ, distribuídos oficialmente na plataforma Profit, da Nelogica",
  "Há 8 anos ensinando iniciantes a operar com método, sem vender riqueza fácil",
];

const STATS = [
  { value: "20", suffix: " anos", label: "de mercado, desde 2006" },
  { value: "5º", suffix: "", label: "no Top Traders InfoMoney 2025" },
  { value: "8", suffix: " anos", label: "formando traders iniciantes" },
];

export function Mentor() {
  return (
    <section id="mentor" className="px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-[1200px] items-start gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="rounded-lg border border-edge bg-surface-raised p-8">
            {/* TODO: trocar pela foto real do Fabricio (a mesma da LP da comunidade) */}
            <div className="flex aspect-square items-center justify-center rounded-lg bg-neutral-800">
              <span className="font-display text-display-lg text-neutral-600">
                FG
              </span>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-edge pt-6">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="tabular font-display text-h2 text-primary-300">
                    {stat.value}
                    <span className="text-h3">{stat.suffix}</span>
                  </p>
                  <p className="mt-1 text-caption text-text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="overline-label text-primary-300">Quem dá a aula</p>
            <h2 className="mt-4 text-h1 text-text-strong md:text-display-lg">
              Fabricio Gonçalvez
            </h2>
            <p className="mt-4 max-w-[58ch] text-body-lg text-text-muted">
              Você vai aprender com quem opera todos os dias, não com quem só
              dá aula. São 20 anos de mercado traduzidos pra linguagem de quem
              está começando agora.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <ul className="mt-10 flex flex-col gap-4">
              {FACTS.map((fact) => (
                <li key={fact} className="flex gap-2">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-primary-400" />
                  <span className="max-w-[58ch] text-body text-text-default">
                    {fact}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-12 max-w-[52ch] border-l-2 border-primary-500 pl-6 text-body text-text-muted">
              Iniciante não quebra por falta de inteligência. Quebra por operar
              sem plano. É exatamente isso que essas 2 horas vão te dar.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
