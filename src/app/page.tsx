import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Next TS Starter Kit</h1>
        <p>This is a starter kit for Next.js with TypeScript, CSS, and Biome.</p>
      </main>
    </div>
  );
}
