import Image from "next/image";
import styles from "./style.module.scss";
import React, { useState } from "react";
import Pots from "./Pots.json";

export default function ThePotSelector(props: { id: number }) {
  const [selected, setSelected] = useState(props.id);
  return (
    <section className={styles.selector}>
      <h1 className={styles.title}>Materas</h1>
      <form action="">
        <ul>
          {Pots.map((pot, i) => {
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
