import styles from "./style.module.scss";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import TheFilter from "../../components/commonPlants/components/TheFilter";
import TheLoader from "../../components/commonPlants/components/TheLoader";
import { PlantFavorite, PlantsQParams } from "../../types";
import { ProductionService } from "../../api/ProductionService";
import { HttpService } from "../../api/HttpService";
import { toArrayPlantFavorite } from "../../utils/parsings/Plant";
import ThePlantView from "../../components/commonPlants/components/ThePlantView";

export default function Plants() {
  const [page, setPage] = useState(1);
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [totalItems, setTotalItems] = useState(30);
  const [totalPages, setTotalPages] = useState(3);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
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
      try {
        const httpProvider = new ProductionService();
        const httpService = new HttpService(httpProvider);
        const data = await httpService.getRequest(url);
        setPlants(toArrayPlantFavorite(data.results));
        setTotalItems(data.totalItems);
        setTotalPages(data.totalPages);
        setLoading(false);
      } catch (err) {
        setError("error");
          setLoading(false);
      }
    }
    fetchData();
  }, [router, idUser]);

  if (loading) {
    return <TheLoader />;
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
