import "../styles/globals.css";
import type { AppProps } from "next/app";
import TheNavigation from "../components/TheNavigation";
import TheHeader from "../components/TheHeader";
import styles from "../styles/app.module.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.body}>
      <TheHeader/>
      <TheNavigation />
      <Component {...pageProps} />
    </div>
  );
}
