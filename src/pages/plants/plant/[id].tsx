import styles from "./style.module.scss";
import ThePotSelector from "../../../components/commonPlants/commonPlant/components/ThePotSelector";
import TheCrystalSelector from "../../../components/commonPlants/commonPlant/components/TheCrystalSelector";
import ThePlantView from "../../../components/commonPlants/commonPlant/components/ThePlantView";
import { useRouter } from "next/router";
import cartContext from "../../../contexts/cartContext";
import { Cart, Crystal, CrystalFavorite, PlantStock } from "../../../types";
import { useContext, useEffect, useState } from "react";

const Plant = (props: { plant: PlantStock }) => {
  const { addItemCart } = useContext(cartContext);
  const router = useRouter();
  const [idPot, setIdPot] = useState(router.query["pot"] || 1);
  const [idCrystal, setIdCrystal] = useState(router.query["crystal"] || 1);
  const [crystal, setCrystal] = useState<CrystalFavorite>({
    favorite: false,
    quantity: 0,
    price: 0,
    state: false,
    id: 0,
    name: "",
    description: "",
    vibration: 0,
    benefits: [],
    properties: [],
    zodiac: [],
    planets: [],
    elements: [],
    chakras: [],
    imageCrystal: "",
    imageGemstone: "",
  });
  const [renderPot, setRenderPot] = useState(
    "https://firebasestorage.googleapis.com/v0/b/simple-a5eec.appspot.com/o/potsImage/doisu-render.webp?alt=media&token=289ff965-53e9-4a78-b3c2-02edfb573c57"
  );

  const addToCart = () => {
    let newItem: Cart = {
      plant: props.plant.id,
      crystal: +(router.query["crystal"] || 1),
      pot: +(router.query["pot"] || 1),
      quantity: 1,
    };
    addItemCart(newItem);
    router.push("/cart");
  };
  const handlerCrystal = (crystal: CrystalFavorite) => {
    setCrystal(crystal);
  };
  const handlerPot = (pot: string) => {
    setRenderPot(pot);
  };

  return (
    <main className={styles.main}>
      <ThePotSelector id={+idPot} selectedPot={handlerPot} />
      <ThePlantView
        plant={props.plant}
        addToCart={addToCart}
        renderPot={renderPot}
        crystal={crystal}
      />
      <TheCrystalSelector id={+idCrystal} selectedCrystal={handlerCrystal} />
    </main>
  );
};

Plant.getInitialProps = async (context: { query: { id: any } }) => {
  const { id } = context.query;
  let uri = `https://plants-api-production.up.railway.app/api/v1/stock/plants/${id}/`;
  const response = await fetch(uri);
  const plant = await response.json();
  return { plant };
};

export default Plant;
