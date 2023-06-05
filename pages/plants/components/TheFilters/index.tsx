import { useState, useEffect } from "react";
import TheDoubleSlider from "./components/TheDoubleSlider";
import styles from "./style.module.scss";
import { useRouter } from 'next/router';
import { PlantsQParams } from "../../../../types";

export default function TheFilters(props: { params: PlantsQParams }) {
  const [species, setSpecies] = useState([]);
  const router = useRouter();
  useEffect(() => {
    async function fetchData() {
      // declare the url to fetch
      let uri = `https://plants-api-production.up.railway.app/api/v1/species/`;

      try {
        const response = await fetch(uri);
        const data = await response.json();
        setSpecies(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setFilter = (filter: string, value: any) => {
    const { query, pathname } = router;
    if (value == "todas") {
      const { species, ...restQuery } = query;
      let updatedQuery = { ...restQuery, page: "1" };
      router.push({ pathname, query: updatedQuery });
    } else {
      let updatedQuery = { ...query, species: value.toString(), page: "1" };
      router.push({ pathname, query: updatedQuery });
    }
  }

  return (
    <form className={styles.filters}>
      <div>
        <h1>Especie</h1>
        {
          species?.map((item: string, i: number) => {
            return (
              <label htmlFor={item} className={styles.item} key={i}>
                <input type="radio" name="species" id={item} onClick={() => setFilter("species", item)} checked={props.params.species == item} />
                <label htmlFor={item}></label>
                <span>{item}</span>
              </label>
            )
          })
        }
        <label htmlFor="todas" className={styles.item} key="todas">
          <input type="radio" name="species" id="todas" checked={props.params.species == null} onClick={() => setFilter("species", "todas")} />
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
      </div>
      <div>
        <h1>Iluminación</h1>
        <label htmlFor="pleno sol" className={styles.item}>
          <input type="radio" name="irrigation" id="pleno sol" />
          <label htmlFor="pleno sol"></label>
          <span>pleno sol</span>
        </label>
        <label htmlFor="sol parcial" className={styles.item}>
          <input type="radio" name="irrigation" id="sol parcial" />
          <label htmlFor="sol parcial"></label>
          <span>sol parcial</span>
        </label>
        <label htmlFor="sombra parcial" className={styles.item}>
          <input type="radio" name="irrigation" id="sombra parcial" />
          <label htmlFor="sombra parcial"></label>
          <span>sombra parcial</span>
        </label>

        <label htmlFor="sombra completa" className={styles.item}>
          <input type="radio" name="irrigation" id="sombra completa" />
          <label htmlFor="sombra completa"></label>
          <span>sombra completa</span>
        </label>
      </div>
      <div>
        <h1>Uso</h1>
        <label htmlFor="interior" className={styles.item}>
          <input type="radio" name="zone" id="interior" checked />
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
