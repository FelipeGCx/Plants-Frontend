import styles from "./style.module.scss";
import Image from "next/image";
import React, { useState } from "react";
import TheCrystalSelect from "../TheCrystalSelect";

type Crystal = {
  name: string;
  properties: Array<string>;
  vibration: number;
  zodiac: Array<string>;
  imageCrystal: string;
};

export default function ThePlantView(crystal: Crystal) {
  return (
    <section className={styles.plantView}>
      <TheCrystalSelect
        name={crystal.name}
        properties={crystal.properties}
        vibration={crystal.vibration}
        zodiac={crystal.zodiac}
        imageCrystal={crystal.imageCrystal}
      />
      
    </section>
  );
}
