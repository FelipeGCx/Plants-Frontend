import styles from "./style.module.scss";
import { CrystalFavorite } from "../../../../types";
import { useState } from "react";
import TheCrystalCard from "./components/TheCrystalCard";
import TheCrystalDetails from "./components/TheCrystalDetails";
import TheCrystalPropertiesCard from "./components/TheCrystalPropertiesCard";
import TheCrystalBenefitsCard from "./components/TheCrystalBenefitsCard";

export default function TheCrystalView(props: {
  crystals: CrystalFavorite[];
  totalItems: number;
}) {
  const [crystal, setCrystal] = useState<CrystalFavorite>();
  const handlerDisplay = (crystalId: number) => {
    console.log(crystalId);
    const crystalSelected = props.crystals.find(
      (crystal) => crystal.id === crystalId
    );
    console.log(crystalSelected);
    if (crystalSelected) setCrystal(crystalSelected);
  };
  return (
    <section className={styles.view}>
      <ul className={styles.items}>
        {/* {props.crystals.map((crystal: CrystalFavorite, i: number) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const [order, setOrder] = useState((props.totalItems - i) * -1);
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const [display, setDisplay] = useState("none");
          function getNewOrder(oldOrder: number, cols: number) {
            let n = oldOrder;
            let flag = true;
            while (flag) {
              if (n <= cols) {
                flag = false;
              } else {
                n -= cols;
              }
            }
            setOrder(order - n);
          }
          return (
            <>
              <TheCrystalCard key={i}
                crystal={crystal}
                idx={i}
                totalItems={props.totalItems}
                order={order}
                onFavorite={function (): void {
                  throw new Error("Function not implemented.");
                }}
                onNewOrder={function (oldOrder: number): void {
                  getNewOrder(oldOrder, 5)
                }}
                onDisplay={function (display: string): void {
                  setDisplay(display);
                }}
                onOrder={function (order: number): void {
                  setOrder(order);
                }} />
              <TheCrystalPropertiesCard crystal={crystal} order={order} display={display} />
              <TheCrystalBenefitsCard crystal={crystal} order={order} display={display} />
            </>
          );
        })} */}
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
              onNewOrder={function (oldOrder: number): void {
                // getNewOrder(oldOrder, 5);
              }}
              onDisplay={() => handlerDisplay(crystal.id)}
              onOrder={function (order: number): void {
                // setOrder(order);
              }}
            />
          );
        })}
      </ul>
      <TheCrystalDetails crystal={crystal} />
    </section>
  );
}
