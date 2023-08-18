import Image from "next/image";
import styles from "./style.module.scss";
import vibrationIcon from "./assets/vibration.svg";
import favoriteOutline from "./assets/favorite_outline.svg";
import favoriteFilled from "./assets/favorite_filled.svg";
import React, { useState } from "react";
import { CrystalFavorite } from "../../../../../../../../types";
import {
  AirIcon,
  FireIcon,
  WaterIcon,
  EarthIcon,
  VibrationIcon,
  FavoriteOnIcon,
  FavoriteOffIcon,
} from "../../../../../../../../assets/icons";

function icon(element: string) {
  switch (element) {
    case "aire":
      return <AirIcon className={styles.icon} />;
    case "fuego":
      return <FireIcon className={styles.icon} />;
    case "agua":
      return <WaterIcon className={styles.icon} />;
    case "tierra":
      return <EarthIcon className={styles.icon} />;
    default:
      return <AirIcon className={styles.icon} />;
  }
}

function elementsDisplay(list: Array<string>) {
  return list.map((element) => {
    return <li key={element}>{icon(element)}</li>;
  });
}

export default function TheCrystalCard(props: {
  crystal: CrystalFavorite;
  onFavorite: () => void;
  onDisplay: (display: string) => void;
}) {
  const [state, setState] = useState(false);
  const handlerClick = () => {
    if (!state) {
      props.onDisplay("grid");
      setState(true);
    } else {
      props.onDisplay("none");
      handlerClose();
    }
  };
  const handlerClose = () => {
    setState(false);
  };
  return (
    <li key={props.crystal.id} className={styles.card} id={props.crystal.name}>
      <input
        className={styles.input}
        type="radio"
        name="crystal"
        id={props.crystal.name}
        onClick={handlerClick}
        onBlur={handlerClose}
      />
      <button onClick={props.onFavorite} className={styles.favoriteBtn}>
        {props.crystal.favorite ? (
          <FavoriteOnIcon className={styles.icon} />
        ) : (
          <FavoriteOffIcon className={styles.icon} />
        )}
      </button>
      <Image
        className={styles.point}
        src={
          props.crystal.imageCrystal ||
          "https://firebasestorage.googleapis.com/v0/b/simple-a5eec.appspot.com/o/crystalsPoints%2Fnot%20found.webp?alt=media&token=da69fbe7-ec86-4cc6-b73a-6d4661316f5f"
        }
        alt={`${props.crystal.name} crystal point`}
        width={300}
        height={300}
      />
      <div className={styles.data}>
        <h2>{props.crystal.name}</h2>
        <div className={styles.elements}>
          <ul>{elementsDisplay(props.crystal.elements)}</ul>
          <div className={styles.vibration}>
            {props.crystal.vibration || 0}
            <VibrationIcon className={styles.icon} />
          </div>
        </div>
      </div>
    </li>
  );
}
