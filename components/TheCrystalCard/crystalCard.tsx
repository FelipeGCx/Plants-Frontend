import Image from "next/image";
import styles from "./style.module.scss";
import Crytal from "./models/Crystals";
import vibrationIcon from "./assets/vibration.svg";
import favoriteOutline from "./assets/favorite_outline.svg";
import favoriteFilled from "./assets/favorite_filled.svg";
import React from "react";

function elementsList(list: Array<string>) {
  return list.map((element) => {
    return (
      <li>
        <Image
          src={`./assets/elements/${element}.svg`}
          alt={`${element} icon`}
        />
      </li>
    );
  });
}

type Props = {
  crystals: Array<Crytal>;
};

export default function CrystalCard({ crystals }: Props) {
  const crystalsList = crystals.map((crystal) => {
    return (
      <li>
        <Image
          src={crystal.favorite ? favoriteFilled : favoriteOutline}
          alt="favorite icon crystal"
        />
        <Image src={crystal.imagePoint} alt={`${crystal.name} crystal point`} />
        <div>
          <h2>{crystal.name}</h2>
          <div>
            <ul>{elementsList(crystal.elements)}</ul>
            <div>
              <span>{crystal.vibration}</span>
              <Image src={vibrationIcon} alt="vibration icon" />
            </div>
          </div>
        </div>
      </li>
    );
  });
  return crystalsList;
}
