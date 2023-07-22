import TheFormData from "../../../components/commonCart/commonCheckout/componets/TheFormData";
import styles from "./style.module.scss";
export default function TheCheckout() {
  return (
    <main className={styles.main}>
      <h1>Datos de Facturación</h1>
      <TheFormData />
    </main>
  );
}
