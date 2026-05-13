import Image from "next/image";
import Link from "next/link";
import type { Destino } from "@/data/destinos";
import styles from "./CardDestino.module.css";

type CardDestinoProps = {
  destino: Destino;
};

export function CardDestino({ destino }: CardDestinoProps) {
  return (
    <article className={styles.card}>
      <Image
        src={destino.imagem}
        alt={`Paisagem de ${destino.nome}`}
        width={640}
        height={420}
        className={styles.image}
      />
      <div className={styles.content}>
        <h2>{destino.nome}</h2>
        <p>{destino.descricao}</p>
        <Link href={`/destinos/${destino.id}`} className={styles.link}>
          Ver detalhes
        </Link>
      </div>
    </article>
  );
}
