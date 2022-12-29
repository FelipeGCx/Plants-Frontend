import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import zodiac from "./zodiac";
import vibration from "./assets/vibration.svg";

type Crystal = {
  name: string;
  properties: Array<string>;
  vibration: number;
  zodiac: Array<string>;
  imageCrystal: string;
};

export default function TheCrystalSelect(crystal: Crystal) {
  return (
    <section className={styles.crystalCard}>
      <Image
        className={styles.crystalImage}
        src={crystal.imageCrystal}
        alt={`Image ${crystal.name} Double point Crystall`}
        width={150}
        height={150}
      />
      <div className={styles.data}>
        <div className={styles.info}>
          <div className={styles.details}>
            <h1>{crystal.name}</h1>
            <div className={styles.vibration}>
              <span>{crystal.vibration}</span>
              <Image
                src={vibration}
                alt="icon vibration"
                width={48}
                height={48}
              />
            </div>
          </div>
          <Link href={`crystals/${crystal.name}`}>
            <Image
              src={vibration}
              alt="icon open reference"
              width={48}
              height={48}
            />
          </Link>
        </div>
        <ul className={styles.properties}>
          {crystal.properties.map((c) => {
            return <li>{c}</li>;
          })}
        </ul>
        <ul className={styles.zodiac}>
          {zodiac.map((z) => {
            if (crystal.zodiac.includes(z.name)) {
              return (
                <li>
                  <Image src={z.icon} alt={z.alt} width={48} height={48} />
                </li>
              );
            }
          })}
        </ul>
      </div>
    </section>
  );
}
