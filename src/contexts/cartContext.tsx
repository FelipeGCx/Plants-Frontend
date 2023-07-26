import { createContext, useEffect, useState } from "react";
import {
  Cart,
  CrystalStock,
  PlantStock,
  Pot,
  Product,
  ProductTicket,
} from "../types";

interface ICartContext {
  cart: Array<Product>;
  ticketCart: Array<ProductTicket>;
  addItemCart: (item: Cart) => void;
}

const defaultState = {
  cart: [],
  ticketCart: [],
  addItemCart: (item: Cart) => {},
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
              name: plant.plant.name,
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
              imagePlant: plant.plant.render,
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
      const url = `https://plants-api-production.up.railway.app/api/v1/stock/plants/${id}/`;
      const response = await fetch(url);
      return response.json();
    };
    const fecthPot = async (id: number) => {
      const url = `https://plants-api-production.up.railway.app/api/v1/pots/${id}/`;
      const response = await fetch(url);
      return response.json();
    };
    const fecthCrystal = async (id: number) => {
      const url = `https://plants-api-production.up.railway.app/api/v1/stock/crystals/${id}/`;
      const response = await fetch(url);
      return response.json();
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

  const data = { cart, ticketCart, addItemCart };
  return (
    <ThemeContext.Provider value={data}>{props.children}</ThemeContext.Provider>
  );
};

export { CartProvider };
export default ThemeContext;
