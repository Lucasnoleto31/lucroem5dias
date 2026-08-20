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
  title: "Primeiro Lucro em 5 Dias · Aula ao vivo com Fabricio Gonçalvez",
  description:
    "Aula ao vivo e gratuita de 2 horas, dia 31/08 às 19h30, com Fabricio Gonçalvez, sócio da Genial Investimentos e 5º no Top Traders InfoMoney 2025. Conteúdo educacional para iniciantes, sem garantia de resultado.",
  openGraph: {
    title: "Primeiro Lucro em 5 Dias · Aula ao vivo com Fabricio Gonçalvez",
    description:
      "Aula ao vivo e gratuita de 2 horas para iniciantes, 31/08 às 19h30. Conteúdo educacional, sem garantia de resultado.",
    locale: "pt_BR",
    type: "website",
  },
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
