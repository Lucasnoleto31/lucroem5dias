---
name: design-system
description: Sistema de design do Lucro em 5 dias — escala tipográfica, grid de 8px, tokens de cor e padrões de componente. Use SEMPRE que for criar ou alterar qualquer UI, componente React, página, estilo ou animação neste projeto.
---

# Sistema de Design — Lucro em 5 dias

Stack: Next.js 16 (App Router, `src/`), React 19, Tailwind v4 (config em CSS via `@theme`), framer-motion 13, TypeScript.

Estas regras não são sugestões. Toda UI deste projeto sai delas. Se uma regra não cobre o caso, escolha a opção mais próxima da regra existente em vez de inventar um valor novo.

---

## 0. Evite a estética genérica de IA

A maior parte da UI gerada por IA se parece: mesmos gradientes, mesmas sombras, tudo centralizado, tudo com o mesmo raio de borda. Isso lê como template e destrói credibilidade — especialmente numa página que precisa vender.

**Proibido, sem exceção:**

- Gradiente roxo→azul ou roxo→rosa (`from-purple-500 to-pink-500`, `from-indigo-600 to-purple-600` e variações). Gradiente só é permitido dentro de uma mesma família de matiz, com variação sutil de luminosidade.
- Fundo de "malha de gradiente" com blobs desfocados flutuando atrás do conteúdo.
- Glassmorphism (`backdrop-blur` + fundo branco translúcido + borda branca) como estilo padrão de card. Só em overlays reais sobre conteúdo, como header fixo.
- Tudo centralizado. Texto corrido centralizado acima de 3 linhas é ilegível. Alinhe à esquerda por padrão; centralize só hero e cabeçalho de seção.
- Emoji como ícone de bullet ou de feature (🚀 ✨ 💡 🎯 🔥). Use ícones SVG de uma única biblioteca, com traço consistente.
- `rounded-2xl` + `shadow-xl` + `border` empilhados no mesmo card. Escolha *um* recurso pra separar a superfície do fundo.
- Três cards idênticos lado a lado como resposta automática pra qualquer conteúdo. Se as três coisas têm pesos diferentes, o layout tem que mostrar isso.
- Peso de fonte 100–300 em texto de marketing. Lê como fraco e some em telas comuns.
- Texto placeholder tipo "Lorem ipsum", "Transforme seu negócio", "Soluções inovadoras". Se não sabe a copy real, escreva copy específica do produto ou deixe `TODO: copy`.
- Ícone dentro de círculo pastel colorido acima de cada feature.

**O que fazer no lugar:** assimetria proposital, uma decisão visual forte por seção (uma cor, um número grande, uma foto real, uma tabela densa), hierarquia por tamanho e peso antes de por cor, e espaço em branco desigual — mais respiro acima de um título do que abaixo.

---

## 1. Escala tipográfica

Root = 16px. Toda linha de altura cai em múltiplo de 4px. Nunca use tamanho fora desta tabela.

| Token | Tamanho | Line-height | Tracking | Peso | Uso |
|---|---|---|---|---|---|
| `display-2xl` | 72px / 4.5rem | 1.05 | -0.03em | 700 | Headline de hero, só uma por página |
| `display-xl` | 56px / 3.5rem | 1.08 | -0.025em | 700 | Hero em telas médias, números de destaque |
| `display-lg` | 44px / 2.75rem | 1.10 | -0.02em | 700 | Abertura de seção principal |
| `h1` | 36px / 2.25rem | 1.15 | -0.02em | 600 | Título de página interna |
| `h2` | 28px / 1.75rem | 1.20 | -0.015em | 600 | Título de seção |
| `h3` | 22px / 1.375rem | 1.30 | -0.01em | 600 | Título de card, subseção |
| `body-lg` | 18px / 1.125rem | 1.60 | 0 | 400 | Parágrafo de abertura, subheadline |
| `body` | 16px / 1rem | 1.60 | 0 | 400 | Texto corrido padrão |
| `body-sm` | 14px / 0.875rem | 1.50 | 0 | 400 | Texto de apoio, legenda de card |
| `caption` | 13px / 0.8125rem | 1.40 | 0.01em | 400 | Nota de rodapé, disclaimer legal |
| `overline` | 12px / 0.75rem | 1.20 | 0.08em | 600 | Rótulo de seção, `text-transform: uppercase` |

**Regras:**

