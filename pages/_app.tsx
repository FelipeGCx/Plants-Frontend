import "../styles/globals.scss";
import type { AppProps } from "next/app";
import TheNavigation from "../components/TheNavigation";
import TheHeader from "../components/TheHeader";
import styles from "../styles/app.module.scss";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [prefersDarkMode, setPrefersDarkMode] = useState(false);
  const [theme, setTheme] = useState(prefersDarkMode ? "dark" : "light");

  () => {
    const lsTheme = localStorage.getItem("theme");
    if (!lsTheme) {
      const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
      localStorage.setItem("theme", prefers ? "dark" : "light");
      setPrefersDarkMode(prefers);
    }
    setPrefersDarkMode(lsTheme == "dark");
  };

  useEffect(() => {
    setTheme(prefersDarkMode ? "dark" : "light");
    document.body.classList.remove("app-dark");
    document.body.classList.remove("app-light");
    document.body.classList.add(theme == "light" ? "app-light" : "app-dark");
  });

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div className={styles.body}>
      <TheHeader onClick={toggleTheme} />
      <TheNavigation />
      <Component {...pageProps} />
    </div>
  );
}
