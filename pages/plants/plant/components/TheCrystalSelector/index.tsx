import Image from "next/image";
import styles from "./style.module.scss";
import React, { useEffect, useState } from "react";
import { CrystalFav } from "../../../../../types";
import { useRouter } from "next/router";

export default function TheCrystalSelector(props: { id: number }) {
  const [selected, setSelected] = useState(props.id);
  const [crystalList, setCrystalList] = useState<CrystalFav[]>([]);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const url = `https://plants-api-production.up.railway.app/api/v1/crystalis/1/?page=1&page_size=13`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCrystalList(data.results);
      } catch (error) {
        setError("error");
      }
    }
    fetchData();
  }, []);

  const handlerChange = (id: number) => {
    setSelected(id);
    const { query, pathname } = router;
    let updatedQuery = { ...query, crystal: id.toString() };
    router.push({ pathname, query: updatedQuery });
  }


  return (
    <section className={styles.selector}>
      <h1 className={styles.title}>Cristales</h1>
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
