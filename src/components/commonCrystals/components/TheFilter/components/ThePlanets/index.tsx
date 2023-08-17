import styles from "../../style.module.scss";
import {
  EarthPlanetIcon,
  JupiterPlanetIcon,
  MarsPlanetIcon,
  MercuryPlanetIcon,
  MoonPlanetIcon,
  NeptunePlanetIcon,
  PlutoPlanetIcon,
  SaturnPlanetIcon,
  SunPlanetIcon,
  UranusPlanetIcon,
  VenusPlanetIcon,
} from "../../../../../../assets/icons";
const planets = [
  {
    name: "sun",
    icon: <SunPlanetIcon />,
    value: "sol",
    alt: "sun icon",
  },
  {
    name: "mercury",
    icon: <MercuryPlanetIcon />,
    value: "mercurio",
    alt: "mercury icon",
  },
  {
    name: "venus",
    icon: <VenusPlanetIcon />,
    value: "venus",
    alt: "venus icon",
  },
  {
    name: "earth",
    icon: <EarthPlanetIcon />,
    value: "tierra",
    alt: "earth icon",
  },
  {
    name: "mars",
    icon: <MarsPlanetIcon />,
    value: "marte",
    alt: "mars icon",
  },
  {
    name: "jupiter",
    icon: <JupiterPlanetIcon />,
    value: "jupiter",
    alt: "jupiter icon",
  },
  {
    name: "saturn",
    icon: <SaturnPlanetIcon />,
    value: "saturno",
    alt: "saturn icon",
  },
  {
    name: "uranus",
    icon: <UranusPlanetIcon />,
    value: "urano",
    alt: "uranus icon",
  },
  {
    name: "neptune",
    icon: <NeptunePlanetIcon />,
    value: "neptuno",
    alt: "neptune icon",
  },
  {
    name: "pluto",
    icon: <PlutoPlanetIcon />,
    value: "pluton",
    alt: "pluto icon",
  },
  {
    name: "moon",
    icon: <MoonPlanetIcon />,
    value: "luna",
    alt: "moon icon",
  },
];
export default function ThePlanetsList(props: {
  planets: string | string[] | null;
  changeSelected(filter: string, value: string): void;
}) {
  return (
    <ul>
      {planets.map((item) => {
        return (
          <li
            key={item.name}
            className={props.planets?.includes(item.value) ? styles.active : ""}
          >
            <input
              type="checkbox"
              name="chakra"
              id={item.name}
              onChange={() => props.changeSelected("planets", item.value)}
              checked={props.planets?.includes(item.value) || false}
            />
            {item.icon}
          </li>
        );
      })}
    </ul>
  );
}
