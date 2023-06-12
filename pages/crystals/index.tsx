import styles from "./style.module.scss";
import React, { useEffect, useState } from "react";
import { CrystalFav } from "../../types";
import TheCrystalView from "./components/TheCrystalView";
import TheFilter from "./components/TheFilter";

export default function Crystals() {
  const [idUser, setIdUser] = useState(1);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [crystals, setCrystals] = useState<CrystalFav[]>([]);
  const [totalItems, setTotalItems] = useState(30);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://plants-api-production.up.railway.app/api/v1/crystalis/${idUser}/?page=${page}`
        );
        const data = await response.json();
        setCrystals(data.results);
        setTotalItems(+data.totalItems);
        setLoading(false);
      } catch (err) {
        setError("error");
        setLoading(false);
      }
    }
    fetchData();
  }, [idUser, page]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>An error occurred: {error}</p>;
  } else {
    return (
      <main className={styles.main}>
        <TheFilter/>
        <TheCrystalView crystals={crystals} totalItems={totalItems}/>
      </main>
    );
  }


  // );
}
