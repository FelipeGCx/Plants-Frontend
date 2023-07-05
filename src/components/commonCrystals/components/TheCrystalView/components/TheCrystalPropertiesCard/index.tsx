import Image from "next/image";
import styles from "./style.module.scss";
import { Crystal } from "../../../../../../types";


export default function TheCrystalPropertiesCard(props: { crystal: Crystal, order: number, display: string }) {
  return (
    <li
      className={styles.properties}
      style={{
        order: props.order,
        display: props.display,
      }}
    >
      <h1>{props.crystal.name}</h1>
      <Image
        className={styles.point}
        src={
          props.crystal.imageGemstone ||
          "https://firebasestorage.googleapis.com/v0/b/simple-a5eec.appspot.com/o/crystalsPoint%2Fnot%20found.png?alt=media&token=fd19155e-edb8-4e67-9e13-76a62cc59ce2"
        }
        alt={`${props.crystal.name} gemstone`}
        width={300}
        height={300}
      />
      <ul>
        {props.crystal.properties.map((propierty: string, p: number) => {
          return <li key={p}>{propierty}</li>;
        })}
      </ul>
      <ul>
        {props.crystal.zodiac.map((sign: string, z: number) => {
          return <li key={z}>{sign}</li>;
        })}
      </ul>
      <ul>
        {props.crystal.planets.map((planet: string, pl: number) => {
          return <li key={pl}>{planet}</li>;
        })}
      </ul>
    </li>
  )
}
