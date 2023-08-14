import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./style.module.scss";
import TheFilter from "../../components/commonPlants/components/TheFilter";
import TheLoader from "../../components/commonPlants/components/TheLoader";
import ThePlantView from "../../components/commonPlants/components/ThePlantView";
import TheNotFound from "../../components/commonPlants/components/TheNotFound";
import { PlantFavorite, PlantsQParams } from "../../types";
import { RequestService } from "../../services/requestService";
// import { ProductionProvider } from "../../services/ProductionProvider";
import { DevelopmentProvider } from "../../services/developmentProvider";
import {
  ERROR,
  INFO,
  PLANTSFAVORITE,
  PLANTSSTOCK,
  SUCCESS,
} from "../../constants";

export default function Plants() {
  const [page, setPage] = useState(1);
  //ToDo set id user in a context
  const [idUser, setIdUser] = useState(1);
  const [plants, setPlants] = useState<PlantFavorite[]>([]);
  const [plantParams, setPlantParams] = useState<PlantsQParams>({
    species: null,
    light: null,
    zone: null,
    irrigation: null,
    priceFirst: null,
    priceSecond: null,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();

  useEffect(() => {
    const getFilters = () => {
      let url = `/plantis/${idUser}/`;
      let queryParams = "";
      Object.keys(router.query).forEach((param) => {
        const value = router.query[param];
        queryParams += `&${param}=${value}`;
      });
      const params = {
        species: router.query["species"] || null,
        light: router.query["light"] || null,
        zone: router.query["zone"] || null,
        irrigation: router.query["irrigation"] || null,
        priceFirst: router.query["priceFirst"] || null,
        priceSecond: router.query["priceSecond"] || null,
      };
      setPlantParams(params);
      url = idUser ? PLANTSFAVORITE : PLANTSSTOCK;
      fetchData(url);
    };
    const fetchData = async (url: string) => {
      // const requestProvider = new ProductionProvider();
      const requestProvider = new DevelopmentProvider();
      const requestService = new RequestService(requestProvider);
      const requestResponse = await requestService.getRequest(url);
      switch (requestResponse.status) {
        case SUCCESS:
          setPlants(requestResponse.data.results);
          setTotalPages(requestResponse.data.pagination?.totalPages || 0);
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
    getFilters();
  }, [router, idUser]);

  if (isLoading) {
    return <TheLoader />;
  }
  if (isEmpty) {
    return <TheNotFound />;
  }
  if (error) {
    return <p>An error occurred: {error}</p>;
  } else {
    return (
      <main className={styles.main}>
        <TheFilter params={plantParams} />
        <ThePlantView
          plants={plants}
          totalPages={totalPages}
          page={page}
          plantParams={plantParams}
        />
      </main>
    );
  }
}
