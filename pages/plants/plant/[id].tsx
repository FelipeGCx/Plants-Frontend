import styles from "./style.module.scss";
import ThePotSelector from "./components/ThePotSelector";
import TheCrystalSelector from "./components/TheCrystalSelector";
import ThePlantView from "./components/ThePlantView";
import { useRouter } from "next/router";
import { Crystal, PlantStock } from "../../../types";
import { useEffect, useState } from "react";

const Plant = (props: { plant: PlantStock }) => {
  const router = useRouter();
  const [idPot, setIdPot] = useState(router.query["pot"] || 1);
  const [idCrystal, setIdCrystal] = useState(router.query["crystal"] || 1);

  const addToCart = () => {
    let item = {
      plant: props.plant.id,
      crystal: +(router.query["crystal"] || 1),
      pot: +(router.query["pot"] || 1)
    }
    let newCart = [];
    if (localStorage.getItem("cart")) {
      let actualCart = localStorage.getItem("cart") || "";
      newCart = JSON.parse(actualCart);
    }
    newCart.push(item);
    localStorage.setItem("cart", JSON.stringify(newCart));
    router.push("/cart");
  }

  return (
    <main className={styles.main}>
      <ThePotSelector id={+idPot} />
      <ThePlantView plant={props.plant} addToCart={addToCart} />
      <TheCrystalSelector id={+idCrystal} />
    </main>
  );
};

Plant.getInitialProps = async (context: { query: { id: any } }) => {
  const { id } = context.query;
  console.log("°°°THE ID°°°", id);
  let uri = `https://plants-api-production.up.railway.app/api/v1/stock/plants/${id}/`;
  const response = await fetch(uri);
  const plant = await response.json();
  console.log("°°°THE PLANT°°°", plant);
  return { plant };
};

export default Plant;
