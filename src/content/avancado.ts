import type { Campanha } from "./tipos";

export const avancado: Campanha = {
  slug: "avancado",
  origem: "lp-avancado-2-milhoes",
  nome: "2 Milhões de Lucro até o Final de 2026",

  quando: {
    curto: "26/08 · 20h",
    diaExtenso: "Quarta-feira, 26 de agosto",
    horaExtenso: "20h · 2 horas de duração",
    dataCurta: "26/08",
    // 20h de Brasília (UTC-3) = 23h UTC
    agendaInicio: "20260826T230000Z",
    agendaFim: "20260827T010000Z",
  },

  hero: {
    selo: "Aula ao vivo e gratuita · 26 de agosto · 20h",
    titulo: {
      antes: "Como eu vou de 700 mil a ",
      destaque: "2 milhões",
      depois: " até o final de 2026",
    },
    subtitulo:
      "Uma aula ao vivo de 2 horas com Fabricio Gonçalvez para quem já opera: os números dos 8 primeiros meses do ano abertos na tela, o que muda nos 4 meses finais e por quais critérios. Nível intermediário e avançado.",
    ctaPrimario: "Quero minha vaga gratuita",
    ctaSecundario: "Ver o que você vai aprender →",
    credenciais: [
      "20 anos de mercado",
      "5º no Top Traders InfoMoney 2025",
      "Sócio da Genial Investimentos",
    ],
    card: {
      rotulo: "A aula · intermediário e avançado",
      descricao:
        "Para quem já opera e quer ver a conta por dentro: onde o lucro foi feito, onde quase foi perdido e qual é o plano até dezembro.",
      detalhes: [
        { icone: "calendario", label: "Quarta-feira, 26 de agosto" },
        { icone: "relogio", label: "20h · 2 horas de duração" },
        { icone: "live", label: "100% ao vivo, com espaço pra perguntas" },
        { icone: "ingresso", label: "Gratuita, com vagas por ordem de chegada" },
      ],
      preRequisito:
        "ter conta na Genial Investimentos com a assessoria da Zeve. Ainda não tem? A equipe te ajuda a abrir depois da inscrição.",
    },
  },

  features: {
    rotulo: "A aula de 26/08",
    titulo: "O que você leva das 2 horas ao vivo",
    subtitulo:
      "Aula para quem já opera e já tomou prejuízo: nada de explicar o que é candle. Duas horas de conta aberta, critério e decisão.",
    itens: [
      {
        numero: "01",
        titulo: "De onde vieram os 700 mil",
        descricao:
          "Os 8 primeiros meses de 2026 abertos: em que operações o resultado foi construído, qual foi o maior drawdown do período e o que precisou ser ajustado no meio do caminho.",
      },
      {
        numero: "02",
        titulo: "O plano dos 4 meses finais",
        descricao:
          "O que muda daqui até dezembro para perseguir os 2 milhões: onde aumentar exposição, o que sai da mesa e qual o critério objetivo de cada decisão — inclusive o de não fazer nada.",
      },
      {
        numero: "03",
        titulo: "Risco quando a conta cresce",
        descricao:
          "Dimensionamento, limite diário de perda e as travas que impedem um mês ruim de apagar um ano inteiro. O que separa quem cresce de quem devolve o lucro em três pregões.",
      },
    ],
  },

  mentor: {
    subtitulo:
      "Não é aula de teoria. São os números de quem está com a mão no mercado todo dia, com a meta e o método na mesa — inclusive as partes que não deram certo.",
    fatos: [
      "No mercado desde 2006, com 20 anos operando de verdade, todo dia",
      "R$ 700 mil de lucro nos 8 primeiros meses de 2026",
      "Sócio da Genial Investimentos e CEO e cofundador da gestora Box Asset",
      "5º colocado no prêmio Top Traders InfoMoney 2025",
      "Criador dos indicadores FGZ, distribuídos oficialmente na plataforma Profit, da Nelogica",
    ],
    stats: [
      { valor: "700", sufixo: " mil", label: "de lucro em 8 meses de 2026" },
      { valor: "20", sufixo: " anos", label: "de mercado, desde 2006" },
      { valor: "5º", sufixo: "", label: "no Top Traders InfoMoney 2025" },
    ],
    citacao:
      "Sair de 700 mil e buscar 2 milhões em 4 meses não é alavancar no escuro. É saber exatamente onde aumentar e, principalmente, onde parar.",
  },

  passos: {
    titulo: "Da inscrição à aula em 3 passos",
    itens: [
      {
        numero: "1",
        titulo: "Garanta sua vaga",
        descricao:
          "Preencha o formulário aqui embaixo, leva menos de 2 minutos. A vaga é gratuita e por ordem de chegada.",
      },
      {
        numero: "2",
        titulo: "Fale com a equipe no WhatsApp",
        descricao:
          "A equipe da Zeve te chama pra confirmar sua conta na Genial. Ainda não tem? Eles abrem com você, sem custo, antes da aula.",
      },
      {
        numero: "3",
        titulo: "Entre ao vivo dia 26/08",
        descricao:
          "Quarta-feira, 20h. Duas horas com o Fabricio, os números na tela e o plano até o fim de 2026, decisão por decisão.",
      },
    ],
  },

  form: {
    titulo: "Garanta sua vaga pro dia 26/08",
    subtitulo:
      "Preencha os dados e a equipe da Zeve te chama no WhatsApp pra deixar tudo pronto antes da aula.",
    garantias: [
      "Vaga 100% gratuita, sem pegadinha no final",
      "A equipe da Zeve te chama no WhatsApp pra confirmar tudo",
      "Seus dados são usados só pra falar com você sobre esta aula",
    ],
  },

  finalCta: {
    titulo: "26 de agosto, 20h. Duas horas com a conta aberta na tela.",
    subtitulo: "Gratuito, ao vivo, com vagas por ordem de chegada.",
  },

  obrigado: {
    titulo: "Vaga garantida, My Friend.",
    subtitulo:
      "Falta um passo: chama a equipe da Zeve no WhatsApp pra validar sua conta na Genial e receber o link da aula.",
    mensagemWhatsapp:
      "Olá! Acabei de garantir minha vaga na aula 2 Milhões de Lucro até o Final de 2026 (26/08 às 20h) e quero confirmar minha participação.",
    tituloAgenda: "Aula ao vivo · 2 Milhões de Lucro até o Final de 2026",
    resumo:
      "Quarta-feira, 26 de agosto · 20h (horário de Brasília) · 2 horas ao vivo",
  },

  seo: {
    titulo:
      "2 Milhões até o Final de 2026 · Aula ao vivo com Fabricio Gonçalvez",
    descricao:
      "Aula ao vivo e gratuita de 2 horas, dia 26/08 às 20h, com Fabricio Gonçalvez. Nível intermediário e avançado: os números dos 8 primeiros meses de 2026 e o plano para os 4 meses finais. Conteúdo educacional, sem garantia de resultado.",
    descricaoOg:
      "Aula ao vivo e gratuita de 2 horas para quem já opera, 26/08 às 20h. Conteúdo educacional, sem garantia de resultado.",
  },
};
