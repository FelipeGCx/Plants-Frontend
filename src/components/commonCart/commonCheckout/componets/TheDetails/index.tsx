import Link from "next/link";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { ProductTicket } from "../../../../../types";
import ThePayMethods from "./components/ThePayMethods";

export default function TheProductList(props: { products: ProductTicket[] }) {
  const [total, setTotal] = useState(0);
  const formatter = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });
  const transportPrices = {
    bogota: 15000,
    primaryCities: 18000,
    secundaryCities: 21000,
  };
  useEffect(() => {
    const calculateTotal = () => {
      let subtotals = props.products.map((product: ProductTicket) => {
        return product.quantity * product.price;
      });
      const subtotalsCalculates = subtotals.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
      setTotal(subtotalsCalculates + transportPrices.bogota);
    };
    calculateTotal();
  }, [props.products, transportPrices.bogota]);

  return (
    <div className={styles.list}>
      <h1>tu pedido</h1>
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
      <div className={styles.pay}>
        <h2>metodo de pago</h2>
        <ThePayMethods />
      </div>
      <div className={styles.flete}>
        <h2>costos de envio</h2>
        <ul>
          <li>
            bogotá <p>{transportPrices.bogota}</p>
          </li>
          <li>
            ciudades principales <p>{transportPrices.primaryCities}</p>
          </li>
          <li>
            ciudades secundarias <p>{transportPrices.secundaryCities}</p>
          </li>
        </ul>
      </div>
      <div className={styles.info}>
        <h2>
          <span>Total A Pagar:</span>
          <span>{formatter.format(total)}</span>
        </h2>
        <button type="submit" className={`button ${styles.button}`}>
          continuar
        </button>
      </div>
    </div>
  );
}
