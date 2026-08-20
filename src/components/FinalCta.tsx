import { Button } from "./ui/Button";
import { Reveal } from "./motion/Reveal";

export function FinalCta() {
  return (
    <section className="px-4 py-24 md:px-8 md:py-32">
      <Reveal className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-start justify-between gap-8 rounded-lg border border-primary-700 bg-primary-900/40 p-8 md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="max-w-[24ch] text-h2 text-text-strong md:text-h1">
              31 de agosto, 19h30. Duas horas que organizam seus primeiros
              passos.
            </h2>
            <p className="mt-4 text-body text-text-muted">
              Gratuito, ao vivo, com vagas por ordem de chegada.
            </p>
          </div>
          {/* variante secundária: o único CTA âmbar da página é o do formulário */}
          <Button variant="secondary" size="lg" href="#inscricao" className="shrink-0">
            Voltar para a inscrição
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
