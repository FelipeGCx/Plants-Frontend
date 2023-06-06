import Image from "next/image";
import styles from "./style.module.scss";
import React, { useEffect, useState } from "react";
import { Pot } from "../../../../../types";

export default function ThePotSelector(props: { id: number }) {
  const [selected, setSelected] = useState(props.id);
  const [potsList, setPotsList] = useState<Pot[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      const url = "https://plants-api-production.up.railway.app/api/v1/pots/";
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPotsList(data);
      } catch (err) {
        setError("error");
      }
    }
    fetchData();
  }, [])

  return (
    <section className={styles.selector}>
      <h1 className={styles.title}>Materas</h1>
      <form action="">
        <ul>
          {potsList?.map((pot:Pot, i:number) => {
            return (
              <li key={i}>
                <label htmlFor={pot.name} className={styles.card}>
                  <input
                    name="pot"
                    value={pot.name}
                    type="radio"
                    checked={pot.id == selected}
                    onChange={() => setSelected(pot.id)}
                  />
                  <Image
                    src={pot.image}
                    alt={`pot ${pot.name}`}
                    width={100}
                    height={100}
                  />
                  <h1>{pot.name} </h1>
                </label>
              </li>
            );
          })}
        </ul>
      </form>
    </section>
  );
}
