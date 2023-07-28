import { useContext } from "react";
import TheDetails from "../../../components/commonCart/commonCheckout/componets/TheDetails";
import TheFormData from "../../../components/commonCart/commonCheckout/componets/TheFormData";
import cartContext from "../../../contexts/cartContext";
import styles from "./style.module.scss";

export default function TheCheckout() {
  const { ticketCart } = useContext(cartContext);
  const handlerSubmit = (e: any) => {
    console.log(e)
  }
  return (
    <form className={styles.main} onSubmit={ handlerSubmit}>
      <h1>Datos de Facturación</h1>
      <TheFormData />
      <TheDetails products={ticketCart} />
    </form>
  );
}
