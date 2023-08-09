import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import TheBrowser from "../../components/TheBrowser";
import iconUser from "./assets/icon-user.webp";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "../../contexts/themeContext";
import { MitraIcon, ThemeDarkIcon, ThemeLightIcon } from "../../assets/icons";

export default function TheHeader() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <header className={styles.header}>
        <div>
          <Link href={"/plants"} className={styles.logo}>
            <MitraIcon className={styles.icon} />
            <h1>Mitra</h1>
          </Link>
          <TheBrowser />
        </div>
        <div>
          <button onClick={toggleTheme}>
            {theme == "dark" ? <ThemeDarkIcon className={styles.toggleIcon} /> : <ThemeLightIcon className={styles.toggleIcon} />}
          </button>
          <Image src={iconUser} alt={"icon user xsxs"} width={48} height={48} />
        </div>
      </header>
    </>
  );
}
