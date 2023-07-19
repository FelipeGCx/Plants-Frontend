import { PlantFavorite } from "../../../../../../types";
import ThePlantCard from "./components/ThePlantCard";
import styles from "./style.module.scss";
import { useEffect, useRef } from "react";

export default function ThePlantList(props: { plants: PlantFavorite[] }) {
  const containerRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    console.log("cambi", containerRef);
    const scroll = () => {
      if (containerRef.current) {
        containerRef.current.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    };
    scroll();
  }, [props.plants]);
  return (
    <ul className={styles.items} ref={containerRef}>
      {props.plants.map((plant: PlantFavorite, i: number) => {
        return <ThePlantCard key={i} plant={plant} />;
      })}
    </ul>
  );
}
