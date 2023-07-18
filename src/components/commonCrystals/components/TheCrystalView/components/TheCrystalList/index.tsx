import { CrystalFavorite } from "../../../../../../types";
import TheCrystalCard from "./components/TheCrystalCard";
import styles from "./style.module.scss";
import { useEffect, useRef } from "react";

export default function TheCrystalList(props: {
  crystals: CrystalFavorite[];
  onDisplay: (display: string, id: number) => void;
}) {
  const containerRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const scroll = () => {
      if (containerRef.current) {
        containerRef.current.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    };
    scroll();
  }, [props.crystals]);
  return (
    <ul className={styles.items} ref={containerRef}>
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
