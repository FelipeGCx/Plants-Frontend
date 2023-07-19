import styles from "./style.module.scss";
import ThePlantPagination from "./components/ThePlantPagination";
import ThePlantList from "./components/ThePlantList";
import { PlantFavorite, PlantsQParams } from "../../../../types";
export default function ThePlantView(props: {
  plants: PlantFavorite[];
  totalPages: number;
  page: number;
  plantParams: PlantsQParams;
}) {
  return (
    <section className={styles.view}>
      <ThePlantPagination
        totalPages={props.totalPages}
        page={props.page}
        plantParams={props.plantParams}
      />
      <ThePlantList plants={props.plants} />
    </section>
  );
}
