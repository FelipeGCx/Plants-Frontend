import Link from "next/link";
import styles from "./style.module.scss";
import { useState } from "react";
import { ProductTicket } from "../../../../types";

export default function TheProductList(props: { products: ProductTicket[] }) {
  const [total, setTotal] = useState(0);
  return (
    <div className={styles.list}>
      <h1>Resumen de tu compra</h1>
      <table>
        <thead>
          <th>Descripción</th>
          <th>Cantidad</th>
          <th>Subtotal</th>
        </thead>
        <tbody>
          {props.products.map((product:ProductTicket, index: number) => {
            return (
              <tr key={index}>
                <td>{ product.name}</td>
                <td>{ product.quantity}</td>
                <td>{ product.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <ul>
        
      </ul> */}
      <div className={styles.info}>
        <h2>
          <span>Total Compra:</span>
          <span>{total}</span>
        </h2>
        <span>* El costo de envio no esta incluido en el total</span>
        <Link href={"d"} className="button">
          continuar
        </Link>
      </div>
    </div>
  );
}
