import styles from "./style.module.scss";
import TheCrystalSelect from "./components/TheCrystalSelect";
import { CrystalFavorite, PlantStock, Pot } from "../../../../../types";
import ThePlantPresentation from "./components/ThePlantPresentation";
import ThePlantDetail from "./components/ThePlantDetail";

export default function ThePlantView(props: {
  plant: PlantStock;
  crystal: CrystalFavorite;
  pot: Pot;
  addToCart(): void;
}) {
  
  return (
    <section className={styles.plantView}>
      <ThePlantPresentation
        plant={props.plant} addToCart={props.addToCart} renderPot={ props.pot.render}
      />
      <ThePlantDetail plant={props.plant} potSize={props.pot.size}/>
      <TheCrystalSelect crystal={ props.crystal} />
    </section>
  );
}
