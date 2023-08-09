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
      // declare the url to fetch
      let url = `https://plants-api-production.up.railway.app/api/v1/plantis/${idUser}/`;
      // let url = `https://plants-api-production.up.railway.app/api/v1/stock/plants/?`;
      // get query params to filter
      const page = router.query["page"];
      if (page == null) {
        url += `?page=1`;
        setPage(1);
      } else {
        url += `?page=${page}`;
        setPage(+page);
      }
      const name = router.query["name"];
      if (name != null) {
        url += `&name=${name}`;
      }
      const species = router.query["species"] || null;
      if (species != null) {
        url += `&species=${species}`;
      }
      const irrigation = router.query["irrigation"] || null;
      if (irrigation != null) {
        url += `&irrigation=${irrigation}`;
      }
      const zone = router.query["zone"] || null;
      if (zone != null) {
        url += `&inside=${zone == "interior"}`;
      }
      const priceFirst = router.query["priceFirst"] || null;
      const priceSecond = router.query["priceSecond"] || null;
      if (priceFirst != null) {
        if (priceSecond != null) {
          url += `&priceFirst=${priceFirst}&priceSecond=${priceSecond}`;
        }
      }
      const order = router.query["order"];
      if (order != null) {
        url += `&order=${order}`;
      }
      const light = router.query["light"] || null;
      if (light != null) {
        url += `&light=${light}`;
      }
      const params = {
        species: species,
        light: light,
        zone: zone,
        irrigation: irrigation,
        priceFirst: priceFirst,
        priceSecond: priceSecond,
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
