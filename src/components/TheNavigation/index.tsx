import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import shop from "./assets/shop.svg";
import cartIcon from "./assets/cart.svg";
import crystals from "./assets/crystals.svg";
import favorite from "./assets/favorite.svg";
import settings from "./assets/settings.svg";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import cartContext from "../../contexts/cartContext";

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
            <Image className={styles.navicon} src={shop} alt="shop icon" />
          </Link>
        </li>
        <li
          className={`${active == "cart" ? styles.active : ""} ${styles.cart}`}
          data-items={itemsInCart}
        >
          <Link href="/cart">
            <Image className={styles.navicon} src={cartIcon} alt="cart icon" />
          </Link>
        </li>
        <li className={active == "crystals" ? styles.active : ""}>
          <Link href="/crystals">
            <Image
              className={styles.navicon}
              src={crystals}
              alt="crystals icon"
            />
          </Link>
        </li>
        <li className={active == "settings" ? styles.active : ""}>
          <Link href="/plants">
            <Image
              className={styles.navicon}
              src={settings}
              alt="settings icon"
              width={48}
              height={48}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
