# Receber os leads no Google Sheets

O formulário envia para `POST /api/lead`, que valida os dados (CPF com
dígito verificador, celular com DDD, e-mail, corretora da lista, honeypot
anti-bot) e repassa para um Web App do Google Apps Script, que grava a
linha na planilha.

## Passo a passo (5 minutos)

### 1. Crie a planilha

Abra [sheets.new](https://sheets.new) e dê um nome, por exemplo
**Leads · Primeiro Lucro em 5 Dias**. Não precisa criar colunas: o script
monta o cabeçalho sozinho na primeira vez.

### 2. Cole o script

Na planilha, menu **Extensões → Apps Script**. Apague o `function myFunction() {}`
que vem por padrão e cole todo o conteúdo de [`apps-script.gs`](apps-script.gs).

O token secreto já vem preenchido, igual ao do seu `.env.local`.

Salve (ícone de disquete ou Cmd+S).

### 3. Publique como Web App

Botão **Implantar → Nova implantação**.

- No ícone de engrenagem, escolha o tipo **App da Web**
- **Executar como:** Eu (seu e-mail)
- **Quem pode acessar:** **Qualquer pessoa**

Clique em **Implantar**. O Google vai pedir autorização: **Autorizar acesso →
escolha sua conta → Avançado → Acessar (nome do projeto) → Permitir**.

> A tela de "app não verificado" é esperada: o app é seu, feito por você.
> O acesso precisa ser "Qualquer pessoa" porque quem chama é o nosso
> servidor, sem login Google. É exatamente por isso que existe o token
> secreto: sem ele, o script recusa a gravação.

Copie a **URL do app da Web** (termina em `/exec`).

### 4. Cole a URL no projeto

No arquivo `.env.local`, preencha e desligue o dry run:

```
LEAD_WEBHOOK_URL=https://script.google.com/macros/s/SEU_ID_AQUI/exec
LEAD_DRY_RUN=
```

### 5. Teste

```bash
node scripts/verificar-sheets.mjs
```

Se aparecer `✓ Funcionou!`, confira a planilha: deve ter uma linha de
teste que você pode apagar. Depois reinicie o dev server e envie o
formulário de verdade.

## Na Vercel

Em **Settings → Environment Variables**, adicione as duas variáveis com os
mesmos valores do `.env.local`:

| Nome | Valor |
|---|---|
| `LEAD_WEBHOOK_URL` | a URL que termina em `/exec` |
| `LEAD_WEBHOOK_TOKEN` | o mesmo token do `.env.local` e do script |

Não defina `LEAD_DRY_RUN` em produção.

## Se mexer no script depois

Toda alteração no Apps Script só entra no ar com **Implantar → Gerenciar
implantações → editar (lápis) → Versão: Nova versão → Implantar**. Se você
criar uma implantação nova em vez de atualizar, a URL muda e é preciso
atualizar `LEAD_WEBHOOK_URL`.

## Cuidados com os dados

A planilha vai guardar CPF e telefone dos leads. Restrinja o
compartilhamento dela a quem realmente precisa (LGPD) e evite exportar
para lugares públicos.
