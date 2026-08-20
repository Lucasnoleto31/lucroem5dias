import type { Metadata } from "next";
import { CalendarIcon, CheckIcon, WhatsAppIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Vaga garantida · Primeiro Lucro em 5 Dias",
  robots: { index: false },
};

const WHATSAPP_URL =
  "https://wa.me/5562999944855?text=" +
  encodeURIComponent(
    "Olá! Acabei de garantir minha vaga na aula Primeiro Lucro em 5 Dias (31/08 às 19h30) e quero confirmar minha participação."
  );

const CALENDAR_URL =
  "https://calendar.google.com/calendar/render?action=TEMPLATE" +
  "&text=" + encodeURIComponent("Aula ao vivo · Primeiro Lucro em 5 Dias") +
  "&dates=20260831T223000Z/20260901T003000Z" +
  "&details=" + encodeURIComponent("Aula ao vivo com Fabricio Gonçalvez. O link chega pelo WhatsApp da equipe Zeve.");

/**
 * Página de confirmação. Todo o conteúdo renderiza visível de imediato:
 * o CTA do WhatsApp é o único objetivo daqui e não pode esperar hidratação.
 */
export default function Obrigado() {
  return (
    <main className="flex min-h-svh items-center px-4 py-24 md:px-8">
      <div className="mx-auto w-full max-w-[560px]">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-primary-700 bg-primary-900/50">
          <CheckIcon className="h-8 w-8 text-primary-300" />
        </span>
        <h1 className="mt-8 text-h1 text-text-strong md:text-display-lg">
          Vaga garantida, My Friend.
        </h1>
        <p className="mt-4 max-w-[46ch] text-body-lg text-text-muted">
          Falta um passo: chama a equipe da Zeve no WhatsApp pra validar sua
          conta na Genial e receber o link da aula.
        </p>

        <a
          href={WHATSAPP_URL}
          className="mt-10 inline-flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-cta px-8 text-body font-semibold text-neutral-950 transition-[background-color,transform] duration-150 ease-out hover:-translate-y-px hover:bg-cta-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Chamar a equipe no WhatsApp
        </a>
        <a
          href={CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-edge px-6 text-body-sm font-semibold text-text-strong transition-[border-color,transform] duration-150 ease-out hover:-translate-y-px hover:border-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
        >
          <CalendarIcon className="h-4 w-4" />
          Salvar na agenda: 31/08, 19h30
        </a>

        <p className="mt-6 text-center text-caption text-text-muted">
          Segunda-feira, 31 de agosto · 19h30 (horário de Brasília) · 2 horas
          ao vivo
        </p>
        <p className="mt-8 border-t border-edge pt-6 text-caption text-text-muted">
          Conteúdo educacional, sem promessa ou garantia de resultado. Operar
          no mercado financeiro envolve risco de perda.
        </p>
      </div>
    </main>
  );
}
