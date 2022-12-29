import Image from "next/image";
import styles from "./style.module.scss";
import React, { useState } from "react";
import Pot from "./models/Pot";
import Pots from "./Pots.json";

const card = (o: Pot) => {
  return (
    <li>
      <label htmlFor={o.getName()} className={styles.card}>
        <input name="pot" value={o.getName()} type="radio" />
        <Image
          src={o.getImage()}
          alt={`pot ${o.getName()}`}
          width={100}
          height={100}
        />
        <h1>{o.getName()} </h1>
      </label>
    </li>
  );
};

export default function ThePotSelector() {
  return (
    <section className={ styles.selector}>
      <h1 className={ styles.title}>Materas</h1>
      <form action="">
        {Pots.map((pot) => {
          return (
            <ul>
              {card(
                new Pot(pot.id, pot.name, pot.image, pot.price, pot.quantity)
              )}
            </ul>
          );
        })}
      </form>
    </section>
  );
}
