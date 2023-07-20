import styles from "./style.module.scss";
import turtle from "./assets/turtle.webp";
import Image from "next/image";
import Link from "next/link";

export default function TheNotFound() {
  return (
    <section className={styles.notFound}>
      <Image src={turtle} alt="turtle not found" />
      <h1>No hay Resultados</h1>
      <Link href={"/plants"} className={"button"}>
        Inicio
      </Link>
    </section>
  );
}
