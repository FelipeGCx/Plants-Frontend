import Image from "next/image";
import styles from "./style.module.scss";
import React, { useState } from "react";
import Crystal from "./models/Crystal";
import Crystals from "./Crystals.json";

const card = (o: Crystal) => {
  return (
    <li>
      <label htmlFor={o.getName()} className={styles.card}>
        <input name="crystal" id={o.getName()} type="radio" />
        <Image
          src={o.getImageCrystal()}
          alt={`crystal ${o.getName()}`}
          width={250}
          height={250}
        />
        <h1>{o.getName()} </h1>
      </label>
    </li>
  );
};

export default function TheCrystalSelector() {
  return (
    <section className={styles.selector}>
      <h1 className={styles.title}>Cristales</h1>
      <form action="">
        {Crystals.map((crystal) => {
          return (
            <ul>
              {card(
                new Crystal(
                  crystal.id,
                  crystal.name,
                  crystal.properties,
                  crystal.benefits,
                  crystal.description,
                  crystal.vibration,
                  crystal.zodiac,
                  crystal.imageGemstone,
                  crystal.imageCrystal,
                  crystal.elements,
                  crystal.planets,
                  false
                )
              )}
            </ul>
          );
        })}
      </form>
    </section>
  );
}
