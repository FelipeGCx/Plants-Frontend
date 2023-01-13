import styles from "./style.module.scss";
import Image from "next/image";
import React, { useState } from "react";
import TheCrystalSelect from "../TheCrystalSelect";
import { PlantView, CrystalView } from "../../../../../types";
import ThePlantPresentation from "../ThePlantPresentation";

export default function ThePlantView(props: {
  plant: PlantView;
  crystal: CrystalView;
}) {
  return (
    <section className={styles.plantView}>
      <ThePlantPresentation
        id={props.plant.id}
        name={props.plant.plant.name}
        description={props.plant.plant.description}
        imageFront={props.plant.plant.imageFront}
        price={props.plant.price}
      />
      {/* <TheCrystalSelect
        name={props.crystal.name}
        properties={props.crystal.properties}
        vibration={props.crystal.vibration}
        zodiac={props.crystal.zodiac}
        imageCrystal={props.crystal.imageCrystal}
      /> */}
    </section>
  );
}
