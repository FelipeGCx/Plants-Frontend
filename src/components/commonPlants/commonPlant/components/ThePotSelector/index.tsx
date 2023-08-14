import Image from "next/image";
import styles from "./style.module.scss";
import React, { useEffect, useState } from "react";
import { Pot } from "../../../../../types";
import { useRouter } from "next/router";
import { DevelopmentProvider } from "../../../../../services/developmentProvider";
import { RequestService } from "../../../../../services/requestService";
import { ERROR, INFO, POTS, SUCCESS } from "../../../../../constants";

export default function ThePotSelector(props: {
  id: number;
  selectedPot(pot: Pot | undefined ): void;
}) {
  const [selected, setSelected] = useState(props.id);
  const [pots, setPots] = useState<Pot[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const getUrl = () => {
      let url = "/pots";
      url = POTS;
      fetchData(url);
    };
    const fetchData = async (url: string) => {
      // const requestProvider = new ProductionProvider();
      const requestProvider = new DevelopmentProvider();
      const requestService = new RequestService(requestProvider);
      const requestResponse = await requestService.getRequest(url);
      switch (requestResponse.status) {
        case SUCCESS:
          setPots(requestResponse.data.results);
          setIsLoading(false);
          break;
        case INFO:
          setIsEmpty(true);
          setIsLoading(false);
        case ERROR:
          setError(requestResponse.message);
          setIsLoading(false);
        default:
          break;
      }
    };
    getUrl();
  }, []);

  useEffect(() => {
    props.selectedPot(pots.find((objeto) => objeto.id === selected));
  }, [pots, props, selected]);

  const handlerChange = (id: number) => {
    setSelected(id);
    const { query, pathname } = router;
    let updatedQuery = { ...query, pot: id.toString() };
    router.push({ pathname, query: updatedQuery });
  };

  return (
    <section className={styles.selector}>
      <h1 className={styles.title}>Materas</h1>
      <form action="">
        <ul>
          {pots?.map((pot: Pot, i: number) => {
            return (
              <li key={i}>
                <label htmlFor={pot.name} className={styles.card}>
                  <input
                    name="pot"
                    value={pot.name}
                    type="radio"
                    checked={pot.id == selected}
                    onChange={() => handlerChange(pot.id)}
                  />
                  <Image
                    src={pot.image}
                    alt={`pot ${pot.name}`}
                    width={100}
                    height={100}
                  />
                  <h1>{pot.name} </h1>
                </label>
              </li>
            );
          })}
        </ul>
      </form>
    </section>
  );
}
