/**
 * Recebe os leads das landing pages da Mentoria Fabricio Goncalvez
 * e grava cada um como uma linha na planilha.
 *
 * Cada campanha tem a sua propria aba: o campo "origem" que vem da LP
 * decide onde a linha cai. Aba nova e criada sozinha na primeira gravacao.
 *
 * Cole este arquivo inteiro em Extensoes > Apps Script.
 */

// Precisa ser IGUAL ao LEAD_WEBHOOK_TOKEN do seu .env.local (e da Vercel).
// Nunca comite o token de verdade neste arquivo: o repositorio e publico.
var TOKEN = "COLE_AQUI_O_LEAD_WEBHOOK_TOKEN_DO_ENV_LOCAL";

/**
 * origem (vinda da landing page) -> nome da aba na planilha.
 * Ao criar uma campanha nova em src/content/, adicione a origem dela aqui
 * e reimplante o script. Origem sem mapeamento cai em ABA_PADRAO.
 */
var ABAS = {
  "lp-primeiro-lucro-5-dias": "Primeiro Lucro",
  "lp-avancado-2-milhoes": "Avançado",
};

var ABA_PADRAO = "Leads";

var CABECALHO = [
  "Data/Hora",
  "Nome",
  "WhatsApp",
  "E-mail",
  "CPF",
  "Corretora",
  "Origem",
];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    if (data.token !== TOKEN) {
      return json({ ok: false, error: "nao autorizado" });
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = abaDaOrigem(ss, data.origem);

    // Data/hora em horario de Brasilia, ja formatada
    var quando = Utilities.formatDate(
      new Date(data.timestamp),
      "America/Sao_Paulo",
      "dd/MM/yyyy HH:mm"
    );

    sheet.appendRow([
      quando,
      data.nome,
      data.telefone,
      data.email,
      "'" + data.cpf, // apostrofo evita o Sheets tratar CPF como numero
      data.corretora,
      data.origem,
    ]);

    return json({ ok: true, aba: sheet.getName() });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

/** Devolve a aba da campanha, criando e formatando se ainda nao existir. */
function abaDaOrigem(ss, origem) {
  var nome = ABAS[origem] || ABA_PADRAO;
  var sheet = ss.getSheetByName(nome);
  if (!sheet) {
    sheet = ss.insertSheet(nome);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(CABECALHO);
    var header = sheet.getRange(1, 1, 1, CABECALHO.length);
    header.setFontWeight("bold");
    header.setBackground("#1f6144");
    header.setFontColor("#ffffff");
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 160);
    sheet.setColumnWidth(2, 220);
    sheet.setColumnWidth(4, 240);
  }

  return sheet;
}

function json(obj) {
  return ContentService.createTextOutput(
    JSON.stringify(obj)
  ).setMimeType(ContentService.MimeType.JSON);
}
