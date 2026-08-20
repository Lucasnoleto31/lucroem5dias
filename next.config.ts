import type { NextConfig } from "next";
import { CAMPANHAS, CAMPANHA_PADRAO } from "./src/content";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // A raiz já foi divulgada antes das campanhas existirem: ela precisa
        // continuar levando a algum lugar. Temporário de propósito — a
        // campanha padrão muda, e um 308 ficaria cacheado no navegador.
        source: "/",
        destination: `/${CAMPANHA_PADRAO.slug}`,
        permanent: false,
      },
      // As campanhas viveram um tempo sob /mentoriafabricio/, antes do
      // domínio próprio tornar o prefixo redundante. Qualquer link daquele
      // formato que tenha saído continua funcionando.
      ...CAMPANHAS.map((campanha) => ({
        source: `/mentoriafabricio/${campanha.slug}`,
        destination: `/${campanha.slug}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