- No máximo 2 famílias tipográficas no projeto inteiro. Uma é melhor.
- Pesos permitidos: 400, 500, 600, 700. Nada abaixo de 400.
- Medida de linha do texto corrido: 60–75 caracteres (`max-w-[68ch]`). Acima disso o olho perde a linha.
- Tracking negativo é obrigatório em tudo acima de 32px — sem isso, título grande parece esparramado.
- Escala responsiva: no mobile desça exatamente um degrau da tabela (`display-2xl` → `display-xl`). Não interpole com `clamp()` arbitrário.
- Números em tabelas, preços e contadores: `font-variant-numeric: tabular-nums`.

---

## 2. Espaçamento — grid base de 8px

Todo espaço vertical e horizontal é múltiplo de **8px**. A única exceção é **4px**, permitido apenas para distância entre ícone e rótulo, espessura de borda e ajuste óptico dentro de um componente.

Escala canônica (px): `4 · 8 · 16 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128 · 160`

Em Tailwind v4 (1 unidade = 4px), isso são as classes: `1 · 2 · 4 · 6 · 8 · 10 · 12 · 16 · 20 · 24 · 32 · 40`.

**Aplicação por relação semântica** — a distância comunica agrupamento:

| Relação | Espaço | Exemplo |
|---|---|---|
| Dentro de um componente | 8px | ícone → texto do botão |
| Entre elementos irmãos próximos | 16px | título do card → descrição |
| Entre grupos dentro de um bloco | 24–32px | descrição → botão do card |
| Entre blocos de uma seção | 48–64px | cabeçalho da seção → grid de cards |
| Entre seções da página | 96px mobile / 128px desktop | fim de uma seção → início da próxima |

**Regras:**

- Proibido valor arbitrário: nunca `mt-[13px]`, `p-[22px]`, `gap-[30px]`. Se precisou, você errou o degrau da escala.
- Padding interno de container: 16px mobile, 24px tablet, 32px desktop. Largura máxima de conteúdo: 1200px.
- Espaço acima de um título é sempre maior que o espaço abaixo dele — o título pertence ao conteúdo que vem depois.
- Use `gap` em flex/grid. Não empilhe `margin-bottom` em filhos pra simular espaçamento.
- Altura de componentes interativos também no grid: 40px (compacto), 48px (padrão), 56px (CTA principal).

---

## 3. Tokens de cor

Três famílias: **primária**, **neutra**, **destaque**. Nada fora delas. Vermelho/verde de estado são funcionais e não contam como cor de marca.

A neutra é levemente quente — cinza puro (`#808080`) é a assinatura visual de quem não escolheu nada.

```css
/* src/app/globals.css */
@theme {
  /* — Neutra (estrutura, texto, superfícies) — 60% da tela — */
  --color-neutral-50:  #faf9f7;
  --color-neutral-100: #f3f1ed;
  --color-neutral-200: #e5e2dc;
  --color-neutral-300: #cbc7bf;
  --color-neutral-400: #9c968c;
  --color-neutral-500: #6f6961;
  --color-neutral-600: #524d47;
  --color-neutral-700: #3b3733;
  --color-neutral-800: #262320;
  --color-neutral-900: #171513;
  --color-neutral-950: #0d0c0b;

  /* — Primária (marca, elementos de suporte) — 30% da tela — */
  --color-primary-50:  #eef6f1;
  --color-primary-100: #d5e9dd;
  --color-primary-200: #a9d2bc;
  --color-primary-300: #74b494;
  --color-primary-400: #47956f;
  --color-primary-500: #2b7855;
  --color-primary-600: #1f6144;
  --color-primary-700: #194d37;
  --color-primary-800: #143c2c;
  --color-primary-900: #0f2c21;

  /* — Destaque (só ação e ênfase) — no máximo 10% da tela — */
  --color-accent-300: #f4c46a;
  --color-accent-400: #eba93a;
  --color-accent-500: #d98c14;
  --color-accent-600: #b56e0c;
  --color-accent-700: #8c5309;

  /* — Estado (funcional, nunca decorativo) — */
  --color-success: #2b7855;
  --color-warning: #b56e0c;
  --color-danger:  #b4342a;
}
```

**Tokens semânticos** — no código use estes, nunca o número cru da rampa:

| Token | Claro | Escuro |
|---|---|---|
| `surface` | `neutral-50` | `neutral-950` |
| `surface-raised` | `#ffffff` | `neutral-900` |
| `border` | `neutral-200` | `neutral-800` |
| `text-strong` | `neutral-900` | `neutral-50` |
| `text-default` | `neutral-700` | `neutral-200` |
| `text-muted` | `neutral-500` | `neutral-400` |
| `cta` | `accent-500` | `accent-400` |
| `cta-hover` | `accent-600` | `accent-300` |

**Regras:**

