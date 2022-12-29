import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import zodiac from "./zodiac";
import vibration from "./assets/vibration.svg";

type Plant = {
  name: string;
  properties: Array<string>;
  vibration: number;
  zodiac: Array<string>;
  imageCrystal: string;
};

export default function ThePlantDetail(plant: Plant) {
  return (
    <section className={styles.plantDetail}>
      
    </section>
  );
}
