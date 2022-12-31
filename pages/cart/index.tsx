import ThePayMethods from "../../components/ThePayMethods";
import TheProductCard from "../../components/TheProductCard";
import Cart from "./cart.json";
import styles from "./style.module.scss";

type Product = {
  id: number;
  name: string;
  idPot: number;
  pot: string;
  idCrystal: number;
  crystal: string;
  price: number;
  imagePlant: string;
  imageCrystal: string;
  quantity: number;
};

export default function TheCart() {
  return (
    <main className={styles.cart}>
      <ThePayMethods/>
      <ul className={styles.products}>
        {Cart.map((pro) => {
          return (
            <TheProductCard
              id={pro.id}
              name={pro.name}
              idPot={pro.idPot}
              pot={pro.pot}
              idCrystal={pro.idCrystal}
              crystal={pro.crystal}
              price={pro.price}
              imagePlant={pro.imagePlant}
              imageCrystal={pro.imageCrystal}
              quantity={pro.quantity}
            />
          );
        })}
      </ul>
    </main>
  );
}
