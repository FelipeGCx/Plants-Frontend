import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import zodiac from "./zodiac";
import vibration from "./assets/vibration.svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Crystal } from "../../../../../../../types";

export default function TheCrystalSelect() {
  const router = useRouter();
  const [crystal, setCrystal] = useState<Crystal>(
    {
      id: 1,
      name: "agate",
      description: "",
      vibration: 7,
      benefits: [
        "estabilización y puesta a tierra cuando estás abrumado",
        "apoya una conexión profunda con la Tierra y la naturaleza",
        "ayuda a aceptarte y amarte tal como eres"
      ],
      properties: [
        "conexión con la tierra",
        "energia fisica",
        "confianza"
      ],
      zodiac: [
        "geminis",
        "virgo"
      ],
      planets: [
        "luna"
      ],
      elements: [
        "tierra"
      ],
      chakras: [
        "root chakra"
      ],
      imageCrystal: "https://firebasestorage.googleapis.com/v0/b/simple-a5eec.appspot.com/o/crystalsPoints%2Fagate.webp?alt=media&token=be20e165-8b12-4679-b39c-e508f7990ce4",
      imageGemstone: "https://firebasestorage.googleapis.com/v0/b/simple-a5eec.appspot.com/o/crystalsGemstones%2Fagate.webp?alt=media&token=30d51e3b-038a-4374-860a-263074bd29ff",
    }
  );

  useEffect(() => {
    async function fetchData() {
      const id = router.query["crystal"] || 1;
      const url = `https://plants-api-production.up.railway.app/api/v1/crystals/${id}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCrystal(data);
      } catch (error) {
        
      }
    }
    fetchData();
  },[router])
  return (
    <section className={styles.crystalCard}>
      <Image
        className={styles.crystalImage}
        src={crystal.imageCrystal}
        alt={`Image ${crystal.name} Double point Crystal`}
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
          {crystal.properties.map((c, ci:number) => {
            return <li key={ci}>{c}</li>;
          })}
        </ul>
        <ul className={styles.zodiac}>
          {zodiac.map((z, zi:number) => {
            if (crystal.zodiac.includes(z.name)) {
              return (
                <li key={zi}>
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
