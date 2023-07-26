import "../styles/globals.scss";
import type { AppProps } from "next/app";
import TheNavigation from "../components/TheNavigation";
import TheHeader from "../components/TheHeader";
import styles from "../styles/app.module.scss";
import { useEffect, useState } from "react";
import { ThemeProvider } from "../contexts/themeContext";
import { CartProvider } from "../contexts/cartContext";

export default function App({ Component, pageProps }: AppProps) {
  // const [theme, setTheme] = useState("light");

  // useEffect(() => {
  //   let lsTheme = localStorage.getItem("theme");
  //   if (lsTheme == null || lsTheme == undefined) {
  //     const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
  //     localStorage.setItem("theme", prefers ? "dark" : "light");
  //     lsTheme = prefers ? "dark" : "light";
  //   }
  //   setTheme(lsTheme);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("theme", theme == "light" ? "light" : "dark");
  //   document.body.classList.remove("app-dark");
  //   document.body.classList.remove("app-light");
  //   document.body.classList.add(theme == "light" ? "app-light" : "app-dark");
  // }, [theme]);

  // function toggleTheme() {
  //   setTheme(theme === "light" ? "dark" : "light");
  // }
  return (
    <div className={styles.body}>
      <CartProvider>
        <ThemeProvider>
          <TheHeader />
          <TheNavigation />
          <Component {...pageProps} />
        </ThemeProvider>
      </CartProvider>
    </div>
  );
}
