import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import search from "./assets/search.svg";
import arrow from "./assets/arrow-right.svg";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

export default function TheHeader() {
  const [valueSearch, setValue] = useState("");
  const [displayDrop, setDisplay] = useState("none");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handlerState = (event: any) => {
    let value = event.target.value;
    setValue(value.toString());
    if (value.length <= 0) {
      setDisplay("none");
    } else {
      setDisplay("flex");
    }
  };
  const handlerInput = (event: any) => {
    let value = event.target.value;
    if (event.keyCode === 13 && value.length >= 1) {
      const { pathname } = router;
      let path = "/plants";
      if (pathname.includes("crystals")) {
        path = "/crystals";
      }
      router.push({
        pathname: path,
        query: { name: value },
      });
      setDisplay("none");
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.ctrlKey && event.code === "KeyK" && inputRef.current) {
        inputRef.current.focus();
      }
    });
  }, []);

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
          ref={inputRef}
          type="text"
          name="buscador"
          placeholder="Buscar"
          value={valueSearch}
          onClick={handlerState}
          onChange={handlerState}
          onKeyDown={handlerInput}
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
