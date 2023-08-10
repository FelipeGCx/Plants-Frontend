import styles from "./style.module.scss";
import { Plant } from "../../../../../../../types";

export default function ThePlantDetail(props: { plant: Plant }) {
  const extractLight = (lights: string) => {
    return lights.replace(/,/g, " -")
  }
  return (
    <section className={styles.plantDetail}>
      <h1>Especificaciones</h1>
      <ul>
        <li>Especie: {props.plant.species}</li>
        <li>Luz: {extractLight(props.plant.light)}</li>
        <li>Tamaño: {props.plant.size}</li>
        <li>Riego: {props.plant.irrigation}</li>
        <li>Temperatura: {props.plant.temperature}</li>
        <li>Precauciones: {props.plant.precautions}</li>
        <li>Floración: {props.plant.flowering ? "Sí" : "No"}</li>
        <li>Medida Matera: 7.5cm x 7cm</li>
      </ul>
    </section>
  );
}
