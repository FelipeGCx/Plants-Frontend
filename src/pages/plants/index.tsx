import styles from "./style.module.scss";
import Image from "next/image";
import iconArrowLeft from "./assets/arrow-left.svg";
import iconArrowRight from "./assets/arrow-right.svg";
import React, { useEffect, useState } from "react";
import ThePlantCard from "./components/ThePlantCard";
import TheFilters from "./components/TheFilters";
import { useRouter } from "next/router";
import { Plant, PlantFavorite, PlantsQParams } from "../../types";
import { ProductionService } from "../../api/ProductionService";
import { HttpService } from "../../api/HttpService";
import Link from "next/link";
import TheLoader from "./components/TheLoader";
import { toArrayPlantFavorite } from "../../utils/parsings/Plant";

export default function Plants() {
  const [page, setPage] = useState(1);
  const [idUser, setIdUser] = useState(1);
  const [PlantsList, setPlantsList] = useState<PlantFavorite[]>([]);
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

  const handlePageChange = (newPage: number) => {
    const { query, pathname } = router;
    const updatedQuery = { ...query, page: newPage.toString() };
    router.push({ pathname, query: updatedQuery });
  };

  const changePage = (direction: number) => {
    let newPage = 1;
    if (direction === 0) {
      newPage = page - 1 <= 0 ? 1 : page - 1;
    } else {
      newPage = page + 1 > totalPages ? totalPages : page + 1;
    }
    handlePageChange(newPage);
  };

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
        setPlantsList(toArrayPlantFavorite(data.results));
        setTotalItems(data.totalItems);
        setTotalPages(data.totalPages);
        setLoading(false);
      } catch (err) {
        setError("error");
        console.log(err)
        setLoading(false);
      }
    }
    fetchData();
  }, [router, idUser]);

  if (loading) {
    return <TheLoader/>;
  }
  if (error) {
    return <p>An error occurred: {error}</p>;
  } else {
    return (
      <main className={styles.main}>
        <section className={styles.filter}>
          <TheFilters params={plantParams} />
        </section>
        <section className={styles.view}>
          <div className={styles.navsref}>
            <div>
              <Link
                href={{
                  pathname: "/plants",
                }}
              >
                Plantas
              </Link>
              {Object.entries(plantParams).map(([key, value]) => {
                if (value) {
                  return (
                    <Link
                      key={key}
                      href={{
                        pathname: "/plants",
                        query: { [key]: value },
                      }}
                    >
                      {value}
                    </Link>
                  );
                } else {
                  return null;
                }
              })}
            </div>
            <div>
              <button onClick={() => changePage(0)}>
                <Image src={iconArrowLeft} alt="icon arrow left" />
              </button>
              <span>{`${page}/${totalPages}`}</span>
              <button onClick={() => changePage(1)}>
                <Image src={iconArrowRight} alt="icon arrow right" />
              </button>
            </div>
          </div>
          <ul className={styles.items}>
            {PlantsList?.map((plant: PlantFavorite, i: number) => {
              return <ThePlantCard key={i} plant={plant} />;
            })}
          </ul>
        </section>
      </main>
    );
  }
}
