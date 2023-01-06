import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import TheBrowser from "../../components/TheBrowser";
import icon from "./assets/icon.svg";
import iconDark from "./assets/dark.svg";
import iconLight from "./assets/light.svg";
import { useEffect, useState } from "react";

export default function TheHeader(props: { onClick: () => void }) {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    let lsTheme = localStorage.getItem("theme");
    if (lsTheme == null || lsTheme == undefined) {
      const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
      localStorage.setItem("theme", prefers ? "dark" : "light");
      lsTheme = prefers ? "dark" : "light";
    }
    setTheme(lsTheme);
  }, []);
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
        <button onClick={props.onClick}>
          <Image
            src={theme == "dark" ? iconLight : iconDark}
            alt={theme == "dark" ? "icon moon outline" : "icon moon filled"}
          />
        </button>
      </header>
    </>
  );
}
