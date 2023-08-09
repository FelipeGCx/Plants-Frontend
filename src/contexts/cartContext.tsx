import { createContext, useEffect, useState } from "react";
import {
  Cart,
  SimpleCart,
  CrystalStock,
  PlantStock,
  Pot,
  Product,
  ProductTicket,
} from "../types";
import { DevelopmentProvider } from "../services/developmentProvider";
import { RequestService } from "../services/requestService";
import { POT, CRYSTAL, PLANTSTOCK, CRYSTALSTOCK } from "../constants";

interface ICartContext {
  cart: Array<Product>;
  ticketCart: Array<ProductTicket>;
  addItemCart: (item: Cart) => void;
  setItemQuantity: (item: Cart) => void;
  removeItemCart: (item: SimpleCart) => void;
}

const defaultState = {
  cart: [],
  ticketCart: [],
  addItemCart: (item: Cart) => {},
  setItemQuantity: (item: Cart) => {},
  removeItemCart: (item: SimpleCart) => {},
};

type Props = {
  children: React.ReactNode;
};

const ThemeContext = createContext<ICartContext>(defaultState);

const CartProvider = (props: Props) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [ticketCart, setTicketCart] = useState<ProductTicket[]>([]);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const createTicket = () => {
      if (cart) {
        let result: ProductTicket[] = [];
        const keys = ["name", "potName", "crystalName"];
        const priceKeys = ["price", "potPrice", "crystalPrice"];
        for (const obj of cart) {
          for (let index = 0; index < keys.length; index++) {
            const key = keys[index];
            const keyPrice = priceKeys[index];
            const existingObj = result.find((item) => item.name === obj[key]);
            if (existingObj) {
              existingObj.quantity += obj.quantity;
            } else {
              result.push({
                name: obj[key],
                price: obj[keyPrice],
                quantity: obj.quantity,
              });
            }
          }
        }
        // result.sort((a, b) => a.name.localeCompare(b.name));
        setTicketCart(result);
      }
    };
    createTicket();
  }, [cart]);

  useEffect(() => {
    const fetchCart = async () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "");
      if (cart) {
        const cartFill = await Promise.all(
          cart.map(async (element: Cart) => {
            const plant: PlantStock = await fecthPlant(element.plant);
            const pot: Pot = await fecthPot(element.pot);
            const crystal: CrystalStock = await fecthCrystal(element.crystal);
            const product: Product = {
              id: plant.id,
              name: plant.name,
              idPot: pot.id,
              potName: pot.name,
              renderPot: pot.render,
              idCrystal: crystal.id,
              crystalName: crystal.name,
              plantPrice: plant.price - (plant.price / 100) * plant.discount,
              potPrice: pot.price,
              crystalPrice: crystal.price,
              price:
                plant.price -
                (plant.price / 100) * plant.discount +
                pot.price +
                crystal.price,
              imagePlant: plant.render,
              imageCrystal: crystal.imageCrystal,
              quantity: element.quantity,
            };
            return product;
          })
        );
        setCart(cartFill);
      }
    };
    const fecthPlant = async (id: number) => {
      // const url = `https://plants-api-production.up.railway.app/api/v1/stock/plants/${id}/`;
      const url = PLANTSTOCK;
      const response = await makeRequest(url);
      return response.data.results;
    };
    const fecthPot = async (id: number) => {
      // const url = `https://plants-api-production.up.railway.app/api/v1/pots/${id}/`;
      const url = POT;
      const response = await makeRequest(url);
      return response.data.results;
    };
    const fecthCrystal = async (id: number) => {
      // const url = `https://plants-api-production.up.railway.app/api/v1/stock/crystals/${id}/`;
      const url = CRYSTALSTOCK;
      const response = await makeRequest(url);
      return response.data.results;
    };
    const makeRequest = async (url: string) => {
      const requestProvider = new DevelopmentProvider();
      const requestService = new RequestService(requestProvider);
      return await requestService.getRequest(url);
    };
    fetchCart();
  }, [refetch]);

  function addItemCart(newItem: Cart) {
    let oldCart: Cart[] = [];
    let check = null;
    if (localStorage.getItem("cart")) {
      let actualCart: string = localStorage.getItem("cart") || "";
      oldCart = JSON.parse(actualCart);
      check = oldCart.find((item: Cart) => {
        return (
          item.plant === newItem.plant &&
          item.crystal === newItem.crystal &&
          item.pot === newItem.pot
        );
      });
    }
    if (check) {
      oldCart = oldCart.map((item: Cart) => {
        if (
          item.plant === newItem.plant &&
          item.crystal === newItem.crystal &&
          item.pot === newItem.pot
        ) {
          item.quantity++;
        }
        return item;
      });
    } else {
      oldCart.push(newItem);
    }
    localStorage.setItem("cart", JSON.stringify(oldCart));
    setRefetch(!refetch);
  }
  function setItemQuantity(quantityItem: Cart) {
    let oldCart: Cart[] = [];
    if (localStorage.getItem("cart")) {
      let actualCart: string = localStorage.getItem("cart") || "";
      oldCart = JSON.parse(actualCart);
      oldCart = oldCart.map((item: Cart) => {
        if (
          item.plant === quantityItem.plant &&
          item.crystal === quantityItem.crystal &&
          item.pot === quantityItem.pot
        ) {
          item.quantity = quantityItem.quantity;
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(oldCart));
      setRefetch(!refetch);
    }
  }

  function removeItemCart(dropItem: SimpleCart) {
    if (localStorage.getItem("cart")) {
      const oldCart: Cart[] = JSON.parse(localStorage.getItem("cart") || "");
      const newCart = oldCart.filter(
        (item) =>
          !(
            item.plant === dropItem.plant &&
            item.pot === dropItem.pot &&
            item.crystal === dropItem.crystal
          )
      );
      localStorage.setItem("cart", JSON.stringify(newCart));
      setRefetch(!refetch);
    }
  }

  const data = {
    cart,
    ticketCart,
    addItemCart,
    setItemQuantity,
    removeItemCart,
  };
  return (
    <ThemeContext.Provider value={data}>{props.children}</ThemeContext.Provider>
  );
};

export { CartProvider };
export default ThemeContext;
