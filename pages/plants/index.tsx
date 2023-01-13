import styles from "./style.module.scss";
import Image from "next/image";
import iconArrowLeft from "./assets/arrow-left.svg";
import iconArrowRight from "./assets/arrow-right.svg";
import React, { useEffect, useState } from "react";
import ThePlantCard from "./components/ThePlantCard";
import TheFilters from "./components/TheFilters";
import { useRouter } from "next/router";

export default function Plants() {
  const [page, setPage] = useState(1);
  const [idUser, setIdUser] = useState(1);
  const [PlantsList, setPlantsList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalItems, setTotalItems] = useState(30);
  const [totalPages, setTotalPages] = useState(3);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      // declare the url to fetch
      let uri = `https://plants-api-production.up.railway.app/api/v1/plantis/${idUser}/`;
      // let uri = `https://plants-api-production.up.railway.app/api/v1/stock/plants/?`;
      // get query params to filter
      const page = router.query["page"];
      if (page == null) {
        uri += `?page=1`;
        setPage(1);
      } else {
        uri += `?page=${page}`;
        setPage(+page);
      }
      const name = router.query["name"];
      if (name != null) {
        uri += `&name=${name}`;
      }
      const species = router.query["species"];
      if (species != null) {
        uri += `&species=${species}`;
      }
      const irrigation = router.query["irrigation"];
      if (irrigation != null) {
        uri += `&irrigation=${irrigation}`;
      }
      const priceFirst = router.query["priceFirst"];
      if (priceFirst != null) {
        const priceSecond = router.query["priceSecond"];
        if (priceSecond != null) {
          uri += `&priceFirst=${priceFirst}&priceSecond=${priceSecond}`;
        }
      }
      const order = router.query["order"];
      if (order != null) {
        uri += `&order=${order}`;
      }
      const light = router.query["light"];
      if (light != null) {
        uri += `&light=${light}`;
      }
      try {
        const response = await fetch(uri);
        const data = await response.json();
        setPlantsList(data.results);
        console.log(data.results);
        setTotalItems(data.totalItems);
        setTotalPages(data.totalPages);
        setLoading(false);
      } catch (err: unknown) {
        setError(err);
        setLoading(false);
      }
    }
    fetchData();
  }, [router, idUser]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>An error occurred: {error}</p>;
  } else {
    return (
      <main className={styles.main}>
        <section className={styles.filter}>
          <TheFilters />
        </section>
        <section className={styles.view}>
          <div className={styles.navsref}>
            <div>
              <a href="">Plantas</a>
              <a href="">Todas</a>
            </div>
            <div>
              <button>
                <Image src={iconArrowLeft} alt="icon arrow left" />
              </button>
              <span>{`${page}/${totalPages}`}</span>
              <button>
                <Image src={iconArrowRight} alt="icon arrow right" />
              </button>
            </div>
          </div>
          <ul className={styles.items}>
            {PlantsList?.map((plant: Plant, i: number) => {
              return (
                <ThePlantCard
                  key={i}
                  plant={{
                    id: plant.id,
                    name: plant.name,
                    quantity: plant.quantity,
                    discount: plant.discount,
                    createdAt: plant.createdAt,
                    favorite: plant.favorite,
                    imageFront: plant.imageFront,
                    vibration: plant.vibration,
                    price: plant.price,
                  }}
                />
              );
            })}
          </ul>
        </section>
      </main>
    );
  }
}
