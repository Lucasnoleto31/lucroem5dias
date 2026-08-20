import { NextResponse } from "next/server";
import { isValidCPF, isValidEmail, isValidPhone } from "@/lib/format";
import { ORIGENS_VALIDAS, CAMPANHA_PADRAO } from "@/content";

const CORRETORAS = ["Genial", "XP", "BTG", "Warren", "Toro", "Outro"];

type LeadBody = {
  nome?: string;
  telefone?: string;
  email?: string;
  cpf?: string;
  corretora?: string;
  origem?: string;
  site?: string; // honeypot
};

export async function POST(request: Request) {
  let body: LeadBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido" }, { status: 400 });
  }

  // honeypot preenchido = bot: finge sucesso e descarta
  if (body.site) return NextResponse.json({ ok: true });

  const nome = (body.nome ?? "").trim();
  const telefone = (body.telefone ?? "").trim();
  const email = (body.email ?? "").trim();
  const cpf = (body.cpf ?? "").trim();
  const corretora = (body.corretora ?? "").trim();
  const origemBruta = (body.origem ?? "").trim();

  // Origem ausente = página em cache de antes das campanhas existirem.
  // Cai no padrão em vez de descartar: perder um lead é pior que classificá-lo.
  // Já uma origem presente e desconhecida é injeção — essa string iria direto
  // para a planilha e escolhe em qual aba gravar.
  if (origemBruta && !ORIGENS_VALIDAS.includes(origemBruta)) {
    console.warn("[lead] origem desconhecida, recusado:", origemBruta);
    return NextResponse.json({ ok: false, error: "Origem inválida" }, { status: 422 });
  }
  const origem = origemBruta || CAMPANHA_PADRAO.origem;

  const invalid =
    nome.split(/\s+/).length < 2 ||
    !isValidPhone(telefone) ||
    !isValidEmail(email) ||
    !isValidCPF(cpf) ||
    !CORRETORAS.includes(corretora);

  if (invalid) {
    return NextResponse.json({ ok: false, error: "Dados inválidos" }, { status: 422 });
  }

  const lead = {
    token: process.env.LEAD_WEBHOOK_TOKEN ?? "",
    timestamp: new Date().toISOString(),
    nome,
    telefone,
    email,
    cpf,
    corretora,
    origem,
  };

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  if (!webhookUrl) {
    if (process.env.LEAD_DRY_RUN === "1") {
      console.warn("[lead] DRY RUN — lead não enviado ao Sheets:", lead.email);
      return NextResponse.json({ ok: true, dryRun: true });
    }
    console.error("[lead] LEAD_WEBHOOK_URL não configurada — lead perdido!");
    return NextResponse.json(
      { ok: false, error: "Captura não configurada" },
      { status: 500 }
    );
  }

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 10_000);
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      signal: controller.signal,
      // Apps Script responde com redirect 302; precisamos segui-lo
      redirect: "follow",
    });
    clearTimeout(timer);
    if (!res.ok) throw new Error(`Sheets respondeu ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead] Falha ao enviar ao Sheets:", err);
    return NextResponse.json(
      { ok: false, error: "Falha ao registrar" },
      { status: 502 }
    );
  }
}
