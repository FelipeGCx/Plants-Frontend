import styles from "../../style.module.scss";
import {
  AirIcon,
  EarthIcon,
  FireIcon,
  WaterIcon,
} from "../../../../../../assets/icons";

const elements = [
  {
    name: "air",
    icon: <AirIcon />,
    value: "aire",
    alt: "air icon",
  },
  {
    name: "fire",
    icon: <FireIcon />,
    value: "fuego",
    alt: "fire icon",
  },
  {
    name: "water",
    icon: <WaterIcon />,
    value: "agua",
    alt: "water icon",
  },
  {
    name: "earth",
    icon: <EarthIcon />,
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
          <li
            key={item.name}
            className={props.elements?.includes(item.value) ? styles.active : ""}
          >
            <input
              type="checkbox"
              name="chakra"
              id={item.name}
              onChange={() => props.changeSelected("elements", item.value)}
              checked={props.elements?.includes(item.value) || false}
            />
            {item.icon}
          </li>
        );
      })}
    </ul>
  );
}
