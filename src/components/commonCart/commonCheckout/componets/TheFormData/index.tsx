import styles from "./style.module.scss";
import { validateEmail } from "../../../../../utils/validators/email";
import { ChangeEvent, useState } from "react";
export default function TheFormData() {
  const handlerChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setInvalidEmail(!validateEmail(event.target.value));
    } else {
      setInvalidEmail(false);
    }
  };
  const [isInvalidEmail, setInvalidEmail] = useState(false);
  return (
    <div className={styles.data}>
      <label htmlFor="gift" className={styles.labelCheck}>
        <input type="checkbox" name="gift" id="gift" />
        <label htmlFor="gift">¿enviar como regalo?</label>
      </label>
      <label htmlFor="firstname" className={styles.label}>
        <label htmlFor="firstname">nombre*</label>
        <input required type="text" name="firstanem" id="firstanem" />
      </label>
      <label htmlFor="lastname" className={styles.label}>
        <label htmlFor="lastname">apellidos*</label>
        <input required type="text" name="lastname" id="lastname" />
      </label>
      <label htmlFor="typeDocument" className={styles.label}>
        <label htmlFor="typeDocument">tipo de documento*</label>
        <select name="typeDocument" id="typeDocument">
          <option value="">cédula de ciudadanía</option>
          <option value="">tarjeta de extranjería</option>
          <option value="">cédula de extranjería</option>
          <option value="">pasaporte</option>
        </select>
      </label>
      <label htmlFor="document" className={styles.label}>
        <label htmlFor="document">número de documento*</label>
        <input required type="number" name="document" id="document" />
      </label>
      <label
        htmlFor="email"
        className={styles.label}
        data-msg="correo electronico erroneo"
      >
        <label htmlFor="email">correo electronico*</label>
        <input
          required
          className={isInvalidEmail ? styles.error : ""}
          type="text"
          name="email"
          id="email"
          onChange={(event) => handlerChangeEmail(event)}
        />
      </label>
      <label htmlFor="phone" className={styles.label}>
        <label htmlFor="phone">telefono*</label>
        <input required type="number" name="phone" id="phone" />
      </label>
      <label htmlFor="type" className={styles.label}>
        <label htmlFor="type">departamento*</label>
        <select name="" id="">
          <option value=""></option>
        </select>
      </label>
      <label htmlFor="type" className={styles.label}>
        <label htmlFor="type">municipio/ciudad*</label>
        <select name="" id="">
          <option value=""></option>
        </select>
      </label>
      <label htmlFor="address" className={styles.label}>
        <label htmlFor="address">dirección*</label>
        <input required type="text" name="address" id="address" />
      </label>
      <label htmlFor="postal" className={styles.label}>
        <label htmlFor="postal">código postal (optional)</label>
        <input type="text" name="postal" id="postal" />
      </label>
      <label htmlFor="post" className={styles.labelArea}>
        <label htmlFor="post">nota (optional)</label>
        <textarea name="post" id="post"></textarea>
      </label>
    </div>
  );
}
