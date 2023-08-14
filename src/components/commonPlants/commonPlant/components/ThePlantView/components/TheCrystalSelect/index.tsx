import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import TheZodiacList from "./components/TheZodiac";
import { CrystalFavorite } from "../../../../../../../types";
import { VibrationIcon, LinkIcon } from "../../../../../../../assets/icons";

export default function TheCrystalSelect(props: { crystal: CrystalFavorite }) {
  return (
    <section className={styles.crystalCard}>
      <Image
        className={styles.crystalImage}
        src={props.crystal.imageCrystal}
        alt={`punta de crystal ${props.crystal.name}`}
        width={150}
        height={150}
      />
      <div className={styles.data}>
        <div className={styles.info}>
          <div className={styles.details}>
            <h1>{props.crystal.name}</h1>
            <div className={styles.vibration}>
              <span>{props.crystal.vibration}</span>
              <VibrationIcon className={styles.icon} />
            </div>
          </div>
          <Link
            href={{
              pathname: "/crystals",
              query: { name: props.crystal.name },
            }}
          >
            <LinkIcon className={styles.icon} />
          </Link>
        </div>
        <ul className={styles.properties}>
          {props.crystal.properties.map((property, idx: number) => {
            return <li key={idx}>{property}</li>;
          })}
        </ul>
        <TheZodiacList zodiacs={props.crystal.zodiac} />
      </div>
    </section>
  );
}
