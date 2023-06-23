import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { useRouter } from "next/router";

export default function DoubleSlider(props: {
  minValue: number;
  maxValue: number;
  onValueChange: (minValue: number, maxValue: number) => void;
}) {
  const router = useRouter();
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(0);

  useEffect(() => {
    function getValues() {
      const min = router.query["vibrationFirst"] || props.minValue;
      const max = router.query["vibrationSecond"] || props.maxValue;
      setMinVal(+min);
      setMaxVal(+max);
    }
    getValues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlerChangeLeft = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = +event.target.value;
    newValue = newValue >= maxVal ? minVal : newValue;
    setMinVal(newValue);
    props.onValueChange(newValue, maxVal);
  };
  const handlerChangeRigth = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = +event.target.value;
    newValue = newValue <= minVal ? maxVal : newValue;
    setMaxVal(newValue);
    props.onValueChange(minVal, newValue);
  };
  return (
    <div className={styles.container}>
      <h1>Vibración</h1>
      <div className={styles.prices}>
        <span>{minVal}</span> - <span>{maxVal}</span>
      </div>
      <div className={styles.slider}>
        <input
          type="range"
          min={props.minValue}
          max={props.maxValue}
          value={minVal}
          className={`${styles.thumb} ${styles.left}`}
          onChange={handlerChangeLeft}
        />
        {/* style={{ zIndex: minVal > props.maxValue - 100 && "5" }} */}
        <input
          type="range"
          min={props.minValue}
          max={props.maxValue}
          value={maxVal}
          className={`${styles.thumb} ${styles.right}`}
          onChange={handlerChangeRigth}
        />
      </div>
    </div>
  );
}
