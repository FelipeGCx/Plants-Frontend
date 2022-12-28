import styles from "./style.module.scss";
import Image from "next/image";
import planets from "./planets";
import zodiac from "./zodiac";
import elements from "./elements";
import PlantsList from "./plants.json";
import favoriteOutline from "./assets/favorite_outline.svg";
import favoriteFilled from "./assets/favorite_filled.svg";
import iconAir from "./assets/elements/air.svg";
import iconWater from "./assets/elements/water.svg";
import iconFire from "./assets/elements/fire.svg";
import iconEarth from "./assets/elements/earth.svg";

import React, { useState } from "react";

const zodiacList = zodiac.map((item) => {
  return (
    <li>
      <input type="checkbox" name="zodiac" id={item.sign} />
      <Image className="icon" src={item.icon} alt={item.alt} width={20} height={20} />
    </li>
  );
});

const elementsList = elements.map((item) => {
  return (
    <li>
      <input type="checkbox" name="element" id={item.name} />
      <Image className="icon" src={item.icon} alt={item.alt} width={20} height={20} />
    </li>
  );
});

const planetsList = planets.map((item) => {
  return (
    <li>
      <input type="checkbox" name="planet" id={item.name} />
      <Image className="icon" src={item.icon} alt={item.alt} width={20} height={20} />
    </li>
  );
});

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

function detailMore(plant: Object);

export default function Plants() {
  return (
    <main className={styles.main}>
      <section className={styles.filter}>
        <div>
          <h2>zodiaco</h2>
          <ul>{zodiacList}</ul>
        </div>
        <div>
          <h2>elemento</h2>
          <ul>{elementsList}</ul>
        </div>
        <div>
          <h2>planeta</h2>
          <ul>{planetsList}</ul>
        </div>
      </section>
      <section className={styles.view}>
        <div className={styles.navsref}>
          <a href="">Plantas</a>
          <a href="">Todas</a>
        </div>
        <ul className={styles.items}>
          {PlantsList.map((plant, i) => {
            return (
              <>
                <li key={i} className={styles.card} id={plant.name}>
                  <input
                    className={styles.input}
                    type="radio"
                    name="plant"
                    id={plant.name}
                  />
                  <div className={styles.details}>
                    <div
                      className={styles.detail}
                      style={{
                        opacity:
                          plant.quantity <= 0
                            ? "1" 
                            : plant.initDate
                            ? "1"
                            : !plant.discount
                            ? "0"
                            : "1",
                      }}
                    >
                      <span>
                        {!plant.quantity
                          ? "Agotada"
                          : plant.initDate
                          ? "Nuevo"
                          : `${plant.discount}%`}
                      </span>
                    </div>
                    <Image
                      className={styles.favorite, "icon"}
                      src={plant.favorite ? favoriteFilled : favoriteOutline}
                      alt="favorite icon plant"
                      width={18}
                      height={18}
                    />
                  </div>
                  <Image
                    className={styles.point}
                    src={
                      plant.frontalImage ||
                      "https://firebasestorage.googleapis.com/v0/b/simple-a5eec.appspot.com/o/crystalsPoint%2Fnot%20found.png?alt=media&token=fd19155e-edb8-4e67-9e13-76a62cc59ce2"
                    }
                    alt={`${plant.name} plant frontal image`}
                    width={300}
                    height={300}
                  />
                  <h2 className={ styles.nameplant}>{plant.name}</h2>
                  <div className={styles.vibration}>
                    <span>${plant.price || 0}.000</span>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
