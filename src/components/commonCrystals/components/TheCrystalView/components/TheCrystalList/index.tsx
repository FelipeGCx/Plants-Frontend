import { CrystalFavorite } from "../../../../../../types";
import TheCrystalCard from "./components/TheCrystalCard";
import styles from "./style.module.scss";

export default function TheCrystalList(props: {
  crystals: CrystalFavorite[];
  onDisplay: (display: string, id:number) => void;
}) {
  return (
    <ul className={styles.items}>
      {props.crystals.map((crystal: CrystalFavorite) => {
        return (
          <TheCrystalCard
            key={crystal.id}
            crystal={crystal}
            onFavorite={function (): void {
              throw new Error("Function not implemented.");
            }}
            onDisplay={(display) => props.onDisplay(display, crystal.id)}
          />
        );
      })}
    </ul>
  );
}
