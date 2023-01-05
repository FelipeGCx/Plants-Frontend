import Image from "next/image";
import styles from "./style.module.scss";

import pse from "./assets/pse.svg";
import payu from "./assets/payu.svg";
import visa from "./assets/visa.svg";
import efecty from "./assets/efecty.svg";
import nequi from "./assets/nequi.svg";
import paypal from "./assets/paypal.svg";
import mastercard from "./assets/mastercard.svg";

export default function ThePayMethods() {
  return (
    <section className={styles.paymethods}>
      <h1>Metodos de pago</h1>
      <ol>
        <li>
          <Image src={pse} height={10} alt="icon pse" />
        </li>
        <li>
          <Image src={payu} height={10} alt="icon pay-u" />
        </li>
        <li>
          <Image src={visa} height={10} alt="icon visa" />
        </li>
        <li>
          <Image src={efecty} height={10} alt="icon efecty" />
        </li>
        <li>
          <Image src={paypal} height={10} alt="icon paypal" />
        </li>
        <li>
          <Image src={nequi} height={10} alt="icon nequi" />
        </li>
        <li>
          <Image src={mastercard} height={10} alt="icon mastercard" />
        </li>
      </ol>
    </section>
  );
}
