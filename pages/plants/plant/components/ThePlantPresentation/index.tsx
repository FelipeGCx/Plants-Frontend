import styles from "./style.module.scss";
import Image from "next/image";
import React, { useState } from "react";
import { PlantPresentation } from "../../../../../types";

const formatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

export default function ThePlantPresentation(plant: PlantPresentation) {
  return (
    <section className={styles.presentation}>
      <Image
        src={plant.imageFront}
        alt={`image plant ${plant.name}`}
        width={400}
        height={400}
      />
      <div>
        <h1>{plant.name}</h1>
        <h2>{formatter.format(plant.price)}</h2>
        <p>{plant.description}</p>
        <button className="button">añadir al carrito</button>
      </div>
    </section>
  );
}
