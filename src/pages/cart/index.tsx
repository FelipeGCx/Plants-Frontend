import ThePayMethods from "../../components/commonCart/components/ThePayMethods";
import TheProductCard from "../../components/commonCart/components/TheProductCard";
import TheProductList from "../../components/commonCart/components/TheProductList";
import styles from "./style.module.scss";
import { useContext } from "react";
import { SimpleCart, Product, Cart } from "../../types";
import cartContext from "../../contexts/cartContext";

export default function TheCart() {
  const { cart, ticketCart, removeItemCart, setItemQuantity } = useContext(cartContext);
  const handlerDelete = (id: number, idPot: number, idCrystal: number) => {
    const dropItem: SimpleCart = {
      plant: id,
      pot: idPot,
      crystal: idCrystal,
    };
    removeItemCart(dropItem);
  };
  const handlerUpdate = (item: Cart) => {
    setItemQuantity(item);
  };
  return (
    <main className={styles.cart}>
      <ThePayMethods />
      <ul className={styles.products}>
        {cart?.map((product: Product, i: number) => {
          return (
            <TheProductCard
              key={i}
              product={product}
              delete={handlerDelete}
              update={handlerUpdate}
            />
          );
        })}
      </ul>
      <TheProductList products={ticketCart} />
    </main>
  );
}
