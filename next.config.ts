import type { NextConfig } from "next";
import { CAMPANHA_PADRAO } from "./src/content";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // A raiz já foi divulgada antes das campanhas existirem: ela precisa
        // continuar levando a algum lugar. Temporário de propósito — a
        // campanha padrão muda, e um 308 ficaria cacheado no navegador.
        source: "/",
        destination: `/mentoriafabricio/${CAMPANHA_PADRAO.slug}`,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
