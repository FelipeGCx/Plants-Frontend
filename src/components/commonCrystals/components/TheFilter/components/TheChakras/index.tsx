import styles from "../../style.module.scss";
import {
  CrownChakraLogo,
  HeartChakraLogo,
  RootChakraLogo,
  SacralChakraLogo,
  SolarChakraLogo,
  ThirdEyeChakraLogo,
  ThroatChakraLogo,
} from "../../../../../../assets/icons";
const chakras = [
  {
    name: "crown",
    icon: <CrownChakraLogo />,
    value: "crown chakra",
    alt: "crown icon",
  },
  {
    name: "heart",
    icon: <HeartChakraLogo />,
    value: "heart chakra",
    alt: "heart icon",
  },
  {
    name: "root",
    icon: <RootChakraLogo />,
    value: "root chakra",
    alt: "root icon",
  },
  {
    name: "sacral",
    icon: <SacralChakraLogo />,
    value: "sacral chakra",
    alt: "sacral icon",
  },
  {
    name: "solar",
    icon: <SolarChakraLogo />,
    value: "solar plexus chakra",
    alt: "solar icon",
  },
  {
    name: "third eye",
    icon: <ThirdEyeChakraLogo />,
    value: "third eye chakra",
    alt: "third eye icon",
  },
  {
    name: "throat",
    icon: <ThroatChakraLogo />,
    value: "throat chakra",
    alt: "throat icon",
  },
];
export default function TheChakrasList(props: {
  chakras: string | string[] | null;
  changeSelected(filter: string, value: string): void;
}) {
  return (
    <ul>
      {chakras.map((item) => {
        return (
          <li
            key={item.name}
            className={props.chakras?.includes(item.value) ? styles.active : ""}
          >
            <input
              type="checkbox"
              name="chakra"
              id={item.name}
              onChange={() => props.changeSelected("chakras", item.value)}
              checked={props.chakras?.includes(item.value) || false}
            />
            {item.icon}
          </li>
        );
      })}
    </ul>
  );
}
