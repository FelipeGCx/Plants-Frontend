import styles from "./style.module.scss";

export default function TheLoader() {
  const range = Array.from({ length: 30 }, (_, index) => index + 1);
  const rangeFilter = Array.from({ length: 4 }, (_, index) => index + 1);
  return (
    <main className={styles.main}>
      <section className={styles.filter}>
        <ul className={styles.items}>
          {range.map((item: any) => {
            return (
              <li key={item} className={styles.card}>
                <span className={styles.title}></span>
                {rangeFilter.map((num) => {
                  return <span key={num} className={styles.tag}></span>;
                })}
              </li>
            );
          })}
        </ul>
      </section>
      <section className={styles.view}>
        <div className={styles.navsref}>
          <div className={styles.pagination}></div>
        </div>
        <ul className={styles.items}>
          {range.map((item: any) => {
            return <li key={item} className={styles.card}></li>;
          })}
        </ul>
      </section>
    </main>
  );
}
