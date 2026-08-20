# Primeiro Lucro em 5 Dias — Landing Page

Landing page de captura para a aula ao vivo com Fabricio Gonçalvez
(31/08 · 19h30 · gratuita · pré-requisito: conta na Genial com a Zeve).

## Stack

- **Next.js 16** (App Router, `src/`) + React 19 + TypeScript
- **Tailwind CSS v4** — tokens de design em `src/app/globals.css`
- **framer-motion 13** via `LazyMotion` (bundle mínimo)
- Design system do projeto: `.claude/skills/design-system/SKILL.md`

## Rodar

```bash
npm install
npm run dev
```

> ⚠️ Neste Mac a pasta Documents é sincronizada pelo iCloud, que congela
> leituras do `node_modules`. Por isso `node_modules` e `.next` são
> **symlinks** para pastas `.nosync` (que o iCloud ignora). Se o dev
> server travar sem imprimir nada, veja o aviso no fim deste arquivo.

## Captura de leads → Google Sheets

O formulário envia para `POST /api/lead`, que valida (CPF com dígito
verificador, celular com DDD, e-mail, corretora na lista, honeypot
anti-bot) e repassa para um Web App do Google Apps Script que grava na
planilha. **Configuração em [docs/google-sheets.md](docs/google-sheets.md)**
(5 minutos). Sem configurar, o dev local roda com `LEAD_DRY_RUN=1`
(aceita o formulário sem gravar).

Após o envio o lead cai em `/obrigado`, com botão pro WhatsApp da equipe
(+55 62 99994-4855) e link de agenda.

## Deploy (Vercel)

1. Importe o repositório na Vercel.
2. Em **Settings → Environment Variables**, defina `LEAD_WEBHOOK_URL`
   com a URL do Apps Script (docs acima).

## Se o `next dev` travar mudo neste Mac

O iCloud "evictou" arquivos do node_modules. Receita:

```bash
pkill -f "Documents/Lucroem5dias/node_modules"
rm -rf node_modules.nosync .next.nosync
mkdir node_modules.nosync .next.nosync
npm install
```

(Os symlinks `node_modules` e `.next` já apontam pras pastas `.nosync`.)
