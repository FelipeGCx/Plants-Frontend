import Image from "next/image";
import styles from "./style.module.scss";
import React, { useEffect, useState } from "react";
import { CrystalFav } from "../../../../../types";
import { useRouter } from "next/router";

export default function TheCrystalSelector(props: {
  id: number;
  selectedCrystal(crystal: CrystalFav): void;
}) {
  const [selected, setSelected] = useState(props.id);
  const [crystalList, setCrystalList] = useState<CrystalFav[]>([]);
  const [error, setError] = useState("");
  const [nameToFilter, setNameToFilter] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      let url = `https://plants-api-production.up.railway.app/api/v1/crystalis/1/?page=1&page_size=13`;
      if (nameToFilter.length > 0) {
        url += `&named=${nameToFilter}`;
      }
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCrystalList(data.results);
      } catch (error) {
        setError("error");
      }
    }
    fetchData();
  }, [nameToFilter]);

  useEffect(() => {
    let item: CrystalFav = {
      favorite: false,
      quantity: 0,
      price: 0,
      state: false,
      id: 0,
      name: "",
      description: "",
      vibration: 0,
      benefits: [],
      properties: [],
      zodiac: [],
      planets: [],
      elements: [],
      chakras: [],
      imageCrystal: "",
      imageGemstone: "",
    };
    let find = crystalList.find((objeto) => objeto.id === selected);
    if (find) {
      item = find;
    }
    props.selectedCrystal(item);
  }, [crystalList, props, selected]);

  const handlerChange = (id: number) => {
    setSelected(id);
    const { query, pathname } = router;
    let updatedQuery = { ...query, crystal: id.toString() };
    router.push({ pathname, query: updatedQuery });
  };
  const handlerInputSearch = (event: any) => {
    const value = event.target.value;
    setNameToFilter(value);
    console.log("cambia")
  };

  return (
    <section className={styles.selector}>
      <h1 className={styles.title}>Cristales</h1>
      <label className={styles.browser}>
        <input type="text" placeholder="Buscar" onInput={handlerInputSearch} />
      </label>
      <form action="" className={styles.form}>
        <ul className={styles.crystalsList}>
          {crystalList?.map((crystal: CrystalFav, i: number) => {
            return (
              <li key={i}>
                <label htmlFor={crystal.name} className={styles.card}>
                  <input
                    name="crystal"
                    id={crystal.name}
                    type="radio"
                    checked={crystal.id == selected}
                    onChange={() => handlerChange(crystal.id)}
                  />
                  <Image
                    src={crystal.imageCrystal}
                    alt={`crystal ${crystal.name}`}
                    width={250}
                    height={250}
                  />
                  <h1>{crystal.name} </h1>
                </label>
              </li>
            );
          })}
        </ul>
      </form>
    </section>
  );
}
