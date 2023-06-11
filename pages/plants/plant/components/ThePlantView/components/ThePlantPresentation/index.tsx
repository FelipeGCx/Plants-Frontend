import styles from "./style.module.scss";
import Image from "next/image";
import { PlantStock, Pot } from "../../../../../../../types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

export default function ThePlantPresentation(props: { plant: PlantStock, addToCart(): void }) {
  const router = useRouter();
  const [pot, setPot] = useState<Pot>();
  useEffect(() => {
    async function fetchPot() {
      const id = router.query["pot"] || 1;
      const url = `https://plants-api-production.up.railway.app/api/v1/pots/${id}/`;
      const response = await fetch(url);
      setPot(await response.json());
    }
    fetchPot();
  }, [router])

  return (
    <section className={styles.presentation}>
      <div className={ styles.picture}>
        <Image
        fill
          src={props.plant.plant.render}
          alt={`image plant ${props.plant.plant.name}`}
          sizes='75%'
        />
        <Image
        fill
          src={pot?.render}
          alt={`image plant ${pot?.name}`}
          sizes='100%'

        />
      </div>
      <div className={ styles.info}>
        <h1>{props.plant.plant.name}</h1>
        <h2>{formatter.format(props.plant.price)}</h2>
        <p>{props.plant.plant.description}</p>
        <button className="button" onClick={props.addToCart}>añadir al carrito</button>
      </div>
    </section>
  );
}
