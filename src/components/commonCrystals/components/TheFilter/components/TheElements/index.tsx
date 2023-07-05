import Image from "next/image";
import air from "./assets/elements/air.svg";
import fire from "./assets/elements/fire.svg";
import water from "./assets/elements/water.svg";
import earth from "./assets/elements/earth.svg";

const elements = [
  {
    name: "air",
    icon: air,
    value: "aire",
    alt: "air icon",
  },
  {
    name: "fire",
    icon: fire,
    value: "fuego",
    alt: "fire icon",
  },
  {
    name: "water",
    icon: water,
    value: "agua",
    alt: "water icon",
  },
  {
    name: "earth",
    icon: earth,
    value: "tierra",
    alt: "earth icon",
  },
];
export default function TheElementsList(props: {
  elements: string | string[] | null;
  changeSelected(filter: string, value: string): void;
}) {
  return (
    <ul>
      {elements.map((item) => {
        return (
          <li key={item.name}>
            <input
              type="checkbox"
              name="chakra"
              id={item.name}
              onChange={() => props.changeSelected("elements", item.value)}
              checked={props.elements?.includes(item.value) || false}
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
