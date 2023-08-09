import Link from "next/link";
import styles from "./style.module.scss";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import cartContext from "../../contexts/cartContext";
import { CartIcon, ShopIcon, CrystalsIcon, SettingsIcon } from "../../assets/icons";

export default function TheNavigation() {
  const [itemsInCart, setItems] = useState(0);
  const { cart } = useContext(cartContext);
  const [active, setActive] = useState("plants");
  const router = useRouter();
  useEffect(() => {
    if (router.route.includes("plants")) {
      setActive("plants");
    }
    if (router.route.includes("cart")) {
      setActive("cart");
    }
    if (router.route.includes("crystals")) {
      setActive("crystals");
    }
    if (router.route.includes("settings")) {
      setActive("settings");
    }
  }, [router]);

  useEffect(() => {
    setItems(cart.length);
  }, [cart]);

  return (
    <nav className={styles.nav}>
      <ul>
        <li className={active == "plants" ? styles.active : ""}>
          <Link href="/plants">
            <ShopIcon className={styles.navicon} />
          </Link>
        </li>
        <li
          className={`${active == "cart" ? styles.active : ""} ${styles.cart}`}
          data-items={itemsInCart}
        >
          <Link href="/cart">
            <CartIcon className={styles.navicon} />
          </Link>
        </li>
        <li className={active == "crystals" ? styles.active : ""}>
          <Link href="/crystals">
            <CrystalsIcon className={styles.navicon} />
          </Link>
        </li>
        <li className={active == "settings" ? styles.active : ""}>
          <Link href="/plants">
            <SettingsIcon className={styles.navicon} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
