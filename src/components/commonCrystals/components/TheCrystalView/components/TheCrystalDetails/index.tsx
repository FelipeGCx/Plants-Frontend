import Image from "next/image";
import styles from "./style.module.scss";
import React, { useEffect, useRef } from "react";
import { CrystalFavorite } from "../../../../../../types";
import TheZodiacCards from "./components/TheZodiacCards";
import ThePlanets from "./components/ThePlanets";
import TheChakras from "./components/TheChakras";
import { HexaIcon } from "../../../../../../assets/icons";

export default function TheCrystalDetails(props: {
  crystal?: CrystalFavorite;
  display: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scroll = () => {
      if (containerRef.current) {
        containerRef.current.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    };
    scroll();
  }, [props.crystal])

  return (
    <section
      ref={containerRef}
      className={`${styles.details} ${props.display == "grid" ? styles.display : ""}`}
    >
      <div className={styles.data}>
        <h1>{props.crystal?.name}</h1>
        <ul className={styles.properties}>
          {props.crystal?.properties.map((propierty: string, idx: number) => {
            return (
              <li key={idx}>
                <HexaIcon className={styles.icon} />
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
        {props.crystal?.benefits.map((benefit: string, idx: number) => {
          return (
            <li key={idx}>
              <HexaIcon className={styles.icon} />
              <p>{benefit}</p>
              <HexaIcon className={styles.icon} />
            </li>
          );
        })}
      </ul>
      <TheZodiacCards zodiacs={props.crystal?.zodiac} />
    </section>
  );
}
