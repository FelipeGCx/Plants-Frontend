import Image from "next/image";
import styles from "./style.module.scss";
import React from "react";
import { CrystalFavorite } from "../../../../../../types";
import TheZodiacCards from "./components/TheZodiacCards";
import ThePlanets from "./components/ThePlanets";
import TheChakras from "./components/TheChakras";

export default function TheCrystalDetails(props: {
  crystal?: CrystalFavorite;
  display: string;
}) {
  return (
    <section
      className={styles.details}
      style={{
        width: props.display == "none" ? "0px" : "100%",
        padding: props.display == "none" ? "0px" : "2rem",
      }}
    >
      <div className={styles.data}>
        <h1>{props.crystal?.name}</h1>
        <ul className={styles.properties}>
          {props.crystal?.properties.map((propierty: string, p: number) => {
            return (
              <li key={p}>
                <p>{propierty}</p>
              </li>
            );
          })}
        </ul>
        <Image
          className={styles.point}
          src={
            props.crystal?.imageGemstone ||
            "https://firebasestorage.googleapis.com/v0/b/simple-a5eec.appspot.com/o/crystalsPoint%2Fnot%20found.png?alt=media&token=fd19155e-edb8-4e67-9e13-76a62cc59ce2"
          }
          alt={`${props.crystal?.name} gemstone`}
          width={140}
          height={140}
        />
      </div>
      <TheChakras chakras={props.crystal?.chakras} />
      <p className={styles.description}>{props.crystal?.description}</p>
      <ThePlanets planets={props.crystal?.planets} />
      <ul className={styles.benefits}>
        {props.crystal?.benefits.map((planet: string, pl: number) => {
          return (
            <li key={pl}>
              <p>{planet}</p>
            </li>
          );
        })}
      </ul>
      <TheZodiacCards zodiacs={props.crystal?.zodiac} />
    </section>
  );
}
