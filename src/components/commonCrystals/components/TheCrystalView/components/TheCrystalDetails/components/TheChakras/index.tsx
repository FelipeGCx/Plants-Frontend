import styles from "./style.module.scss";
import Image from "next/image";
import rootIcon from "./assets/chakras/root.svg";
import sacralIcon from "./assets/chakras/sacral.svg";
import solarIcon from "./assets/chakras/solar.svg";
import heartIcon from "./assets/chakras/heart.svg";
import throatIcon from "./assets/chakras/throat.svg";
import thirdEyeIcon from "./assets/chakras/third_eye.svg";
import crownIcon from "./assets/chakras/crown.svg";

const chakras = [
  {
    name: "crown",
    icon: crownIcon,
    value: "crown chakra",
    alt: "crown icon",
  },
  {
    name: "heart",
    icon: heartIcon,
    value: "heart chakra",
    alt: "heart icon",
  },
  {
    name: "root",
    icon: rootIcon,
    value: "root chakra",
    alt: "root icon",
  },
  {
    name: "sacral",
    icon: sacralIcon,
    value: "sacral chakra",
    alt: "sacral icon",
  },
  {
    name: "solar",
    icon: solarIcon,
    value: "solar plexus chakra",
    alt: "solar icon",
  },
  {
    name: "third eye",
    icon: thirdEyeIcon,
    value: "third eye chakra",
    alt: "third eye icon",
  },
  {
    name: "throat",
    icon: throatIcon,
    value: "throat chakra",
    alt: "throat icon",
  },
];

export default function TheChakras(props: {
  chakras?: string | string[] | null;
}) {
  return (
    <ul className={styles.chakras}>
      {chakras.map((chakra: any, index: number) => {
        return (
          <li
            key={index}
            className={
              props.chakras?.includes(chakra.value) ? styles.active : ""
            }
          >
            <Image src={chakra.icon} alt={chakra.alt} width={30} height={30} />
            <h3>{ chakra.name} chakra</h3>
          </li>
        );
      })}
    </ul>
  );
}
