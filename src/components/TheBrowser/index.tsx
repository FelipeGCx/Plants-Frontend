import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import search from "./assets/search.svg";
import arrow from "./assets/arrow-right.svg";
import React, { useState } from "react";

export default function TheHeader() {
  const [valueSearch, setValue] = useState("");
  const [displayDrop, setDisplay] = useState("none");
  const handlerState = (e: any) => {
    let value = e.target.value;
    setValue(value.toString());
    if (value.length <= 0) {
      setDisplay("none");
    } else {
      setDisplay("flex");
    }
  };
  return (
    <div
      className={styles.search}
      onBlur={(event) => {
        if (!event.relatedTarget) {
          setDisplay("none");
        }
      }}
    >
      <div className={styles.input}>
        <input
          type="text"
          name="buscador"
          placeholder="Buscar"
          value={valueSearch}
          onClick={handlerState}
          onChange={handlerState}
        />
        <Image
          className="icon"
          src={search}
          alt="search icon"
          width={48}
          height={48}
        />
      </div>
      <div className={styles.drop} style={{ display: displayDrop }}>
        <div
          className={styles.dropitem}
          onClick={() => {
            setDisplay("none");
          }}
        >
          <p>
            Buscar &quot;<span>{valueSearch}</span>&quot;
          </p>
          <Link href={`/plants/?name=${valueSearch}`}>
            En Plantas
            <Image src={arrow} alt="arrow right icon" width={48} height={48} />
          </Link>
        </div>
        <div
          className={styles.dropitem}
          onClick={() => {
            setDisplay("none");
          }}
        >
          <p>
            Buscar &quot;<span>{valueSearch}</span>&quot;
          </p>
          <Link href={`/crystals/?name=${valueSearch}`}>
            En Cristales
            <Image src={arrow} alt="arrow right icon" width={48} height={48} />
          </Link>
        </div>
      </div>
    </div>
  );
}
