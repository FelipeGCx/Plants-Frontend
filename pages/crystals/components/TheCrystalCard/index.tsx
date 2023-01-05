import Image from "next/image";
import styles from "./style.module.scss";
import iconAir from "./assets/elements/air.svg";
import iconWater from "./assets/elements/water.svg";
import iconFire from "./assets/elements/fire.svg";
import iconEarth from "./assets/elements/earth.svg";
import vibrationIcon from "./assets/vibration.svg";
import favoriteOutline from "./assets/favorite_outline.svg";
import favoriteFilled from "./assets/favorite_filled.svg";
import React from "react";

function icon(element: string) {
  switch (element) {
    case "aire":
      return iconAir;
    case "fuego":
      return iconFire;
    case "agua":
      return iconWater;
    case "tierra":
      return iconEarth;
    default:
      return iconAir;
  }
}

function elementsDisplay(list: Array<string>) {
  return list.map((element) => {
    return (
      <li>
        <Image
          className="icon"
          src={icon(element)}
          alt={`${element} icon`}
          width={18}
          height={18}
        />
      </li>
    );
  });
}

type Crystal = {
  name: string;
  vibration: number;
  elements: Array<string>;
  imageCrystal: string;
  favorite: string;
};

export default function CrystalCard(props: {
  crystal: Crystal;
  idx: number;
  order: number;
  totalItems: number;
  onFavorite: () => void;
  onNewOrder: (oldOrder: number) => void;
  onDisplay: (dispaly: string) => void;
  onOrder: (order: number) => void;
}) {
  return (
    <li
      key={props.idx}
      className={styles.card}
      id={props.crystal.name}
      style={{ order: props.order }}
    >
      <input
        className={styles.input}
        type="radio"
        name="crystal"
        id={props.crystal.name}
        onClick={() => {
          props.onNewOrder(props.idx + 1);
          props.onDisplay("grid");
        }}
        onBlur={() => {
          props.onOrder((props.totalItems - props.idx) * -1);
          props.onDisplay("none");
        }}
      />
      <button onClick={props.onFavorite}>
        <Image
          className={styles.favorite}
          src={props.crystal.favorite ? favoriteFilled : favoriteOutline}
          alt="favorite icon crystal"
          width={24}
          height={24}
        />
      </button>
      <Image
        className={styles.point}
        src={
          props.crystal.imageCrystal ||
          "https://firebasestorage.googleapis.com/v0/b/simple-a5eec.appspot.com/o/crystalsPoint%2Fnot%20found.png?alt=media&token=fd19155e-edb8-4e67-9e13-76a62cc59ce2"
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
            <Image
              className="icon"
              src={vibrationIcon}
              alt="vibration icon"
              width={18}
              height={18}
            />
          </div>
        </div>
      </div>
    </li>
  );
}
