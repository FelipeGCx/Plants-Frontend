import styles from "./style.module.scss";
import TheCrystalSelect from "./components/TheCrystalSelect";
import { PlantStock } from "../../../../../types";
import ThePlantPresentation from "./components/ThePlantPresentation";
import ThePlantDetail from "./components/ThePlantDetail";

export default function ThePlantView(props: {
  plant: PlantStock;
  addToCart(): void;
}) {
  
  return (
    <section className={styles.plantView}>
      <ThePlantPresentation
        plant={props.plant} addToCart={props.addToCart}
      />
      <ThePlantDetail plant={props.plant.plant} />
      <TheCrystalSelect />
    </section>
  );
}