- Proporção 60/30/10: 60% neutra, 30% primária, 10% destaque. Se a página parece "colorida demais", o destaque passou de 10%.
- **Um único CTA em destaque por dobra visível.** Dois botões laranja na mesma tela = nenhum botão laranja.
- Contraste mínimo AA: 4.5:1 em texto corrido, 3:1 em texto ≥24px e em bordas de controle.
- Cor nunca é o único portador de informação. Estado de erro precisa de ícone ou texto, não só ficar vermelho.
- Sombra: no máximo dois níveis, sempre tingidas com a matiz da neutra, nunca preto puro.
  - `shadow-sm`: `0 1px 2px rgb(23 21 19 / 0.06)`
  - `shadow-md`: `0 4px 16px -4px rgb(23 21 19 / 0.10)`
- Raio de borda: escolha **um** vocabulário e mantenha. Padrão: `4px` (input, badge), `8px` (botão, card), `16px` (modal, seção destacada). Nada de `rounded-full` em card.

---

## 4. Padrões de componente

Todo componente vive em `src/components/`, é tipado, e recebe `className?: string` mesclado por último pra permitir override pontual.

### Botão

Três variantes, sem uma quarta:

| Variante | Fundo | Texto | Borda | Quando |
|---|---|---|---|---|
| `primary` | `cta` | `neutral-950` | nenhuma | A ação principal. Uma por tela. |
| `secondary` | transparente | `text-strong` | 1px `border` | Ação alternativa ao lado da principal |
| `ghost` | transparente | `text-default` | nenhuma | Ação terciária, links de navegação |

- Alturas: 40 / 48 / 56px. Padding horizontal = 2× o espaço vertical restante.
- `transition: 150ms ease-out` em `background-color` e `transform`. Hover em botão sólido: escurece um degrau + `translateY(-1px)`. Nunca escala.
- `:focus-visible` com anel de 2px em `primary-500`, offset 2px. Nunca remova o outline sem substituir.
- Estado `disabled`: opacidade 0.45 e `cursor: not-allowed`. Não mude a cor.

### Card

- Fundo `surface-raised`, borda 1px `border`, raio 8px, padding 24px (32px se for card de destaque).
- **Sem sombra por padrão.** Sombra só em elemento que realmente flutua: dropdown, modal, toast.
- Hover só se o card inteiro for clicável: borda vai pra `neutral-300`, 150ms. Sem levantar, sem escalar.

### Seção

```tsx
<section className="px-4 py-24 md:px-8 md:py-32">
  <div className="mx-auto max-w-[1200px]">
    <p className="overline text-primary-600">Rótulo</p>   {/* 8px abaixo */}
    <h2 className="mt-2 max-w-[20ch]">Título da seção</h2> {/* 16px abaixo */}
    <p className="mt-4 max-w-[68ch] text-muted">Subtítulo</p>
    <div className="mt-12">{/* conteúdo */}</div>
  </div>
</section>
```

### Campo de formulário

- Rótulo sempre visível acima do campo, `body-sm` peso 500, 8px de distância. Placeholder não substitui rótulo.
- Altura 48px, padding horizontal 16px, borda 1px `border`, raio 4px.
- Erro: borda `danger` + mensagem `caption` em `danger` 8px abaixo, com `aria-describedby`.

### Movimento (framer-motion)

- Durações: 150ms (micro-interação), 250ms (entrada de elemento), 400ms (transição de layout). Nada acima de 400ms.
- Easing padrão `[0.22, 1, 0.36, 1]`. Spring só em arraste ou toggle — nunca em texto.
- Entrada de conteúdo: `opacity: 0 → 1` + `y: 12 → 0`. Só isso. Sem escala, sem rotação, sem blur.
- Stagger entre irmãos: 60–80ms. Acima de 5 itens, não faça stagger — vira espera.
- `whileInView` com `viewport={{ once: true, margin: "-80px" }}`. Elemento nunca reanima ao rolar de volta.
- Respeite `prefers-reduced-motion`: nesse caso entregue o estado final direto, sem transição.
- Animação nunca segura conteúdo crítico. Headline e CTA do hero renderizam visíveis; a animação é enfeite por cima.

---

## Checklist antes de dar qualquer UI por pronta

1. Todo espaço é múltiplo de 8 (ou 4 nas exceções listadas)?
2. Todo tamanho de fonte está na tabela da seção 1?
3. A cor de destaque ocupa menos de 10% da tela e há só um CTA principal na dobra?
4. Passa contraste AA?
5. Funciona por teclado, com foco visível?
6. Está legível em 375px de largura?
7. Nada da lista da seção 0 aparece na tela?
