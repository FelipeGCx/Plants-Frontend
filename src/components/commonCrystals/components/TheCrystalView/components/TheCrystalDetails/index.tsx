import Image from "next/image";
import styles from "./style.module.scss";
import React from "react";
import { CrystalFavorite } from "../../../../../../types";

import rootChakra from "./assets/chakras/root.svg";
import sacralChakra from "./assets/chakras/sacral.svg";
import solarPlexoChakra from "./assets/chakras/solar.svg";
import heartChakra from "./assets/chakras/heart.svg";
import throatChakra from "./assets/chakras/throat.svg";
import thridEyeChakra from "./assets/chakras/third_eye.svg";
import crownChakra from "./assets/chakras/crown.svg";

export default function TheCrystalDetails(props: { crystal?: CrystalFavorite }) {
  return (
    <section className={styles.details }>
      <h1>{ props.crystal?.name}</h1>
    </section>
  );
};
