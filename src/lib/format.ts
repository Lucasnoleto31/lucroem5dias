/** Máscara progressiva de CPF: 000.000.000-00 */
export function maskCPF(value: string): string {
  const d = value.replace(/\D/g, "").slice(0, 11);
  return d
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d{1,2})$/, ".$1-$2");
}

/** Remove o código do país quando o número vem colado do WhatsApp/contatos */
function semDDI(digits: string): string {
  return digits.length > 11 && digits.startsWith("55")
    ? digits.slice(2)
    : digits;
}

/** Máscara progressiva de celular: (62) 99999-9999 */
export function maskPhone(value: string): string {
  const d = semDDI(value.replace(/\D/g, "")).slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

/** Validação real de CPF (dígitos verificadores) */
export function isValidCPF(value: string): boolean {
  const d = value.replace(/\D/g, "");
  if (d.length !== 11 || /^(\d)\1{10}$/.test(d)) return false;
  for (const pos of [9, 10]) {
    let sum = 0;
    for (let i = 0; i < pos; i++) sum += Number(d[i]) * (pos + 1 - i);
    const digit = ((sum * 10) % 11) % 10;
    if (digit !== Number(d[pos])) return false;
  }
  return true;
}

/** Celular BR: DDD válido + 9 dígitos começando em 9 */
export function isValidPhone(value: string): boolean {
  const d = semDDI(value.replace(/\D/g, ""));
  return d.length === 11 && Number(d.slice(0, 2)) >= 11 && d[2] === "9";
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}
