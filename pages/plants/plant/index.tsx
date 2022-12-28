import styles from "./style.module.scss";
import Image from "next/image";
import ThePotSelector from "../../../components/ThePotSelector";
import TheCrystalSelector from "../../../components/TheCrystalSelector";

export default function Plant() {
  return (
    <main className={styles.main}>
      <section className={styles.filter}>
        <ThePotSelector/>
      </section>
      <section className={styles.view}>
      </section>
      <section className={styles.view}>
        <TheCrystalSelector/>
      </section>
    </main>
  );
}
