import styles from "./style.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.filter}></section>
      <section className={styles.view}></section>
    </main>
  );
}
