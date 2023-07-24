import styles from "./style.module.scss";
export default function TheFormData() {
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
      <label htmlFor="type" className={styles.label}>
        <label htmlFor="type">tipo de documento*</label>
        <select name="type" id="type">
          <option value=""></option>
        </select>
      </label>
      <label htmlFor="document" className={styles.label}>
        <label htmlFor="document">número de documento*</label>
        <input required type="number" name="document" id="document" />
      </label>
      <label htmlFor="email" className={styles.label}>
        <label htmlFor="email">correo electronico*</label>
        <input required type="text" name="email" id="email" />
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
