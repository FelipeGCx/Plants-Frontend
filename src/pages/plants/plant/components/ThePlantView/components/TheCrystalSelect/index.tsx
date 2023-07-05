import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import zodiac from "./assets/zodiac";
import vibration from "./assets/vibration.svg";
import link from "./assets/link.svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CrystalFavorite } from "../../../../../../../types";

export default function TheCrystalSelect(props: { crystal: CrystalFavorite }) {
  const router = useRouter();
  return (
    <section className={styles.crystalCard}>
      <Image
        className={styles.crystalImage}
        src={props.crystal.imageCrystal}
        alt={`Image ${props.crystal.name} Double point Crystal`}
        width={150}
        height={150}
      />
      <div className={styles.data}>
        <div className={styles.info}>
          <div className={styles.details}>
            <h1>{props.crystal.name}</h1>
            <div className={styles.vibration}>
              <span>{props.crystal.vibration}</span>
              <Image
                src={vibration}
                alt="icon vibration"
                width={48}
                height={48}
              />
            </div>
          </div>
          <Link
            href={{
              pathname: "/crystals",
              query: { name: props.crystal.name },
            }}
          >
            <Image
              src={link}
              alt="icon open reference"
              width={48}
              height={48}
            />
          </Link>
        </div>
        <ul className={styles.properties}>
          {props.crystal.properties.map((c, ci: number) => {
            return <li key={ci}>{c}</li>;
          })}
        </ul>
        <ul className={styles.zodiac}>
          {zodiac.map((z:any, zi: number) => {
            if (props.crystal.zodiac.includes(z.value)) {
              return (
                <li key={zi}>
                  <Image src={z.icon} alt={z.alt} width={48} height={48} />
                </li>
              );
            }
          })}
        </ul>
      </div>
    </section>
  );
}
