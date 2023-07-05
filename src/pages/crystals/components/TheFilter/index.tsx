import Image from "next/image";
import planets from "./assets/planets";
import chakras from "./assets/chakras";
import zodiac from "./assets/zodiac";
import elements from "./assets/elements";
import styles from "./style.module.scss";
import { useRouter } from "next/router";
import { CrystalsQParams } from "../../../../types";
import TheDoubleSlider from "./components/TheDoubleSlider";
import { useState } from "react";

export default function TheFilter(props: { params: CrystalsQParams }) {
  const router = useRouter();
  const [minVibration, setMinVibration] = useState(0);
  const [maxVibration, setMaxVibration] = useState(1000);
  const pushPath = (filter: string, value: string) => {
    let updatedQuery: any = null;
    const { query, pathname } = router;
    const { [filter]: filterParam, ...restQuery } = query;
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

  const zodiacList = zodiac.map((item) => {
    return (
      <li key={item.sign}>
        <input
          type="checkbox"
          name="zodiac"
          id={item.sign}
          onChange={() => handlerFilter("zodiac", item.value)}
          checked={props.params.zodiac?.includes(item.value) || false}
        />
        <Image
          className="icon"
          src={item.icon}
          alt={item.alt}
          width={20}
          height={20}
        />
      </li>
    );
  });

  const elementsList = elements.map((item) => {
    return (
      <li key={item.name}>
        <input
          type="checkbox"
          name="element"
          id={item.name}
          onChange={() => handlerFilter("elements", item.value)}
          checked={props.params.elements?.includes(item.value) || false}
        />
        <Image
          className="icon"
          src={item.icon}
          alt={item.alt}
          width={20}
          height={20}
        />
      </li>
    );
  });

  const planetsList = planets.map((item) => {
    return (
      <li key={item.name}>
        <input
          type="checkbox"
          name="planet"
          id={item.name}
          onChange={() => handlerFilter("planets", item.value)}
          checked={props.params.planets?.includes(item.value) || false}
        />
        <Image
          className="icon"
          src={item.icon}
          alt={item.alt}
          width={20}
          height={20}
        />
      </li>
    );
  });
  const chakrasList = chakras.map((item) => {
    return (
      <li key={item.name}>
        <input
          type="checkbox"
          name="chakra"
          id={item.name}
          onChange={() => handlerFilter("chakras", item.value)}
          checked={props.params.chakras?.includes(item.value) || false}
        />
        <Image
          className="icon"
          src={item.icon}
          alt={item.alt}
          width={20}
          height={20}
        />
      </li>
    );
  });

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
          <ul>{zodiacList}</ul>
        </div>
        <div>
          <h2>elemento</h2>
          <ul>{elementsList}</ul>
        </div>
        <div>
          <h2>planeta</h2>
          <ul>{planetsList}</ul>
        </div>
        <div>
          <h2>chakras</h2>
          <ul>{chakrasList}</ul>
        </div>
      </form>
    </section>
  );
}
