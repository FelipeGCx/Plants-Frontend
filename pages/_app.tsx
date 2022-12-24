import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navigation from "../components/navigation/navigation";
import styles from "../styles/app.module.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.body}>
      <div>header</div>
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}
