import ThePayMethods from "./components/ThePayMethods";
import TheProductCard from "./components/TheProductCard";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import {
  Cart,
  CrystalStock,
  PlantStock,
  Pot,
  Product,
  ProductTicket,
} from "../../types";
import TheProductList from "./components/TheProductList";

export default function TheCart() {
  const [cart, setCart] = useState<Product[]>();
  const [ticketCart, setTicketCart] = useState<ProductTicket[]>([]);
  const handlerDelete = (id: number, idPot: number, idCrystal: number) => {
    if (localStorage.getItem("cart")) {
      const oldCart: Cart[] = JSON.parse(localStorage.getItem("cart") || "");
      const newCart = oldCart.filter(
        (item) =>
          !(
            item.plant === id &&
            item.pot === idPot &&
            item.crystal === idCrystal
          )
      );
      localStorage.setItem("cart", JSON.stringify(newCart));
      fetchCart();
    }
  };
  async function fetchCart() {
    const cart = JSON.parse(localStorage.getItem("cart") || "");
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
  async function fecthPlant(id: number) {
    const url = `https://plants-api-production.up.railway.app/api/v1/stock/plants/${id}/`;
    const response = await fetch(url);
    return response.json();
  }
  async function fecthPot(id: number) {
    const url = `https://plants-api-production.up.railway.app/api/v1/pots/${id}/`;
    const response = await fetch(url);
    return response.json();
  }
  async function fecthCrystal(id: number) {
    const url = `https://plants-api-production.up.railway.app/api/v1/stock/crystals/${id}/`;
    const response = await fetch(url);
    return response.json();
  }
  useEffect(() => {
    fetchCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    function createTicket() {
      if (cart) {
        let result: ProductTicket[] = [];
        const keys = ["name","potName","crystalName"]
        for (const obj of cart) {
          for (let index = 0; index < keys.length; index++) {
            const key = keys[index];
            const existingObj = result.find((item) => item.name === obj[key]);
            if (existingObj) {
              existingObj.quantity += obj.quantity;
            } else {
              result.push({
                name: obj[key],
                price: obj.price,
                quantity: obj.quantity,
              });
            }
          }
        }
        result.sort((a, b) => a.name.localeCompare(b.name));
        console.log(result);
        setTicketCart(result);
      }
    }
    createTicket();
  }, [cart]);

  return (
    <main className={styles.cart}>
      <ThePayMethods />
      <ul className={styles.products}>
        {cart?.map((product: Product, i: number) => {
          return (
            <TheProductCard key={i} product={product} delete={handlerDelete} />
          );
        })}
      </ul>
      <TheProductList products={ticketCart} />
    </main>
  );
}
