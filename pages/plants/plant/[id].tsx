import styles from "./style.module.scss";
import ThePotSelector from "./components/ThePotSelector";
import TheCrystalSelector from "./components/TheCrystalSelector";
import ThePlantView from "./components/ThePlantView";
import { useRouter } from "next/router";
import { Cart, Crystal, PlantStock } from "../../../types";
import { useEffect, useState } from "react";

const Plant = (props: { plant: PlantStock }) => {
  const router = useRouter();
  const [idPot, setIdPot] = useState(router.query["pot"] || 1);
  const [idCrystal, setIdCrystal] = useState(router.query["crystal"] || 1);
  const [renderPot, setRenderPot] = useState("https://firebasestorage.googleapis.com/v0/b/simple-a5eec.appspot.com/o/potsImage/doisu-render.webp?alt=media&token=289ff965-53e9-4a78-b3c2-02edfb573c57");

  const addToCart = () => {
    let oldCart: Cart[] = [];
    let newItem: Cart = {
      plant: props.plant.id,
      crystal: +(router.query["crystal"] || 1),
      pot: +(router.query["pot"] || 1),
      quantity: 1,
    }
    let check = null;
    if (localStorage.getItem("cart")) {
      let actualCart: string = localStorage.getItem("cart") || "";
      oldCart = JSON.parse(actualCart);
      check = oldCart.find((item: Cart) => {
        return (item.plant === newItem.plant &&
          item.crystal === newItem.crystal &&
          item.pot === newItem.pot)
      })
    }
    if (check) {
      oldCart = oldCart.map((item: Cart) => {
        if (item.plant === newItem.plant &&
          item.crystal === newItem.crystal &&
          item.pot === newItem.pot) {
          item.quantity++
        }
        return item;
      })
    } else {  
      oldCart.push(newItem);
    }
    localStorage.setItem("cart", JSON.stringify(oldCart));
    router.push("/cart");
  }
  const handlerPot = (pot: string) => {
    console.log("lapot", pot);
    setRenderPot(pot);
  }

  return (
    <main className={styles.main}>
      <ThePotSelector id={+idPot} selectedPot={handlerPot} />
      <ThePlantView plant={props.plant} addToCart={addToCart} renderPot={renderPot} />
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
