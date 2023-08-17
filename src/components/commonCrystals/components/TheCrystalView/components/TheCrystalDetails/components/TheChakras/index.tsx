import styles from "./style.module.scss";
import { CrownChakraLogo, HeartChakraLogo, RootChakraLogo, SacralChakraLogo, SolarChakraLogo, ThirdEyeChakraLogo, ThroatChakraLogo } from "../../../../../../../../assets/icons";
const chakras = [
  {
    name: "crown",
    icon: <CrownChakraLogo className={styles.icon}/>,
    value: "crown chakra",
    alt: "crown icon",
  },
  {
    name: "heart",
    icon: <HeartChakraLogo className={styles.icon}/>,
    value: "heart chakra",
    alt: "heart icon",
  },
  {
    name: "root",
    icon: <RootChakraLogo className={styles.icon}/>,
    value: "root chakra",
    alt: "root icon",
  },
  {
    name: "sacral",
    icon: <SacralChakraLogo className={styles.icon}/>,
    value: "sacral chakra",
    alt: "sacral icon",
  },
  {
    name: "solar",
    icon: <SolarChakraLogo className={styles.icon}/>,
    value: "solar plexus chakra",
    alt: "solar icon",
  },
  {
    name: "third eye",
    icon: <ThirdEyeChakraLogo className={styles.icon}/>,
    value: "third eye chakra",
    alt: "third eye icon",
  },
  {
    name: "throat",
    icon: <ThroatChakraLogo className={styles.icon}/>,
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
              props.chakras?.includes(chakra.value) ? styles.active : styles.inactive
            }
          >
            {chakra.icon}
            <h3>{ chakra.name} chakra</h3>
          </li>
        );
      })}
    </ul>
  );
}
