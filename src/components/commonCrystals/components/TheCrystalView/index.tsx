import styles from "./style.module.scss";
import { CrystalFavorite } from "../../../../types";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TheCrystalCard from "./components/TheCrystalCard";
import TheCrystalDetails from "./components/TheCrystalDetails";

export default function TheCrystalView(props: {
  crystals: CrystalFavorite[];
  totalItems: number;
}) {
  const [crystal, setCrystal] = useState<CrystalFavorite>();
  const [display, setDisplay] = useState("none");
  const router = useRouter();
  const handlerDisplay = (display: string, crystalId: number) => {
    console.table({
      display: display,
      crystalId: crystalId,
    });
    setDisplay(display);
    const crystalSelected = props.crystals.find(
      (crystal) => crystal.id === crystalId
    );
    if (crystalSelected) setCrystal(crystalSelected);
  };
  useEffect(() => {
    const name = router.query["name"];
    if (name) {
      const crystalSelected = props.crystals.find(
        (crystal) => crystal.name === name
      );
      console.log(crystalSelected);
      if (crystalSelected) {
        handlerDisplay("grid", crystalSelected?.id);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  return (
    <section className={styles.view}>
      <ul className={styles.items}>
        {props.crystals.map((crystal: CrystalFavorite) => {
          return (
            <TheCrystalCard
              key={crystal.id}
              crystal={crystal}
              idx={crystal.id}
              totalItems={props.totalItems}
              order={0}
              onFavorite={function (): void {
                throw new Error("Function not implemented.");
              }}
              onDisplay={(display) => handlerDisplay(display, crystal.id)}
            />
          );
        })}
      </ul>
      <TheCrystalDetails crystal={crystal} display={display} />
    </section>
  );
}
