import "../styles/globals.scss";
import type { AppProps } from "next/app";
import TheNavigation from "../components/TheNavigation";
import TheHeader from "../components/TheHeader";
import styles from "../styles/app.module.scss";
import { ThemeProvider } from "../contexts/themeContext";
import { CartProvider } from "../contexts/cartContext";

export default function App({ Component, pageProps }: AppProps) {
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
