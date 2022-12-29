import styles from "./style.module.scss";
import Image from "next/image";
import ThePotSelector from "../../../components/ThePotSelector";
import TheCrystalSelector from "../../../components/TheCrystalSelector";
import ThePlantView from "../../../components/ThePlantView";
import crystal from "./crystal.json";

export default function Plant() {
  return (
    <main className={styles.main}>
      <ThePotSelector />
      <ThePlantView
        id={crystal.id}
        name={crystal.name}
        properties={crystal.properties}
        benefits={crystal.benefits}
        description={crystal.description}
        vibration={crystal.vibration}
        zodiac={crystal.zodiac}
        imageGemstone={crystal.imageGemstone}
        imageCrystal={crystal.imageCrystal}
        elements={crystal.elements}
        planets={crystal.planets}
        favorite={true}
      />
      <TheCrystalSelector />
    </main>
  );
}
