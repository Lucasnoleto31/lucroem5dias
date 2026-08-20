/**
 * Recebe os leads da landing page "Primeiro Lucro em 5 Dias"
 * e grava cada um como uma linha na planilha.
 *
 * Cole este arquivo inteiro em Extensoes > Apps Script.
 */

// Precisa ser IGUAL ao LEAD_WEBHOOK_TOKEN do seu .env.local (e da Vercel).
// Nunca comite o token de verdade neste arquivo: o repositorio e publico.
var TOKEN = "COLE_AQUI_O_LEAD_WEBHOOK_TOKEN_DO_ENV_LOCAL";

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
    var sheet = ss.getSheetByName("Leads");
    if (!sheet) {
      sheet = ss.insertSheet("Leads");
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

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function json(obj) {
  return ContentService.createTextOutput(
    JSON.stringify(obj)
  ).setMimeType(ContentService.MimeType.JSON);
}
