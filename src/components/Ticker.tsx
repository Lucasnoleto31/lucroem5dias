"use client";

import { useState } from "react";
import { m, useReducedMotion } from "framer-motion";

const QUOTES = [
  { symbol: "WIN", value: "132.480", change: "+0,84%", up: true },
  { symbol: "WDO", value: "5.412,5", change: "-0,31%", up: false },
  { symbol: "IBOV", value: "129.740", change: "+0,67%", up: true },
  { symbol: "DOL", value: "5.413,0", change: "-0,29%", up: false },
  { symbol: "PETR4", value: "38,21", change: "+1,12%", up: true },
  { symbol: "VALE3", value: "61,07", change: "-0,44%", up: false },
  { symbol: "S&P", value: "5.870", change: "+0,38%", up: true },
  { symbol: "BTC", value: "US$ 94,2K", change: "+2,15%", up: true },
  { symbol: "OURO", value: "US$ 2.658", change: "+0,21%", up: true },
];

function Row() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {QUOTES.map((q) => (
        <span
          key={q.symbol}
          className="tabular flex items-baseline gap-2 text-body-sm whitespace-nowrap"
        >
          <span className="font-semibold text-text-default">{q.symbol}</span>
          <span className="text-text-muted">{q.value}</span>
          <span className={q.up ? "text-primary-300" : "text-danger"}>
            {q.up ? "▲" : "▼"} {q.change}
          </span>
        </span>
      ))}
    </div>
  );
}

/** Faixa de cotações decorativa. Valores ilustrativos, não são cotações reais. */
export function Ticker() {
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const still = reduced || paused;

  return (
    <div className="relative border-y border-edge bg-surface-raised/60">
      <div aria-hidden="true" className="overflow-hidden py-4">
        {still ? (
          <div className="flex">
            <Row />
          </div>
        ) : (
          <m.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 45, ease: "linear", repeat: Infinity }}
          >
            <Row />
            <Row />
          </m.div>
        )}
      </div>

      {/* WCAG 2.2.2: movimento automático acima de 5s precisa de pausa */}
      {!reduced && (
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          className="absolute top-1/2 right-4 hidden -translate-y-1/2 rounded border border-edge bg-surface px-2 py-1 text-caption text-text-muted transition-colors duration-150 ease-out hover:text-text-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 md:block"
        >
          {paused ? "Retomar" : "Pausar"}
          <span className="sr-only"> a faixa de cotações</span>
        </button>
      )}
    </div>
  );
}
