import styles from "./style.module.scss";
export default function TheFormData() {
  return (
    <form className={styles.form}>
      <label htmlFor="gift" className={styles.labelCheck}>
        <input type="checkbox" name="gift" id="gift" />
        <label htmlFor="gift">¿enviar como regalo?</label>
      </label>
      <label htmlFor="firstname" className={styles.label}>
        <label htmlFor="firstname">nombre*</label>
        <input type="text" />
      </label>
      <label htmlFor="lastname" className={styles.label}>
        <label htmlFor="lastname">apellidos*</label>
        <input type="text" />
      </label>
      <label htmlFor="type" className={styles.label}>
        <label htmlFor="type">tipo de documento*</label>
        <select name="" id="">
          <option value=""></option>
        </select>
      </label>
      <label htmlFor="document" className={styles.label}>
        <label htmlFor="document">número de documento*</label>
        <input type="text" />
      </label>
      <label htmlFor="email" className={styles.label}>
        <label htmlFor="email">correo electronico*</label>
        <input type="text" />
      </label>
      <label htmlFor="phone" className={styles.label}>
        <label htmlFor="phone">telefono*</label>
        <input type="text" />
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
      <label htmlFor="dirección" className={styles.label}>
        <label htmlFor="dirección">dirección*</label>
        <input type="text" />
      </label>
      <label htmlFor="postal" className={styles.label}>
        <label htmlFor="postal">código postal (optional)</label>
        <input type="text" />
      </label>
      <label htmlFor="post" className={styles.labelArea}>
        <label htmlFor="post">nota (optional)</label>
        <textarea name="post" id="post"></textarea>
      </label>
    </form>
  );
}
