"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Pokemon</a>
        </h1>

        <p className={styles.description}>
          <button onClick={() => router.push("/pokemon")}>Get Started</button>
        </p>
      </main>
    </div>
  );
}
