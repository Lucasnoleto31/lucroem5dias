import type { Campanha } from "@/content/tipos";

export function Footer({ campanha }: { campanha: Campanha }) {
  return (
    <footer className="border-t border-edge px-4 py-16 md:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-baseline">
          <div>
            <p className="font-display text-h3 text-text-strong">zeve</p>
            <p className="mt-1 text-body-sm text-text-muted">
              × Fabricio Gonçalvez · {campanha.nome}
            </p>
          </div>
          <a
            href="https://wa.me/5562999944855"
            className="text-body-sm text-text-default underline-offset-4 hover:underline"
          >
            WhatsApp: +55 62 99994-4855
          </a>
        </div>
        <p className="mt-12 max-w-[90ch] text-caption text-text-muted">
          Conteúdo educacional e informativo, sem recomendação de investimento
          e sem garantia de resultado. Operações no mercado financeiro
          envolvem risco de perda, inclusive do capital investido.
          Rentabilidade passada não garante rentabilidade futura. A Zeve é um
          escritório de assessoria de investimentos; a participação na aula
          exige conta na Genial Investimentos com a assessoria da Zeve.
        </p>
        <p className="mt-6 text-caption text-text-muted">
          © 2026 Zeve · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
