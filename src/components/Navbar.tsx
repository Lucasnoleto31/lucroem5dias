"use client";

import { useEffect, useState } from "react";
import type { Campanha } from "@/content/tipos";
import { Button } from "./ui/Button";

export function Navbar({ campanha }: { campanha: Campanha }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-150 ease-out ${
        scrolled
          ? "border-b border-edge bg-surface/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 md:px-8"
      >
        <a href="#topo" className="flex items-baseline gap-2">
          <span className="font-display text-h3 text-text-strong">zeve</span>
          <span className="hidden text-body-sm text-text-muted sm:inline">
            × Fabricio Gonçalvez
          </span>
        </a>
        <div className="flex items-center gap-6">
          <span className="overline-label hidden text-text-muted md:inline">
            {campanha.quando.curto}
          </span>
          <Button variant="secondary" size="sm" href="#inscricao">
            Garantir vaga
          </Button>
        </div>
      </nav>
    </header>
  );
}
