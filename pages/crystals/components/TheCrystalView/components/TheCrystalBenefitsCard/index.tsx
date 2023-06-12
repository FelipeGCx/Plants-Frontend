import Image from "next/image";
import styles from "./style.module.scss";
import React from "react";
import { Crystal } from "../../../../../../types";

import rootChakra from "./assets/chakras/root.svg";
import sacralChakra from "./assets/chakras/sacral.svg";
import solarPlexoChakra from "./assets/chakras/solar.svg";
import heartChakra from "./assets/chakras/heart.svg";
import throatChakra from "./assets/chakras/throat.svg";
import thridEyeChakra from "./assets/chakras/third_eye.svg";
import crownChakra from "./assets/chakras/crown.svg";

export default function TheCrystalBenefitsCard(props: { crystal: Crystal, order: number, display: string }) {
  return (
    <li
      className={styles.benefits}
      style={{
        order: props.order,
        display: props.display,
      }}
    >
      <p>{props.crystal.description}</p>
      <ul>
        {props.crystal.benefits.map((benefit: string, b: number) => {
          return <li key={b}>{benefit}</li>;
        })}
      </ul>
      <ul className={styles.chakras}>
        <li>
          <Image
            src={rootChakra}
            alt="icon root chakra"
            style={{
              filter: props.crystal.chakras.includes("root chakra")
                ? "drop-shadow(2px 4px 6px #ffffffa8)"
                : "brightness(0.5) contrast(10) invert(1) grayscale(2) invert(1) brightness(0) contrast(0.5)",
              opacity: props.crystal.chakras.includes("root chakra")
                ? "100%"
                : "10%",
            }}
            width={40}
            height={40}
          />
          <h3>root chakra</h3>
        </li>
        <li>
          <Image
            src={sacralChakra}
            alt="icon sacral chakra"
            style={{
              filter: props.crystal.chakras.includes("sacral chakra")
                ? "drop-shadow(2px 4px 6px #ffffffa8)"
                : "brightness(0.5) contrast(10) invert(1) grayscale(2) invert(1) brightness(0) contrast(0.5)",
              opacity: props.crystal.chakras.includes("sacral chakra")
                ? "100%"
                : "10%",
            }}
            width={40}
            height={40}
          />
          <h3>sacral chakra</h3>
        </li>
        <li>
          <Image
            src={solarPlexoChakra}
            alt="icon solar plexus chakra"
            style={{
              filter: props.crystal.chakras.includes("solar plexus chakra")
                ? "drop-shadow(2px 4px 6px #ffffffa8)"
                : "brightness(0.5) contrast(10) invert(1) grayscale(2) invert(1) brightness(0) contrast(0.5)",
              opacity: props.crystal.chakras.includes(
                "solar plexus chakra"
              )
                ? "100%"
                : "10%",
            }}
            width={40}
            height={40}
          />
          <h3>solar plexus chakra</h3>
        </li>
        <li>
          <Image
            src={heartChakra}
            alt="icon heart chakra"
            style={{
              filter: props.crystal.chakras.includes("heart chakra")
                ? "drop-shadow(2px 4px 6px #ffffffa8)"
                : "brightness(0.5) contrast(10) invert(1) grayscale(2) invert(1) brightness(0) contrast(0.5)",
              opacity: props.crystal.chakras.includes("heart chakra")
                ? "100%"
                : "10%",
            }}
            width={40}
            height={40}
          />
          <h3>heart chakra</h3>
        </li>
        <li>
          <Image
            src={throatChakra}
            alt="icon throat chakra"
            style={{
              filter: props.crystal.chakras.includes("throat chakra")
                ? "drop-shadow(2px 4px 6px #ffffffa8)"
                : "brightness(0.5) contrast(10) invert(1) grayscale(2) invert(1) brightness(0) contrast(0.5)",
              opacity: props.crystal.chakras.includes("throat chakra")
                ? "100%"
                : "10%",
            }}
            width={40}
            height={40}
          />
          <h3>throat chakra</h3>
        </li>
        <li>
          <Image
            src={thridEyeChakra}
            alt="icon third eye chakra"
            style={{
              filter: props.crystal.chakras.includes("third eye chakra")
                ? "drop-shadow(2px 4px 6px #ffffffa8)"
                : "brightness(0.5) contrast(10) invert(1) grayscale(2) invert(1) brightness(0) contrast(0.5)",
              opacity: props.crystal.chakras.includes("third eye chakra")
                ? "100%"
                : "10%",
            }}
            width={40}
            height={40}
          />
          <h3>third eye chakra</h3>
        </li>
        <li>
          <Image
            src={crownChakra}
            alt="icon crown chakra"
            style={{
              filter: props.crystal.chakras.includes("crown s")
                ? "drop-shadow(2px 4px 6px #ffffffa8)"
                : "brightness(0.5) contrast(10) invert(1) grayscale(2) invert(1) brightness(0) contrast(0.5)",
              opacity: props.crystal.chakras.includes("crown chakra")
                ? "100%"
                : "10%",
            }}
            width={40}
            height={40}
          />
          <h3>crown chakra</h3>
        </li>
      </ul>
    </li>
  );
};
