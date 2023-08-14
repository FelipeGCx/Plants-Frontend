import styles from "./style.module.scss";
import { Plant } from "../../../../../../../types";

export default function ThePlantDetail(props: {
  plant: Plant;
  potSize: string;
}) {
  const joinLigths = (lights: Array<string>) => {
    return lights.join(" - ");
  };
  return (
    <section className={styles.plantDetail}>
      <h1>Especificaciones</h1>
      <ul>
        <li>Especie: {props.plant.species}</li>
        <li>Luz: {joinLigths(props.plant.light)}</li>
        <li>Tamaño: {props.plant.size}</li>
        <li>Riego: {props.plant.irrigation}</li>
        <li>Temperatura: {props.plant.temperature}</li>
        <li>Precauciones: {props.plant.precautions}</li>
        <li>Floración: {props.plant.flowering ? "Sí" : "No"}</li>
        <li>Medida Matera:{props.potSize}</li>
      </ul>
    </section>
  );
}
