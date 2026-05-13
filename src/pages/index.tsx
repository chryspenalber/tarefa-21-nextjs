import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <span className={styles.eyebrow}>Seu guia de inspiração</span>
        <h1>Descubra destinos incríveis para a sua próxima viagem.</h1>
        <p>
          O Portal Viagens reúne sugestões de lugares especiais, com informações
          rápidas para ajudar você a escolher uma experiência inesquecível.
        </p>
        <Link href="/destinos" className={styles.cta}>
          Conhecer destinos
        </Link>
      </div>
      <div className={styles.heroCard} aria-label="Resumo do portal">
        <strong>4+</strong>
        <span>destinos selecionados</span>
        <p>Praias, cidades históricas, cultura, natureza e gastronomia.</p>
      </div>
    </section>
  );
}
