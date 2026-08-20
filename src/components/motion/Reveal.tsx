"use client";

import { m, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: React.ReactNode;
  /** atraso em ms — use múltiplos de 60–80ms para stagger entre irmãos */
  delay?: number;
  className?: string;
};

/**
 * Entrada de conteúdo do design system: opacity 0→1 + y 12→0, 250ms,
 * anima uma única vez ao entrar na viewport. Com prefers-reduced-motion,
 * entrega o estado final direto.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.25, ease: EASE, delay: delay / 1000 }}
    >
      {children}
    </m.div>
  );
}
