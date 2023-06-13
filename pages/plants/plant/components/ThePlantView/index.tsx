import styles from "./style.module.scss";
import TheCrystalSelect from "./components/TheCrystalSelect";
import { CrystalFav, PlantStock } from "../../../../../types";
import ThePlantPresentation from "./components/ThePlantPresentation";
import ThePlantDetail from "./components/ThePlantDetail";

export default function ThePlantView(props: {
  plant: PlantStock;
  crystal: CrystalFav;
  renderPot: string;
  addToCart(): void;
}) {
  
  return (
    <section className={styles.plantView}>
      <ThePlantPresentation
        plant={props.plant} addToCart={props.addToCart} renderPot={ props.renderPot}
      />
      <ThePlantDetail plant={props.plant.plant} />
      <TheCrystalSelect crystal={ props.crystal} />
    </section>
  );
}
