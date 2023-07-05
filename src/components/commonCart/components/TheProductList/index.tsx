import Link from "next/link";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { ProductTicket } from "../../../../types";

export default function TheProductList(props: { products: ProductTicket[] }) {
  const [total, setTotal] = useState(0);
  const formatter = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });
  useEffect(() => {
    const calculateTotal = () => {
      let subtotals = props.products.map((product: ProductTicket) => {
        return product.quantity * product.price;
      });
      const subtotalsCalculates = subtotals.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
      setTotal(subtotalsCalculates);
    };
    calculateTotal();
  }, [props.products]);

  return (
    <div className={styles.list}>
      <h1>Resumen de tu compra</h1>
      <div className={styles.container}>
        <table>
          <tr>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
          </tr>
          {props.products.map((product: ProductTicket, index: number) => {
            return (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{formatter.format(product.quantity * product.price)}</td>
              </tr>
            );
          })}
        </table>
      </div>
      {/* <ul>
        
      </ul> */}
      <div className={styles.info}>
        <h2>
          <span>Total Compra:</span>
          <span>{formatter.format(total)}</span>
        </h2>
        <span>* El costo de envio no esta incluido en el total</span>
        <Link href={"d"} className={`button ${styles.button}`}>
          continuar
        </Link>
      </div>
    </div>
  );
}
