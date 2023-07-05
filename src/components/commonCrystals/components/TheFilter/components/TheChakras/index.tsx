import Image from "next/image";
import crownIcon from "./assets/chakras/crown.svg";
import heartIcon from "./assets/chakras/heart.svg";
import rootIcon from "./assets/chakras/root.svg";
import sacralIcon from "./assets/chakras/sacral.svg";
import solarIcon from "./assets/chakras/root.svg";
import thirdEyeIcon from "./assets/chakras/third_eye.svg";
import throatIcon from "./assets/chakras/throat.svg";

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
export default function TheChakrasList(props: {
  chakras: string | string[] | null;
  changeSelected(filter: string, value: string): void;
}) {
  return (
    <ul>
      {chakras.map((item) => {
        return (
          <li key={item.name}>
            <input
              type="checkbox"
              name="chakra"
              id={item.name}
              onChange={() => props.changeSelected("chakras", item.value)}
              checked={props.chakras?.includes(item.value) || false}
            />
            <Image
              className="icon"
              src={item.icon}
              alt={item.alt}
              width={20}
              height={20}
            />
          </li>
        );
      })}
    </ul>
  );
}
