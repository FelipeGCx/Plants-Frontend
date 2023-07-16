import styles from "./style.module.scss";
import { CrystalFavorite, CrystalsQParams } from "../../../../types";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TheCrystalDetails from "./components/TheCrystalDetails";
import TheCrystalPagination from "./components/TheCrystalPagination";
import TheCrystalList from "./components/TheCrystalList";

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
      <TheCrystalList onDisplay={handlerDisplay} crystals={props.crystals} />
      <TheCrystalDetails crystal={crystal} display={display} />
    </section>
  );
}
