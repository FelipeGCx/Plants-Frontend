import styles from "./style.module.scss";
import React, { useEffect, useState } from "react";
import { CrystalFavorite, CrystalsQParams } from "../../types";
import TheCrystalView from "../../components/commonCrystals/components/TheCrystalView";
import TheFilter from "../../components/commonCrystals/components/TheFilter";
import { useRouter } from "next/router";
import { ProductionService } from "../../api/ProductionService";
import { HttpService } from "../../api/HttpService";
import { toArrayCrystalFavorite } from "../../utils/parsings/Crystal";
import TheLoader from "../../components/commonCrystals/components/TheLoader";

export default function Crystals() {
  const [idUser, setIdUser] = useState(1);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [crystals, setCrystals] = useState<CrystalFavorite[]>([]);
  const [totalItems, setTotalItems] = useState(30);
  const [totalPages, setTotalPages] = useState(3);
  const router = useRouter();
  const [crystalParams, setCrystalParams] = useState<CrystalsQParams>({
    zodiac: null,
    elements: null,
    planets: null,
    chakras: null,
  });

  useEffect(() => {
    async function fetchData() {
      let url = `https://plants-api-production.up.railway.app/api/v1/crystalis/${idUser}/`;
      const page = router.query["page"];
      if (page == null) {
        url += `?page=1`;
        setPage(1);
      } else {
        url += `?page=${page}`;
        setPage(+page);
      }
      const name = router.query["name"] || null;
      if (name != null) {
        url += `&name=${name}`;
      }
      const zodiac = router.query["zodiac"] || null;
      if (zodiac != null) {
        url += `&zodiac=${zodiac}`;
      }
      const elements = router.query["elements"] || null;
      if (elements != null) {
        url += `&elements=${elements}`;
      }
      const planets = router.query["planets"] || null;
      if (planets != null) {
        url += `&planets=${planets}`;
      }
      const chakras = router.query["chakras"] || null;
      if (chakras != null) {
        url += `&chakras=${chakras}`;
      }
      const vibrationFirst = router.query["vibrationFirst"] || null;
      const vibrationSecond = router.query["vibrationSecond"] || null;
      if (vibrationFirst != null) {
        if (vibrationSecond != null) {
          url += `&vibrationFirst=${vibrationFirst}&vibrationSecond=${vibrationSecond}`;
        }
      }
      const params = {
        zodiac: zodiac,
        elements: elements,
        planets: planets,
        chakras: chakras,
      };
      setCrystalParams(params);
      try {
        const httpProvider = new ProductionService();
        const httpService = new HttpService(httpProvider);
        const data = await httpService.getRequest(url);
        setCrystals(toArrayCrystalFavorite(data.results));
        setTotalItems(+data.totalItems);
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
    return (<TheLoader/>)
  }
  if (error) {
    return <p>An error occurred: {error}</p>;
  } else {
    return (
      <main className={styles.main}>
        <TheFilter params={crystalParams} />
        <TheCrystalView
          crystals={crystals}
          totalPages={totalPages}
          page={page}
          crystalParams={crystalParams}
        />
      </main>
    );
  }

  // );
}
