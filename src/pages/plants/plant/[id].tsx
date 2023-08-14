import styles from "./style.module.scss";
import ThePotSelector from "../../../components/commonPlants/commonPlant/components/ThePotSelector";
import TheCrystalSelector from "../../../components/commonPlants/commonPlant/components/TheCrystalSelector";
import ThePlantView from "../../../components/commonPlants/commonPlant/components/ThePlantView";
import { useRouter } from "next/router";
import cartContext from "../../../contexts/cartContext";
import { Cart, CrystalFavorite, PlantStock, Pot } from "../../../types";
import { useContext, useState } from "react";
// import { ProductionProvider } from "../../../services/productionProvider";
import { RequestService } from "../../../services/requestService";
import { DevelopmentProvider } from "../../../services/developmentProvider";
import { PLANTSTOCK } from "../../../constants";

const Plant = (props: { plant: PlantStock }) => {
  const { addItemCart } = useContext(cartContext);
  const router = useRouter();
  const [idPot, setIdPot] = useState(router.query["pot"] || 1);
  const [idCrystal, setIdCrystal] = useState(router.query["crystal"] || 1);
  const [pot, setPot] = useState<Pot>({
    id: 1,
    name: "",
    price: 0,
    image: "",
    render: "",
    quantity: 0,
    size: "",
  });
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
  const handlerPot = (pot: Pot | undefined) => {
    if (pot) {
      setPot(pot);
    }
  };

  return (
    <main className={styles.main}>
      <ThePotSelector id={+idPot} selectedPot={handlerPot} />
      <ThePlantView
        plant={props.plant}
        addToCart={addToCart}
        pot={pot}
        crystal={crystal}
      />
      <TheCrystalSelector id={+idCrystal} selectedCrystal={handlerCrystal} />
    </main>
  );
};

Plant.getInitialProps = async (context: { query: { id: any } }) => {
  // const requestProvider = new ProductionProvider();
  const requestProvider = new DevelopmentProvider();
  const requestService = new RequestService(requestProvider);
  const { id } = context.query;
  // let url = `https://plants-api-production.up.railway.app/api/v1/stock/plants/${id}/`;
  let url = PLANTSTOCK;
  const requestResponse = await requestService.getRequest(url);
  const plant = requestResponse.data.results;
  return { plant };
};

export default Plant;
