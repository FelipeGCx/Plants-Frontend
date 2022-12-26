import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import TheBrowser from "../../components/TheBrowser";
import icon from "./assets/icon.svg";

export default function TheHeader() {
  return (
    <>
      <header className={styles.header}>
        <Link href={"/plants"} className={ styles.logo}>
          <Image src={icon} alt="logo" width={48} height={48} />
          <h1>Mitra</h1> 
        </Link>
       <TheBrowser/>
       <button>theme</button>
      </header>
    </>
  );
}
