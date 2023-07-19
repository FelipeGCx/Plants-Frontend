import { useState, useEffect } from "react";
import TheDoubleSlider from "./components/TheDoubleSlider";
import styles from "./style.module.scss";
import { useRouter } from "next/router";
import { PlantsQParams } from "../../../../types";

export default function TheFilter(props: { params: PlantsQParams }) {
  const [species, setSpecies] = useState([]);
  const router = useRouter();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

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
  }, []);

  const setFilter = (filter: string, value: any) => {
    const { query, pathname } = router;
    const { [filter]: filterParam, name, ...restQuery } = query;
    if (value == "todas") {
      let updatedQuery = { ...restQuery, page: "1" };
      router.push({ pathname, query: updatedQuery });
    } else {
      let updatedQuery = { [filter]: value, ...restQuery, page: "1" };
      router.push({ pathname, query: updatedQuery });
    }
  };

  const handlePriceChange = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
    const { query, pathname } = router;
    let updatedQuery = {
      ...query,
      priceFirst: min.toString(),
      priceSecond: max.toString(),
      page: "1",
    };
    router.push({ pathname, query: updatedQuery });
  };

  return (
    <section className={styles.filter}>
      <form>
        <div>
          <h1>Especie</h1>
          {species?.map((item: string, i: number) => {
            return (
              <label htmlFor={item} className={styles.item} key={i}>
                <input
                  type="radio"
                  name="species"
                  id={item}
                  onChange={() => setFilter("species", item)}
                  checked={props.params.species == item}
                />
                <label htmlFor={item}></label>
                <span>{item}</span>
              </label>
            );
          })}
          <label htmlFor="speciesAll" className={styles.item} key="speciesAll">
            <input
              type="radio"
              name="species"
              id="speciesAll"
              checked={props.params.species == null}
              onChange={() => setFilter("species", "todas")}
            />
            <label htmlFor="speciesAll"></label>
            <span>todas</span>
          </label>
        </div>
        <div>
          <h1>Riego</h1>
          <label htmlFor="abundante" className={styles.item}>
            <input
              type="radio"
              name="irrigation"
              id="abundante"
              onChange={() => setFilter("irrigation", "abundante")}
              checked={props.params.irrigation == "abundante"}
            />
            <label htmlFor="abundante"></label>
            <span>abundante</span>
          </label>
          <label htmlFor="moderado" className={styles.item}>
            <input
              type="radio"
              name="irrigation"
              id="moderado"
              onChange={() => setFilter("irrigation", "moderado")}
              checked={props.params.irrigation == "moderado"}
            />
            <label htmlFor="moderado"></label>
            <span>moderado</span>
          </label>
          <label htmlFor="escaso" className={styles.item}>
            <input
              type="radio"
              name="irrigation"
              id="escaso"
              onChange={() => setFilter("irrigation", "escaso")}
              checked={props.params.irrigation == "escaso"}
            />
            <label htmlFor="escaso"></label>
            <span>escaso</span>
          </label>
          <label htmlFor="irrigationAll" className={styles.item}>
            <input
              type="radio"
              name="irrigation"
              id="irrigationAll"
              onChange={() => setFilter("irrigation", "todas")}
              checked={props.params.irrigation == null}
            />
            <label htmlFor="irrigationAll"></label>
            <span>todas</span>
          </label>
        </div>
        <div>
          <h1>Iluminación</h1>
          <label htmlFor="pleno sol" className={styles.item}>
            <input
              type="radio"
              name="light"
              id="pleno sol"
              onChange={() => setFilter("light", "pleno sol")}
              checked={props.params.light == "pleno sol"}
            />
            <label htmlFor="pleno sol"></label>
            <span>pleno sol</span>
          </label>
          <label htmlFor="sol parcial" className={styles.item}>
            <input
              type="radio"
              name="light"
              id="sol parcial"
              onChange={() => setFilter("light", "sol parcial")}
              checked={props.params.light == "sol parcial"}
            />
            <label htmlFor="sol parcial"></label>
            <span>sol parcial</span>
          </label>
          <label htmlFor="sombra parcial" className={styles.item}>
            <input
              type="radio"
              name="light"
              id="sombra parcial"
              onChange={() => setFilter("light", "sombra parcial")}
              checked={props.params.light == "sombra parcial"}
            />
            <label htmlFor="sombra parcial"></label>
            <span>sombra parcial</span>
          </label>

          <label htmlFor="sombra completa" className={styles.item}>
            <input
              type="radio"
              name="light"
              id="sombra completa"
              onChange={() => setFilter("light", "sombra completa")}
              checked={props.params.light == "sombra completa"}
            />
            <label htmlFor="sombra completa"></label>
            <span>sombra completa</span>
          </label>
          <label htmlFor="lightAll" className={styles.item} key="todas">
            <input
              type="radio"
              name="light"
              id="lightAll"
              checked={props.params.light == null}
              onChange={() => setFilter("light", "todas")}
            />
            <label htmlFor="lightAll"></label>
            <span>todas</span>
          </label>
        </div>
        <div>
          <h1>Uso</h1>
          <label htmlFor="interior" className={styles.item}>
            <input
              type="radio"
              name="zone"
              id="interior"
              onChange={() => setFilter("zone", "interior")}
              checked={props.params.zone == "interior"}
            />
            <label htmlFor="interior"></label>
            <span>interior</span>
          </label>
          <label htmlFor="exterior" className={styles.item}>
            <input
              type="radio"
              name="zone"
              id="exterior"
              onChange={() => setFilter("zone", "exterior")}
              checked={props.params.zone == "exterior"}
            />
            <label htmlFor="exterior"></label>
            <span>exterior</span>
          </label>
          <label htmlFor="zoneAll" className={styles.item} key="todas">
            <input
              type="radio"
              name="zone"
              id="zoneAll"
              checked={props.params.zone == null}
              onChange={() => setFilter("zone", "todas")}
            />
            <label htmlFor="zoneAll"></label>
            <span>todas</span>
          </label>
        </div>
        <TheDoubleSlider
          minPrice={30000}
          maxPrice={250000}
          onPriceChange={handlePriceChange}
        />
      </form>
    </section>
  );
}
