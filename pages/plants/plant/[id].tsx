import styles from "./style.module.scss";
import ThePotSelector from "./components/ThePotSelector";
import TheCrystalSelector from "./components/TheCrystalSelector";
import ThePlantView from "./components/ThePlantView";
import crystal from "./crystal.json";
import { useRouter } from "next/router";
import { PlantView } from "../../../types";
import { useEffect, useState } from "react";

const Plant = (props: { plant: PlantView }) => {
  const router = useRouter();
  const [idPot, setPot] = useState(router.query["pot"]);

  const ccc = {
    id: crystal.id,
    name: crystal.name,
    properties: crystal.properties,
    benefits: crystal.benefits,
    description: crystal.description,
    vibration: crystal.vibration,
    zodiac: crystal.zodiac,
    imageGemstone: crystal.imageGemstone,
    imageCrystal: crystal.imageCrystal,
    elements: crystal.elements,
    planets: crystal.planets,
    favorite: true,
  };
  return (
    <main className={styles.main}>
      <ThePotSelector id={+idPot} />
      <ThePlantView plant={props.plant} crystal={ccc} />
      <TheCrystalSelector />
    </main>
  );
};

Plant.getInitialProps = async (context: { query: { id: any } }) => {
  const { id } = context.query;
  console.log("°°°THE ID°°°", id);
  let uri = `https://plants-api-production.up.railway.app/api/v1/stock/plants/${id}/`;
  const response = await fetch(uri);
  const plant = await response.json();
  console.log("°°°THE PLANT°°°", plant);
  return { plant };
};

export default Plant;
