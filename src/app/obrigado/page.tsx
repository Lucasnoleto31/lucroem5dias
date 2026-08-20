import type { Metadata } from "next";
import { buscarCampanha, CAMPANHA_PADRAO } from "@/content";
import type { Campanha } from "@/content/tipos";
import { CalendarIcon, CheckIcon, WhatsAppIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Vaga garantida · Mentoria Fabricio Gonçalvez",
  robots: { index: false },
};

const WHATSAPP = "5562999944855";

function urlWhatsapp(campanha: Campanha) {
  return (
    `https://wa.me/${WHATSAPP}?text=` +
    encodeURIComponent(campanha.obrigado.mensagemWhatsapp)
  );
}

function urlAgenda(campanha: Campanha) {
  return (
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=" + encodeURIComponent(campanha.obrigado.tituloAgenda) +
    `&dates=${campanha.quando.agendaInicio}/${campanha.quando.agendaFim}` +
    "&details=" +
    encodeURIComponent(
      "Aula ao vivo com Fabricio Gonçalvez. O link chega pelo WhatsApp da equipe Zeve."
    )
  );
}

/**
 * Página de confirmação. Todo o conteúdo renderiza visível de imediato:
 * o CTA do WhatsApp é o único objetivo daqui e não pode esperar hidratação.
 *
 * O `?c=` diz de qual campanha o lead veio. Se vier ausente ou desconhecido,
 * cai na campanha padrão — a confirmação nunca quebra por causa da query.
 */
export default async function Obrigado({
  searchParams,
}: {
  searchParams: Promise<{ c?: string }>;
}) {
  const { c } = await searchParams;
  const campanha = (c && buscarCampanha(c)) || CAMPANHA_PADRAO;
  const { obrigado, quando } = campanha;

  return (
    <main className="flex min-h-svh items-center px-4 py-24 md:px-8">
      <div className="mx-auto w-full max-w-[560px]">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-primary-700 bg-primary-900/50">
          <CheckIcon className="h-8 w-8 text-primary-300" />
        </span>
        <h1 className="mt-8 text-h1 text-text-strong md:text-display-lg">
          {obrigado.titulo}
        </h1>
        <p className="mt-4 max-w-[46ch] text-body-lg text-text-muted">
          {obrigado.subtitulo}
        </p>

        <a
          href={urlWhatsapp(campanha)}
          className="mt-10 inline-flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-cta px-8 text-body font-semibold text-neutral-950 transition-[background-color,transform] duration-150 ease-out hover:-translate-y-px hover:bg-cta-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Chamar a equipe no WhatsApp
        </a>
        <a
          href={urlAgenda(campanha)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-edge px-6 text-body-sm font-semibold text-text-strong transition-[border-color,transform] duration-150 ease-out hover:-translate-y-px hover:border-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
        >
          <CalendarIcon className="h-4 w-4" />
          Salvar na agenda: {quando.curto}
        </a>

        <p className="mt-6 text-center text-caption text-text-muted">
          {obrigado.resumo}
        </p>
        <p className="mt-8 border-t border-edge pt-6 text-caption text-text-muted">
          Conteúdo educacional, sem promessa ou garantia de resultado. Operar
          no mercado financeiro envolve risco de perda.
        </p>
      </div>
    </main>
  );
}
