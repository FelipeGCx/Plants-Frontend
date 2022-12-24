import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import shop from "./assets/shop.svg";
import cart from "./assets/cart.svg";
import crystals from "./assets/crystals.svg";
import favorite from "./assets/favorite.svg";
import settings from "./assets/settings.svg";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/home" >
            <Image className={styles.icon} src={shop} alt="shop icon" />
          </Link>
        </li>
        <li>
          <Link href="/home">
            <Image className={styles.icon} src={cart} alt="cart icon" />
          </Link>
        </li>
        <li>
          <Link href="/crystals">
            <Image className={styles.icon} src={crystals} alt="crystals icon" />
          </Link>
        </li>
        <li>
          <Link href="/home">
            <Image
              className={styles.icon}
              src={favorite}
              alt="whishlist icon"
            />
          </Link>
        </li>
        <li>
          <Link href="/home">
            <Image className={styles.icon} src={settings} alt="settings icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
