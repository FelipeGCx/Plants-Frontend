import styles from "./style.module.scss";
import Image from "next/image";
import favoriteFilled from "./assets/favorite_filled.svg";
import favoriteOutline from "./assets/favorite_outline.svg";
import Link from "next/link";

const formatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

type Plant = {
  id: number;
  name: string;
  quantity: number;
  discount: number;
  createdAt: Date;
  favorite: boolean;
  imageFront: string;
  vibration: number;
  price: number;
};

export default function ThePlantCard(props: { plant: Plant }) {
  return (
    <li key={props.plant.id} className={styles.card} id={props.plant.name}>
      <Link href={`/plants/plant/${props.plant.id}`} className={styles.content} >
        <div className={styles.details}>
          <div
            className={styles.detail}
            style={{
              opacity:
                props.plant.quantity <= 0
                  ? "1"
                  : props.plant.createdAt
                  ? "1"
                  : !props.plant.discount
                  ? "0"
                  : "1",
            }}
          >
            {!props.plant.quantity
              ? "Agotada"
              : props.plant.createdAt
              ? "Nuevo"
              : `${props.plant.discount}%`}
          </div>
          <Image
            className={(styles.favorite, "icon")}
            src={props.plant.favorite ? favoriteFilled : favoriteOutline}
            alt="favorite icon plant"
            width={18}
            height={18}
          />
        </div>
        <Image
          className={styles.point}
          src={
            props.plant.imageFront ||
            "https://firebasestorage.googleapis.com/v0/b/simple-a5eec.appspot.com/o/crystalsPoint%2Fnot%20found.png?alt=media&token=fd19155e-edb8-4e67-9e13-76a62cc59ce2"
          }
          alt={`${props.plant.name} plant frontal image`}
          width={300}
          height={300}
        />
        <h2 className={styles.nameplant}>{props.plant.name.toLowerCase()}</h2>
        <div className={styles.price}>
          {formatter.format(props.plant.price)}
        </div>
      </Link>
    </li>
  );
}
