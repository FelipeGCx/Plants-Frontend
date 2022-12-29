import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import shop from "./assets/shop.svg";
import cart from "./assets/cart.svg";
import crystals from "./assets/crystals.svg";
import favorite from "./assets/favorite.svg";
import settings from "./assets/settings.svg";

export default function TheNavigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/plants" >
            <Image className={styles.navicon} src={shop} alt="shop icon" />
          </Link>
        </li>
        <li className={ styles.cart} data-items="4">
          <Link href="/plants">
            <Image className={styles.navicon} src={cart} alt="cart icon" />
          </Link>
        </li>
        <li>
          <Link href="/crystals">
            <Image  className={styles.navicon} src={crystals} alt="crystals icon" />
          </Link>
        </li>
        <li>
          <Link href="/plants">
            <Image
              className={styles.navicon}
              src={favorite}
              alt="whishlist icon"
            />
          </Link>
        </li>
        <li>
          <Link href="/plants">
            <Image  className={styles.navicon} src={settings} alt="settings icon" width={48} height={48}/>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
