/**
 * Testa a integração com o Google Sheets de ponta a ponta.
 * Uso: node scripts/verificar-sheets.mjs
 */
import { readFileSync } from "node:fs";

function lerEnv() {
  const env = {};
  try {
    for (const linha of readFileSync(".env.local", "utf8").split("\n")) {
      const m = linha.match(/^([A-Z_]+)=(.*)$/);
      if (m) env[m[1]] = m[2].trim();
    }
  } catch {
    console.error("Não achei .env.local na raiz do projeto.");
    process.exit(1);
  }
  return env;
}

const env = lerEnv();
const url = env.LEAD_WEBHOOK_URL;
const token = env.LEAD_WEBHOOK_TOKEN;

if (!url) {
  console.error("\n✗ LEAD_WEBHOOK_URL está vazia no .env.local.");
  console.error("  Siga docs/google-sheets.md e cole a URL do Apps Script.\n");
  process.exit(1);
}

const lead = {
  token,
  timestamp: new Date().toISOString(),
  nome: "TESTE Integração (pode apagar)",
  telefone: "(62) 99999-0000",
  email: "teste@integracao.local",
  cpf: "000.000.000-00",
  corretora: "Genial",
  origem: "teste-automatico",
};

console.log("\n→ Enviando lead de teste para o Apps Script...");
const res = await fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(lead),
  redirect: "follow",
});
const texto = await res.text();

if (!res.ok) {
  console.error(`\n✗ HTTP ${res.status}. Resposta:\n${texto.slice(0, 400)}\n`);
  process.exit(1);
}

if (texto.includes("nao autorizado")) {
  console.error("\n✗ Token recusado. O TOKEN no Apps Script está diferente");
  console.error("  do LEAD_WEBHOOK_TOKEN do .env.local.\n");
  process.exit(1);
}

if (!texto.includes('"ok":true')) {
  console.error(`\n✗ Resposta inesperada:\n${texto.slice(0, 400)}\n`);
  process.exit(1);
}

console.log("\n✓ Funcionou! Abra a planilha: deve haver uma linha");
console.log("  'TESTE Integração (pode apagar)' na aba Leads.\n");
