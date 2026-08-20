"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Reveal } from "./motion/Reveal";
import { TextField, SelectField } from "./ui/Field";
import { CheckIcon, WhatsAppIcon } from "./ui/Icons";
import {
  maskCPF,
  maskPhone,
  isValidCPF,
  isValidPhone,
  isValidEmail,
} from "@/lib/format";

export const CORRETORAS = ["Genial", "XP", "BTG", "Warren", "Toro", "Outro"];

const REASSURANCE = [
  "Vaga 100% gratuita, sem pegadinha no final",
  "A equipe da Zeve te chama no WhatsApp pra confirmar tudo",
  "Seus dados são usados só pra falar com você sobre esta aula",
];

type FormState = {
  nome: string;
  telefone: string;
  email: string;
  cpf: string;
  corretora: string;
};

const EMPTY: FormState = {
  nome: "",
  telefone: "",
  email: "",
  cpf: "",
  corretora: "",
};

function validate(values: FormState): Partial<FormState> {
  const errors: Partial<FormState> = {};
  if (values.nome.trim().split(/\s+/).length < 2)
    errors.nome = "Escreva seu nome completo.";
  if (!isValidPhone(values.telefone))
    errors.telefone = "Use um celular válido com DDD, ex.: (62) 99999-9999.";
  if (!isValidEmail(values.email)) errors.email = "Confira o e-mail digitado.";
  if (!isValidCPF(values.cpf)) errors.cpf = "Esse CPF não é válido.";
  if (!values.corretora) errors.corretora = "Escolha uma opção.";
  return errors;
}

export function LeadForm() {
  const router = useRouter();
  const [values, setValues] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  /** Leva o foco ao primeiro campo com erro para que o leitor de tela o anuncie */
  function focarPrimeiroErro(campos: Partial<FormState>) {
    const ordem: (keyof FormState)[] = [
      "nome",
      "telefone",
      "email",
      "cpf",
      "corretora",
    ];
    const alvo = ordem.find((campo) => campos[campo]);
    if (!alvo) return;
    formRef.current
      ?.querySelector<HTMLElement>(`#${alvo}`)
      ?.focus();
  }

  function set(field: keyof FormState, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    if (Object.values(nextErrors).some(Boolean)) {
      setErrors(nextErrors);
      focarPrimeiroErro(nextErrors);
      return;
    }
    setStatus("sending");
    try {
      const honeypot = (
        event.currentTarget.elements.namedItem("site") as HTMLInputElement
      )?.value;
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, site: honeypot }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      router.push("/obrigado");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="inscricao"
      className="border-t border-edge bg-surface-raised/40 px-4 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto grid max-w-[1200px] items-start gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="overline-label text-primary-300">Inscrição</p>
          <h2 className="mt-4 max-w-[16ch] text-h1 text-text-strong md:text-display-lg">
            Garanta sua vaga pro dia 31/08
          </h2>
          <p className="mt-4 max-w-[48ch] text-body-lg text-text-muted">
            Preencha os dados e a equipe da Zeve te chama no WhatsApp pra
            deixar tudo pronto antes da aula.
          </p>
          <ul className="mt-10 flex flex-col gap-4">
            {REASSURANCE.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-body-sm text-text-default"
              >
                <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-primary-400" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={80} className="lg:col-span-7">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className="rounded-lg border border-edge bg-surface-raised p-6 md:p-8"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <TextField
                  label="Nome completo"
                  name="nome"
                  autoComplete="name"
                  placeholder="Seu nome"
                  value={values.nome}
                  onChange={(e) => set("nome", e.target.value)}
                  error={errors.nome}
                />
              </div>
              <TextField
                label="WhatsApp"
                name="telefone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                placeholder="(62) 99999-9999"
                value={values.telefone}
                onChange={(e) => set("telefone", maskPhone(e.target.value))}
                error={errors.telefone}
              />
              <TextField
                label="E-mail"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="voce@email.com"
                value={values.email}
                onChange={(e) => set("email", e.target.value)}
                error={errors.email}
              />
              <TextField
                label="CPF"
                name="cpf"
                inputMode="numeric"
                placeholder="000.000.000-00"
                value={values.cpf}
                onChange={(e) => set("cpf", maskCPF(e.target.value))}
                error={errors.cpf}
              />
              <SelectField
                label="Em qual corretora você opera?"
                name="corretora"
                options={CORRETORAS}
                value={values.corretora}
                onChange={(e) => set("corretora", e.target.value)}
                error={errors.corretora}
              />
            </div>

            {/* honeypot anti-spam: humano não vê nem preenche */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label htmlFor="site">Não preencha este campo</label>
              <input id="site" name="site" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-8 inline-flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-cta px-8 text-body font-semibold text-neutral-950 transition-[background-color,transform] duration-150 ease-out hover:-translate-y-px hover:bg-cta-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0"
            >
              {status === "sending" ? (
                "Enviando..."
              ) : (
                <>
                  <WhatsAppIcon className="h-5 w-5" />
                  Garantir minha vaga
                </>
              )}
            </button>

            {status === "error" && (
              <p role="alert" className="mt-4 text-body-sm text-danger">
                Não conseguimos enviar agora. Tenta de novo em instantes, ou
                chama a gente direto no WhatsApp: +55 62 99994-4855.
              </p>
            )}

            <p className="mt-4 text-caption text-text-muted">
              Ao enviar, você autoriza a equipe da Zeve a entrar em contato
              pelo WhatsApp sobre esta aula. Seus dados ficam registrados em
              planilha do Google e não são vendidos nem repassados para fins
              de marketing de terceiros (LGPD).
            </p>
            <p className="mt-4 border-t border-edge pt-4 text-caption text-text-muted">
              Esta é uma aula educacional. Não há promessa, garantia ou
              projeção de lucro: operar no mercado financeiro envolve risco de
              perda, inclusive do valor investido.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
