import type { Campanha } from "./tipos";
import { primeiroLucro } from "./primeirolucro";
import { avancado } from "./avancado";

export type { Campanha } from "./tipos";

/** Toda campanha publicada. Adicionar uma LP nova = adicionar um item aqui. */
export const CAMPANHAS: Campanha[] = [primeiroLucro, avancado];

/** Prefixo de URL comum a todas as campanhas. */
export const BASE = "/mentoriafabricio";

/** Campanha exibida quando alguém chega na raiz do site. */
export const CAMPANHA_PADRAO = primeiroLucro;

export function buscarCampanha(slug: string): Campanha | undefined {
  return CAMPANHAS.find((c) => c.slug === slug);
}

/**
 * Origens aceitas pela API. Um lead só é gravado se declarar uma destas —
 * sem isso, o campo viraria texto livre gravável na planilha por qualquer um.
 */
export const ORIGENS_VALIDAS = CAMPANHAS.map((c) => c.origem);

export function caminhoDaCampanha(campanha: Campanha): string {
  return `${BASE}/${campanha.slug}`;
}
