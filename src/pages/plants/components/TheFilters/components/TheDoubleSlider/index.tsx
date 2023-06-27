import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { useRouter } from 'next/router';

export default function DoubleSlider(props: { minPrice: number, maxPrice: number, onPriceChange: (minPrice: number, maxPrice: number) => void; }) {
  const router = useRouter();
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(0);

  useEffect(() => {
    function getValues() {
      const min = router.query["priceFirst"] || props.minPrice;
      const max = router.query["priceSecond"] || props.maxPrice;
      setMinVal(+min);
      setMaxVal(+max);
    }
    getValues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handlerChangeLeft = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = +event.target.value;
    newValue = newValue >= maxVal ? minVal : newValue;
    setMinVal(newValue);
    props.onPriceChange(newValue, maxVal);
  }
  const handlerChangeRigth = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = +event.target.value;
    newValue = newValue <= minVal ? maxVal : newValue;
    setMaxVal(newValue);
    props.onPriceChange(minVal, newValue);
  }
  return (
    <div className={styles.container}>
      <h1>Precio</h1>
      <div className={styles.prices}><span>{minVal.toLocaleString('es-ES') + " COP"}</span> - <span>{maxVal.toLocaleString('es-ES') + " COP"}</span></div>
      <div className={styles.slider}>
        <input
          type="range"
          min={props.minPrice}
          max={props.maxPrice}
          value={minVal}
          className={`${styles.thumb} ${styles.left}`}
          onChange={handlerChangeLeft}
        />
        {/* style={{ zIndex: minVal > props.maxPrice - 100 && "5" }} */}
        <input
          type="range"
          min={props.minPrice}
          max={props.maxPrice}
          value={maxVal}
          className={`${styles.thumb} ${styles.right}`}
          onChange={handlerChangeRigth}
        />
      </div>
    </div>
  );
};
