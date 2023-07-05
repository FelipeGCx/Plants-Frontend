import styles from "./style.module.scss";

export default function Loader() {
  const range = Array.from({ length: 30 }, (_, index) => index + 1);
  return (
    <div className={styles.main}>
      <section className={styles.filter}>
        <div></div>
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
    </div>
  );
}
