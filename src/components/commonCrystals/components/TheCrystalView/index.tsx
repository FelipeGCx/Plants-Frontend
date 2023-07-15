import styles from "./style.module.scss";
import { CrystalFavorite, CrystalsQParams } from "../../../../types";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TheCrystalCard from "./components/TheCrystalCard";
import TheCrystalDetails from "./components/TheCrystalDetails";
import TheCrystalPagination from "./components/TheCrystalPagination";

export default function TheCrystalView(props: {
  crystals: CrystalFavorite[];
  totalPages: number;
  page: number;
  crystalParams: CrystalsQParams;
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
      if (crystalSelected) {
        handlerDisplay("grid", crystalSelected?.id);
      } else {
        setDisplay("none");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  return (
    <section className={styles.view}>
      <TheCrystalPagination
        totalPages={props.totalPages}
        page={props.page}
        crystalParams={props.crystalParams}
      />
      <ul className={styles.items}>
        {props.crystals.map((crystal: CrystalFavorite) => {
          return (
            <TheCrystalCard
              key={crystal.id}
              crystal={crystal}
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
