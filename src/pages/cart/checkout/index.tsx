// import { useEffect, useState } from "react";
import TheDetails from "../../../components/commonCart/commonCheckout/componets/TheDetails";
import TheFormData from "../../../components/commonCart/commonCheckout/componets/TheFormData";
import styles from "./style.module.scss";
// import { ProductTicket } from "../../../types";
export default function TheCheckout() {

  return (
    <form className={styles.main}>
      <h1>Datos de Facturación</h1>
      <TheFormData />
      <TheDetails />
    </form>
  );
}
