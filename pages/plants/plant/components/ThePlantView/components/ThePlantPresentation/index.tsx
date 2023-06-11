import styles from "./style.module.scss";
import Image from "next/image";
import { PlantStock } from "../../../../../../../types";

const formatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

export default function ThePlantPresentation(props: { plant: PlantStock, renderPot: string, addToCart(): void }) {
  return (
    <section className={styles.presentation}>
      <div className={styles.picture}>
        <Image
          fill
          src={props.plant.plant.render}
          alt={`image plant ${props.plant.plant.name}`}
          sizes="100%"
        />
        <Image
          fill
          src={props.renderPot}
          alt={`image pot`}
          sizes='100%'

        />
      </div>
      <div className={styles.info}>
        <h1>{props.plant.plant.name}</h1>
        <h2>{formatter.format(props.plant.price)}</h2>
        <p>{props.plant.plant.description}</p>
        <button className="button" onClick={props.addToCart}>añadir al carrito</button>
      </div>
    </section>
  );
}
