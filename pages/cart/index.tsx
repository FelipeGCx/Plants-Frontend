import ThePayMethods from "./components/ThePayMethods";
import TheProductCard from "./components/TheProductCard";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { Cart, CrystalStock, PlantStock, Pot, Product } from "../../types";

export default function TheCart() {
  const [cart, setCart] = useState<Product[]>();
  const handlerDelete = (id: number, idPot: number, idCrystal: number) => {
    if (localStorage.getItem("cart")) {
      const oldCart: Cart[] = JSON.parse(localStorage.getItem("cart") || "");
      const newCart = oldCart.filter(item => !(item.plant === id && item.pot === idPot && item.crystal === idCrystal));
      localStorage.setItem("cart", JSON.stringify(newCart));
      fetchCart();
    }
  }
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
          price: plant.price -
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

  return (
    <main className={styles.cart}>
      <ThePayMethods />
      <ul className={styles.products}>
        {cart?.map((product: Product, i: number) => {
          return (
            <TheProductCard
              key={i}
              product={product} delete={handlerDelete} />
          );
        })}
      </ul>
      {/* <TheProductList /> */}
    </main>
  );
}
