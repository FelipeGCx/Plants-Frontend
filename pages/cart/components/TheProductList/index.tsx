import Link from "next/link";
import styles from "./style.module.scss";

type Product = {
  name: string;
  total: number;
};
export default function TheProductList(props: {
  products: Array<Product>;
  total: number;
}) {
  return (
    <div className={styles.list}>
      <h1>Resumen de tu compra</h1>
      <ul>
        {props.products.map((p) => {
          return (
            <li>
              <span>{p.name}</span>
              <span>{p.total}</span>
            </li>
          );
        })}
      </ul>
      <div className={styles.info}>
        <h2>
          <span>Total Compra:</span>
          <span>{props.total}</span>
        </h2>
        <span>* El costo de envio no esta incluido en el total</span>
        <Link href={"d"} className="button">
          continuar
        </Link>
      </div>
    </div>
  );
}
