/**
 * Uma campanha é uma landing page inteira descrita como dado.
 * Os componentes não conhecem nenhuma aula: recebem o que mostrar.
 * Para criar uma LP nova, basta um arquivo novo aqui e registrá-lo
 * em `index.ts` — nenhum componente muda.
 */

/** Ícones disponíveis no card da aula, resolvidos em Hero.tsx */
export type IconeDetalhe = "calendario" | "relogio" | "live" | "ingresso";

export type Detalhe = {
  icone: IconeDetalhe;
  label: string;
};

/**
 * Título com uma parte destacada em cor. Em dado, e não em JSX, para
 * que o conteúdo continue sendo conteúdo.
 */
export type TituloDestacado = {
  antes: string;
  destaque: string;
  depois: string;
};

export type Campanha = {
  /** Segmento de URL. Vazio = raiz do site. */
  slug: string;
  /**
   * Identificador gravado na coluna "Origem" da planilha. É o que separa
   * os leads de cada aula — precisa ser único e nunca ser reaproveitado.
   */
  origem: string;
  /** Nome da aula, usado no card do hero e no rodapé. */
  nome: string;
  /** Data e hora em formatos prontos para exibição. */
  quando: {
    /** "31/08 · 19h30" — selo curto da navbar */
    curto: string;
    /** "Segunda-feira, 31 de agosto" */
    diaExtenso: string;
    /** "19h30 · 2 horas de duração" */
    horaExtenso: string;
    /** "31/08" — usado em títulos */
    dataCurta: string;
    /** Início e fim em UTC para o link de agenda: "20260831T223000Z" */
    agendaInicio: string;
    agendaFim: string;
  };

  hero: {
    selo: string;
    titulo: TituloDestacado;
    subtitulo: string;
    ctaPrimario: string;
    ctaSecundario: string;
    credenciais: string[];
    card: {
      rotulo: string;
      descricao: string;
      detalhes: Detalhe[];
      /** Bloco de pré-requisito. Omitir quando a aula for aberta. */
      preRequisito?: string;
    };
  };

  features: {
    rotulo: string;
    titulo: string;
    subtitulo: string;
    itens: { numero: string; titulo: string; descricao: string }[];
  };

  mentor: {
    subtitulo: string;
    fatos: string[];
    stats: { valor: string; sufixo: string; label: string }[];
    citacao: string;
  };

  passos: {
    titulo: string;
    itens: { numero: string; titulo: string; descricao: string }[];
  };

  form: {
    titulo: string;
    subtitulo: string;
    garantias: string[];
  };

  finalCta: {
    titulo: string;
    subtitulo: string;
  };

  obrigado: {
    titulo: string;
    subtitulo: string;
    /** Texto pré-preenchido na mensagem do WhatsApp */
    mensagemWhatsapp: string;
    tituloAgenda: string;
    /** "Segunda-feira, 31 de agosto · 19h30 (horário de Brasília) · 2 horas ao vivo" */
    resumo: string;
  };

  seo: {
    titulo: string;
    descricao: string;
    descricaoOg: string;
  };
};
