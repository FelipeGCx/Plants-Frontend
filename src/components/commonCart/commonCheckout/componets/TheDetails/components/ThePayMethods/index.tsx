import Image from "next/image";
import styles from "./style.module.scss";

import amazon from "./assets/AmazonPay.svg";
import amex from "./assets/Amex.svg";
import apple from "./assets/ApplePay.svg";
import google from "./assets/GooglePay.svg";
import maestro from "./assets/Maestro.svg";
import mastercard from "./assets/Mastercard.svg";
import nequi from "./assets/Nequi.svg";
import nu from "./assets/NU.svg";
import paypal from "./assets/PayPal.svg";
import pse from "./assets/PSE.svg";
import visa from "./assets/Visa.svg";

const methods = [
  {
    name: "visa",
    icon: visa,
    alt: "icono metodo de pago visa",
  },
  {
    name: "amex",
    icon: amex,
    alt: "icono metodo de pago american express",
  },
  {
    name: "mastercard",
    icon: mastercard,
    alt: "icono metodo de pago mastercard",
  },
  {
    name: "maestro",
    icon: maestro,
    alt: "icono metodo de pago maestro",
  },
  {
    name: "pse",
    icon: pse,
    alt: "icono metodo de pago pse",
  },
  // {
  //   name: "apple",
  //   icon: apple,
  //   alt: "icono metodo de pago apple pay",
  // },
  // {
  //   name: "google",
  //   icon: google,
  //   alt: "icono metodo de pago google pay",
  // },
  {
    name: "nu",
    icon: nu,
    alt: "icono metodo de pago nu",
  },
  {
    name: "paypal",
    icon: paypal,
    alt: "icono metodo de pago paypal",
  },
  // {
  //   name: "nequi",
  //   icon: nequi,
  //   alt: "icono metodo de pago nequi",
  // },
  // {
  //   name: "amazon",
  //   icon: amazon,
  //   alt: "icono metodo de pago amazon",
  // },
];

export default function ThePayMethods() {
  return (
    <ul className={styles.paymethods}>
      {methods.map((method) => {
        return (
          <li key={method.name}>
            <label htmlFor={method.name}>
              <input
                type="radio"
                name="paymethod"
                id={method.name}
                defaultChecked
              />
              <Image src={method.icon} alt={method.alt} />
            </label>
          </li>
        );
      })}
    </ul>
  );
}
