import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import TheBrowser from "../../components/TheBrowser";
import icon from "./assets/icon.svg";
import iconDark from "./assets/dark.svg";
import iconLight from "./assets/light.svg";
import iconUser from "./assets/icon-user.png";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "../../contexts/themeContext";

export default function TheHeader() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <header className={styles.header}>
        <div>
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
        </div>
        <div>
          <button onClick={toggleTheme}>
            <Image
              src={theme == "dark" ? iconDark : iconLight}
              alt={theme == "dark" ? "icon sun" : "icon moon"}
              width={48}
              height={48}
            />
          </button>
          <Image src={iconUser} alt={"icon user xsxs"} width={48} height={48} />
        </div>
      </header>
    </>
  );
}
