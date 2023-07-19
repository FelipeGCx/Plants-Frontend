import { PlantFavorite } from "../../../../../../types";
import ThePlantCard from "./components/ThePlantCard";
import styles from "./style.module.scss";

export default function ThePlantList(props: { plants: PlantFavorite[] }) {
  return (
    <ul className={styles.items}>
      {props.plants.map((plant: PlantFavorite, i: number) => {
        return <ThePlantCard key={i} plant={plant} />;
      })}
    </ul>
  );
}
