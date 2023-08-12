import styles from "./style.module.scss";
import React, { useEffect, useState } from "react";
import { CrystalFavorite, CrystalsQParams } from "../../types";
import TheCrystalView from "../../components/commonCrystals/components/TheCrystalView";
import TheFilter from "../../components/commonCrystals/components/TheFilter";
import { useRouter } from "next/router";
import TheLoader from "../../components/commonCrystals/components/TheLoader";
import { DevelopmentProvider } from "../../services/developmentProvider";
import { RequestService } from "../../services/requestService";
import {
  CRYSTALSFAVORITE,
  CRYSTALSSTOCK,
  ERROR,
  INFO,
  SUCCESS,
} from "../../constants";

export default function Crystals() {
  const [page, setPage] = useState(1);
  const [idUser, setIdUser] = useState(1);
  const [crystals, setCrystals] = useState<CrystalFavorite[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();
  const [crystalParams, setCrystalParams] = useState<CrystalsQParams>({
    zodiac: null,
    elements: null,
    planets: null,
    chakras: null,
  });

  useEffect(() => {
    const getFilters = () => {
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
      url = idUser ? CRYSTALSFAVORITE : CRYSTALSSTOCK;
      fetchData(url);
    };
    const fetchData = async (url: string) => {
      const requestProvider = new DevelopmentProvider();
      const requestService = new RequestService(requestProvider);
      const requestResponse = await requestService.getRequest(url);
      switch (requestResponse.status) {
        case SUCCESS:
          setCrystals(requestResponse.data.results);
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
}
