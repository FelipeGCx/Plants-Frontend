import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import TheBrowser from "../../components/TheBrowser";
import icon from "./assets/icon.svg";

export default function TheHeader(props: { onClick: () => void }) {
  return (
    <>
      <header className={styles.header}>
        <Link href={"/plants"} className={styles.logo}>
          <Image
            className="icon"
            src={icon}
            alt="logo"
            width={48}
            height={48}
          />
          <h1>Mitra</h1>
        </Link>
        <TheBrowser />
        <button onClick={props.onClick}>theme</button>
      </header>
    </>
  );
}
