import styles from "./style.module.scss";
import Image from "next/image";
import { PlantStock } from "../../../../../../../types";
import renderPot from "./assets/doisu-render.webp";

export default function ThePlantPresentation(props: {
  plant: PlantStock;
  renderPot: string;
  addToCart(): void;
}) {
  const formatter = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });
  return (
    <section className={styles.presentation}>
      <div className={styles.picture}>
        <Image
          fill
          src={props.plant.render}
          alt={`image plant ${props.plant.name}`}
          sizes="100%"
        />
        {props.renderPot != "" ? (
          <Image
            fill
            src={props.renderPot}
            alt={`image pot`}
            sizes="100%"
            priority={true}
          />
        ) : (
          <Image
            fill
            src={renderPot}
            alt={`image potsadasdas`}
            sizes="100%"
            priority={true}
          />
        )}
      </div>
      <div className={styles.info}>
        <h1>{props.plant.name}</h1>
        <h2>{formatter.format(props.plant.price)}</h2>
        <p>{props.plant.description}</p>
        <button className="button" onClick={props.addToCart}>
          añadir al carrito
        </button>
      </div>
    </section>
  );
}
