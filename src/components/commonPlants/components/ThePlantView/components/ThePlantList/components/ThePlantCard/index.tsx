import styles from "./style.module.scss";
import Image from "next/image";
import favoriteFilled from "./assets/favorite_filled.svg";
import favoriteOutline from "./assets/favorite_outline.svg";
import Link from "next/link";
import { PlantFavorite } from "../../../../../../../../types";
import {
  FavoriteOffIcon,
  FavoriteOnIcon,
} from "../../../../../../../../assets/icons";

const formatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

export default function ThePlantCard(props: { plant: PlantFavorite }) {
  return (
    <li key={props.plant.id} className={styles.card} id={props.plant.name}>
      <Link
        href={`/plants/plant/${props.plant.id}/?pot=1`}
        className={styles.content}
      >
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
          {props.plant.favorite ? (
            <FavoriteOnIcon className={styles.favorite} />
          ) : (
            <FavoriteOffIcon className={styles.favorite} />
          )}
          {/* <Image
            className={(styles.favorite, "icon")}
            src={props.plant.favorite ? favoriteFilled : favoriteOutline}
            alt="favorite icon plant"
            width={18}
            height={18}
          /> */}
        </div>
        <Image
          className={styles.point}
          src={props.plant.imageFront}
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
