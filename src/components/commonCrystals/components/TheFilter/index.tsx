import styles from "./style.module.scss";
import { useRouter } from "next/router";
import { CrystalsQParams } from "../../../../types";
import TheDoubleSlider from "./components/TheDoubleSlider";
import { useState } from "react";
import TheChakrasList from "./components/TheChakras";
import TheElementsList from "./components/TheElements";
import TheZodiacList from "./components/TheZodiac";
import ThePlanetsList from "./components/ThePlanets";

export default function TheFilter(props: { params: CrystalsQParams }) {
  const router = useRouter();
  const [minVibration, setMinVibration] = useState(0);
  const [maxVibration, setMaxVibration] = useState(1000);
  const pushPath = (filter: string, value: string) => {
    let updatedQuery: any = null;
    const { query, pathname } = router;
    const { [filter]: filterParam, name,...restQuery } = query;
    if (value != "") {
      updatedQuery = {
        ...restQuery,
        [filter]: value,
        page: "1",
      };
    } else {
      updatedQuery = {
        ...restQuery,
        page: "1",
      };
    }
    router.push({ pathname, query: updatedQuery });
  };

  const handlerFilter = (filter: string, value: string) => {
    const { query } = router;
    const { [filter]: filterParam } = query;
    if (filterParam) {
      let paramValues = filterParam.toString().split(",");
      if (paramValues.includes(value)) {
        let newParamValues = paramValues.filter((paramValue) => {
          return paramValue != value;
        });
        pushPath(filter, newParamValues.join(","));
      } else {
        paramValues.push(value);
        pushPath(filter, paramValues.join(","));
      }
    } else {
      pushPath(filter, value);
    }
  };

  const handlerVibration = (minValue: number, maxValue: number) => {
    setMinVibration(minValue);
    setMaxVibration(maxValue);
    const { query, pathname } = router;
    let updatedQuery = {
      ...query,
      vibrationFirst: minValue,
      vibrationSecond: maxValue,
      page: "1",
    };
    router.push({ pathname, query: updatedQuery });
  };

  return (
    <section className={styles.filter}>
      <form>
        <TheDoubleSlider
          minValue={0}
          maxValue={11}
          onValueChange={handlerVibration}
        />
        <div>
          <h2>zodiaco</h2>
          <TheZodiacList
            zodiacs={props.params.zodiac}
            changeSelected={handlerFilter}
          />
        </div>
        <div>
          <h2>elemento</h2>
           <TheElementsList
            elements={props.params.elements}
            changeSelected={handlerFilter}
          />
        </div>
        <div>
          <h2>planeta</h2>
          <ThePlanetsList
            planets={props.params.planets}
            changeSelected={handlerFilter}
          />
        </div>
        <div>
          <h2>chakras</h2>
          <TheChakrasList
            chakras={props.params.chakras}
            changeSelected={handlerFilter}
          />
        </div>
      </form>
    </section>
  );
}
