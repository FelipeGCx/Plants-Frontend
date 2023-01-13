import TheDoubleSlider from "./components/TheDoubleSlider";
import styles from "./style.module.scss";

export default function TheFilters() {
  return (
    <form action="" className={styles.filters}>
      <div>
        <h1>Especie</h1>
        <label htmlFor="idd" className={styles.item}>
          <input type="radio" name="species" id="idd" />
          <label htmlFor="idd"></label>
          <span>idd</span>
        </label>
        <label htmlFor="otras" className={styles.item}>
          <input type="radio" name="species" id="otras" checked/>
          <label htmlFor="otras"></label>
          <span>otras</span>
        </label>
        <label htmlFor="todas" className={styles.item}>
          <input type="radio" name="species" id="todas" />
          <label htmlFor="todas"></label>
          <span>todas</span>
        </label>
      </div>
      <div>
        <h1>Riego</h1>
        <label htmlFor="abundante" className={styles.item}>
          <input type="radio" name="irrigation" id="abundante" />
          <label htmlFor="abundante"></label>
          <span>abundante</span>
        </label>
        <label htmlFor="moderado" className={styles.item}>
          <input type="radio" name="irrigation" id="moderado" />
          <label htmlFor="moderado"></label>
          <span>moderado</span>
        </label>
        <label htmlFor="escaso" className={styles.item}>
          <input type="radio" name="irrigation" id="escaso" />
          <label htmlFor="escaso"></label>
          <span>escaso</span>
        </label>
        <label htmlFor="todos" className={styles.item}>
          <input type="radio" name="irrigation" id="todos" checked/>
          <label htmlFor="todos"></label>
          <span>todos</span>
        </label>
      </div>
      <div>
        <h1>Uso</h1>
        <label htmlFor="interior" className={styles.item}>
          <input type="radio" name="zone" id="interior" checked/>
          <label htmlFor="interior"></label>
          <span>interior</span>
        </label>
        <label htmlFor="exterior" className={styles.item}>
          <input type="radio" name="zone" id="exterior" />
          <label htmlFor="exterior"></label>
          <span>exterior</span>
        </label>
      </div>
      {/* <TheDoubleSlider
        min={10000}
        max={300000}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      /> */}
    </form>
  );
}
