import styles from "./style.module.scss";
import Image from "next/image";
import {PlantStock } from "../../../../../../../types";

const formatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

export default function ThePlantPresentation(props: { plant: PlantStock, addToCart():void }) {
  return (
    <section className={styles.presentation}>
      <Image
        src={props.plant.plant.imageFront}
        alt={`image plant ${props.plant.plant.name}`}
        width={400}
        height={400}
      />
      <div>
        <h1>{props.plant.plant.name}</h1>
        <h2>{formatter.format(props.plant.price)}</h2>
        <p>{props.plant.plant.description}</p>
        <button className="button" onClick={props.addToCart}>añadir al carrito</button>
      </div>
    </section>
  );
}
