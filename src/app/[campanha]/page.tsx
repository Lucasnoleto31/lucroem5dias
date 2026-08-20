import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CAMPANHAS, buscarCampanha } from "@/content";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Mentor } from "@/components/Mentor";
import { LeadForm } from "@/components/LeadForm";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

type Props = { params: Promise<{ campanha: string }> };

/**
 * A rota é de primeiro nível, então casaria com qualquer caminho do site.
 * Com dynamicParams desligado, só os slugs gerados abaixo existem: o resto
 * é 404 estático, sem invocar função. Rotas próprias como /obrigado e
 * /api/lead continuam tendo precedência sobre a dinâmica.
 */
export const dynamicParams = false;

/** Toda campanha registrada vira uma página estática no build. */
export function generateStaticParams() {
  return CAMPANHAS.map((c) => ({ campanha: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { campanha: slug } = await params;
  const campanha = buscarCampanha(slug);
  if (!campanha) return {};

  return {
    title: campanha.seo.titulo,
    description: campanha.seo.descricao,
    openGraph: {
      title: campanha.seo.titulo,
      description: campanha.seo.descricaoOg,
      locale: "pt_BR",
      type: "website",
    },
  };
}

export default async function PaginaCampanha({ params }: Props) {
  const { campanha: slug } = await params;
  const campanha = buscarCampanha(slug);
  if (!campanha) notFound();

  return (
    <MotionProvider>
      <Navbar campanha={campanha} />
      <main id="topo">
        <Hero campanha={campanha} />
        <Ticker />
        <Features campanha={campanha} />
        <Mentor campanha={campanha} />
        <HowItWorks campanha={campanha} />
        <LeadForm campanha={campanha} />
        <FinalCta campanha={campanha} />
      </main>
      <Footer campanha={campanha} />
    </MotionProvider>
  );
}
