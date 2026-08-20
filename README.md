# Mentoria Fabricio Gonçalvez — Landing Pages

Landing pages de captura para as aulas ao vivo com Fabricio Gonçalvez.
Uma base de componentes, várias campanhas — cada aula é um arquivo de
conteúdo, não uma cópia do projeto.

| Campanha | URL | Quando |
|---|---|---|
| Primeiro Lucro em 5 Dias (iniciante) | `/mentoriafabricio/primeirolucro` | 31/08 · 19h30 |
| 2 Milhões até o Final de 2026 (intermediário e avançado) | `/mentoriafabricio/avancado` | 26/08 · 20h |

A raiz `/` redireciona para a campanha padrão definida em
`src/content/index.ts`.

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

## Criar uma campanha nova

Nenhum componente muda. São três passos:

1. Crie `src/content/<slug>.ts` exportando um `Campanha` — o formato está
   em `src/content/tipos.ts`, com todos os campos documentados. Copiar um
   arquivo existente e trocar o conteúdo é o caminho mais rápido.
2. Registre a campanha no array `CAMPANHAS` de `src/content/index.ts`.
3. Adicione a `origem` da campanha ao mapa `ABAS` de `docs/apps-script.gs`
   e **reimplante o script** — sem isso os leads dela caem na aba
   genérica `Leads`.

A página é gerada estaticamente em `/mentoriafabricio/<slug>` pelo
`generateStaticParams`, com `title`, `description` e Open Graph próprios.

O campo `origem` é o que separa os leads de cada aula na planilha. Ele
precisa ser único e nunca deve ser reaproveitado entre campanhas.

## Captura de leads → Google Sheets

O formulário envia para `POST /api/lead`, que valida (CPF com dígito
verificador, celular com DDD, e-mail, corretora na lista, origem entre as
campanhas registradas, honeypot anti-bot) e repassa para um Web App do
Google Apps Script, que grava **na aba da campanha** de onde o lead veio.
**Configuração em [docs/google-sheets.md](docs/google-sheets.md)**
(5 minutos). Sem configurar, o dev local roda com `LEAD_DRY_RUN=1`
(aceita o formulário sem gravar).

Após o envio o lead cai em `/obrigado?c=<slug>`, que usa a query para
montar a mensagem do WhatsApp da equipe (+55 62 99994-4855) e o link de
agenda com a data certa. Query ausente ou desconhecida cai na campanha
padrão — a confirmação nunca quebra.

## Deploy (Vercel)

1. Importe o repositório na Vercel, com **Framework Preset: Next.js**.
2. Em **Settings → Environment Variables**, defina `LEAD_WEBHOOK_URL` e
   `LEAD_WEBHOOK_TOKEN` (docs acima).

## Se o `next dev` travar mudo neste Mac

O iCloud "evictou" arquivos do node_modules. Receita:

```bash
pkill -f "Documents/Lucroem5dias/node_modules"
rm -rf node_modules.nosync .next.nosync
mkdir node_modules.nosync .next.nosync
npm install
```

(Os symlinks `node_modules` e `.next` já apontam pras pastas `.nosync`.)
