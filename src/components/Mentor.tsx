import Image from "next/image";
import type { Campanha } from "@/content/tipos";
import { Reveal } from "./motion/Reveal";
import { CheckIcon } from "./ui/Icons";

export function Mentor({ campanha }: { campanha: Campanha }) {
  const { mentor } = campanha;

  return (
    <section id="mentor" className="px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-[1200px] items-start gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="rounded-lg border border-edge bg-surface-raised p-8">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-neutral-800">
              <Image
                src="/fabricio.jpg"
                alt="Fabricio Gonçalvez"
                fill
                sizes="(min-width: 1024px) 448px, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-edge pt-6">
              {mentor.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="tabular font-display text-h2 text-primary-300">
                    {stat.valor}
                    <span className="text-h3">{stat.sufixo}</span>
                  </p>
                  <p className="mt-1 text-caption text-text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="overline-label text-primary-300">Quem dá a aula</p>
            <h2 className="mt-4 text-h1 text-text-strong md:text-display-lg">
              Fabricio Gonçalvez
            </h2>
            <p className="mt-4 max-w-[58ch] text-body-lg text-text-muted">
              {mentor.subtitulo}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <ul className="mt-10 flex flex-col gap-4">
              {mentor.fatos.map((fato) => (
                <li key={fato} className="flex gap-2">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-primary-400" />
                  <span className="max-w-[58ch] text-body text-text-default">
                    {fato}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-12 max-w-[52ch] border-l-2 border-primary-500 pl-6 text-body text-text-muted">
              {mentor.citacao}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
