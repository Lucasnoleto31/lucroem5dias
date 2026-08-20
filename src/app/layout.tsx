import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  // Fallback: cada campanha define o próprio title/description em
  // generateMetadata. Isto só aparece em páginas sem metadata própria.
  title: "Mentoria Fabricio Gonçalvez · Aulas ao vivo",
  description:
    "Aulas ao vivo e gratuitas com Fabricio Gonçalvez, sócio da Genial Investimentos e 5º no Top Traders InfoMoney 2025. Conteúdo educacional, sem garantia de resultado.",
};

export const viewport: Viewport = {
  themeColor: "#0d0c0b",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
