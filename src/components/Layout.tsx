import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.pageShell}>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          Portal Viagens
        </Link>

        <nav className={styles.nav} aria-label="Navegação principal">
          <Link href="/">Início</Link>
          <Link href="/destinos">Destinos</Link>
        </nav>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>Planeje sua próxima experiência com inspiração, detalhes e boas histórias.</p>
      </footer>
    </div>
  );
}
