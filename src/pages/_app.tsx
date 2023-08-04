import type { AppProps } from "next/app";
import { ThemeProvider } from "../contexts/themeContext";
import { CartProvider } from "../contexts/cartContext";
import TheNavigation from "../components/TheNavigation";
import TheHeader from "../components/TheHeader";
import styles from "../styles/app.module.scss";
import "../styles/globals.scss";

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
