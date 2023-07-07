import styles from "./style.module.scss";

import Image from "next/image";
import sunIcon from "./assets/sun.png";
import mercuryIcon from "./assets/mercury.png";
import venusIcon from "./assets/venus.png";
import earthIcon from "./assets/earth.png";
import marsIcon from "./assets/mars.png";
import jupiterIcon from "./assets/jupiter.png";
import saturnIcon from "./assets/saturn.png";
import uranusIcon from "./assets/uranus.png";
import neptuneIcon from "./assets/neptune.png";
import plutoIcon from "./assets/pluto.png";
import moonIcon from "./assets/pluto.png";

const planets = [
  {
    name: "neptune",
    icon: neptuneIcon,
    value: "neptuno",
    alt: "neptune icon",
    height: 25,
    width: 25,
  },
  {
    name: "mars",
    icon: marsIcon,
    value: "marte",
    alt: "mars icon",
    height: 18,
    width: 18,
  },
  {
    name: "earth",
    icon: earthIcon,
    value: "tierra",
    alt: "earth icon",
    height: 20,
    width: 20,
  },
  {
    name: "moon",
    icon: moonIcon,
    value: "luna",
    alt: "moon icon",
    height: 8,
    width: 8,
  },
  {
    name: "venus",
    icon: venusIcon,
    value: "venus",
    alt: "venus icon",
    height: 15,
    width: 15,
  },
  {
    name: "mercury",
    icon: mercuryIcon,
    value: "mercurio",
    alt: "mercury icon",
    height: 10,
    width: 10,
  },
  {
    name: "sun",
    icon: sunIcon,
    value: "sol",
    alt: "sun icon",
    height: 35,
    width: 35,
  },
  {
    name: "saturn",
    icon: saturnIcon,
    value: "saturno",
    alt: "saturn icon",
    height: 15,
    width: 36,
  },
  {
    name: "uranus",
    icon: uranusIcon,
    value: "urano",
    alt: "uranus icon",
    height: 25,
    width: 25,
  },
  {
    name: "jupiter",
    icon: jupiterIcon,
    value: "jupiter",
    alt: "jupiter icon",
    height: 30,
    width: 30,
  },
  {
    name: "pluto",
    icon: plutoIcon,
    value: "pluton",
    alt: "pluto icon",
    height: 9,
    width: 9,
  },
];

export default function ThePlanets(props: {
  planets?: string | string[] | null;
}) {
  return (
    <ul className={styles.planets}>
      {planets.map((planet: any, index: number) => {
        return (
          <li
            key={index}
            className={
              props.planets?.includes(planet.value) ? styles.active : ""
            }
          >
            <Image
              src={planet.icon}
              alt={planet.alt}
              width={planet.width}
              height={planet.height}
            ></Image>
          </li>
        );
      })}
    </ul>
  );
}
