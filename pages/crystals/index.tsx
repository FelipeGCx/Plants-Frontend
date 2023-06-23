import styles from "./style.module.scss";
import React, { useEffect, useState } from "react";
import { CrystalFav, CrystalsQParams } from "../../types";
import TheCrystalView from "./components/TheCrystalView";
import TheFilter from "./components/TheFilter";
import { useRouter } from "next/router";

export default function Crystals() {
  const [idUser, setIdUser] = useState(1);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [crystals, setCrystals] = useState<CrystalFav[]>([]);
  const [totalItems, setTotalItems] = useState(30);
  const router = useRouter();
  const [crystalParams, setCrystalParams] = useState<CrystalsQParams>({
    zodiac: null,
    elements: null,
    planets: null,
    chakras: null,
  });

  useEffect(() => {
    async function fetchData() {
      let uri = `https://plants-api-production.up.railway.app/api/v1/crystalis/${idUser}/`;
      const page = router.query["page"];
      if (page == null) {
        uri += `?page=1`;
        setPage(1);
      } else {
        uri += `?page=${page}`;
        setPage(+page);
      }
      const zodiac = router.query["zodiac"] || null;
      if (zodiac != null) {
        uri += `&zodiac=${zodiac}`;
      }
      const elements = router.query["elements"] || null;
      if (elements != null) {
        uri += `&elements=${elements}`;
      }
      const planets = router.query["planets"] || null;
      if (planets != null) {
        uri += `&planets=${planets}`;
      }
      const chakras = router.query["chakras"] || null;
      if (chakras != null) {
        uri += `&chakras=${chakras}`;
      }
      const vibrationFirst = router.query["vibrationFirst"] || null;
      const vibrationSecond = router.query["vibrationSecond"] || null;
      if (vibrationFirst != null) {
        if (vibrationSecond != null) {
          uri += `&vibrationFirst=${vibrationFirst}&vibrationSecond=${vibrationSecond}`;
        }
      }
      const params = {
        "zodiac": zodiac,
        "elements": elements,
        "planets": planets,
        "chakras": chakras
      };
      setCrystalParams(params);
      try {
        const response = await fetch(uri);
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
  }, [router, idUser]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>An error occurred: {error}</p>;
  } else {
    return (
      <main className={styles.main}>
        <TheFilter params={crystalParams} />
        <TheCrystalView crystals={crystals} totalItems={totalItems} />
      </main>
    );
  }

  // );
}
