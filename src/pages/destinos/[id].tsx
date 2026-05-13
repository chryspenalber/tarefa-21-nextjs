import Image from "next/image";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { buscarDestinoPorId, destinos, type Destino } from "@/data/destinos";
import styles from "@/styles/DestinoDetalhe.module.css";

type DestinoDetalheProps = {
  destino: Destino;
};

export const getStaticPaths: GetStaticPaths = () => ({
  paths: destinos.map((destino) => ({ params: { id: destino.id } })),
  fallback: false
});

export const getStaticProps: GetStaticProps<DestinoDetalheProps> = ({ params }) => {
  const id = String(params?.id);
  const destino = buscarDestinoPorId(id);

  if (!destino) {
    return { notFound: true };
  }

  return {
    props: {
      destino
    }
  };
};

export default function DestinoDetalhePage({
  destino
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <article className={styles.detail}>
      <Link href="/destinos" className={styles.backLink}>
        ← Voltar para destinos
      </Link>

      <div className={styles.content}>
        <div>
          <span className={styles.eyebrow}>Destino em destaque</span>
          <h1>{destino.nome}</h1>
          <p className={styles.description}>{destino.descricao}</p>
        </div>

        <Image
          src={destino.imagem}
          alt={`Paisagem de ${destino.nome}`}
          width={900}
          height={560}
          className={styles.image}
          priority
        />
      </div>

      <section className={styles.infoGrid} aria-label="Informações do destino">
        <div>
          <h2>O que fazer</h2>
          <p>{destino.destaque}</p>
        </div>
        <div>
          <h2>Melhor época</h2>
          <p>{destino.melhorEpoca}</p>
        </div>
      </section>
    </article>
  );
}
