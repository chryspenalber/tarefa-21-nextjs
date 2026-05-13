import { CardDestino } from "@/components/CardDestino";
import { destinos } from "@/data/destinos";
import styles from "@/styles/Destinos.module.css";

export default function DestinosPage() {
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <span>Roteiros selecionados</span>
        <h1>Destinos turísticos</h1>
        <p>
          Escolha um destino para visualizar dicas, destaques e a melhor época
          para viajar.
        </p>
      </div>

      <div className={styles.grid}>
        {destinos.map((destino) => (
          <CardDestino key={destino.id} destino={destino} />
        ))}
      </div>
    </section>
  );
}
