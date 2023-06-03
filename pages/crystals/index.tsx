import styles from "./style.module.scss";
import Image from "next/image";
import planets from "./planets";
import zodiac from "./zodiac";
import elements from "./elements";
// import CrystalsList from "./crystals.json";
import vibrationIcon from "./assets/vibration.svg";
import favoriteOutline from "./assets/favorite_outline.svg";
import favoriteFilled from "./assets/favorite_filled.svg";
import iconAir from "./assets/elements/air.svg";
import iconWater from "./assets/elements/water.svg";
import iconFire from "./assets/elements/fire.svg";
import iconEarth from "./assets/elements/earth.svg";

import rootChakra from "./assets/chakras/root.svg";
import sacralChakra from "./assets/chakras/sacral.svg";
import solarPlexoChakra from "./assets/chakras/solar.svg";
import heartChakra from "./assets/chakras/heart.svg";
import throatChakra from "./assets/chakras/throat.svg";
import thridEyeChakra from "./assets/chakras/third_eye.svg";
import crownChakra from "./assets/chakras/crown.svg";

import React, { useEffect, useState } from "react";
import TheCrystalCard from "./components/TheCrystalCard";
import { Crystal } from "../../types";

const zodiacList = zodiac.map((item) => {
  return (
    <li key={item.sign}>
      <input type="checkbox" name="zodiac" id={item.sign} />
      <Image
        className="icon"
        src={item.icon}
        alt={item.alt}
        width={20}
        height={20}
      />
    </li>
  );
});

const elementsList = elements.map((item) => {
  return (
    <li key={item.name}>
      <input type="checkbox" name="element" id={item.name} />
      <Image
        className="icon"
        src={item.icon}
        alt={item.alt}
        width={20}
        height={20}
      />
    </li>
  );
});

const planetsList = planets.map((item) => {
  return (
    <li key={item.name}>
      <input type="checkbox" name="planet" id={item.name} />
      <Image
        className="icon"
        src={item.icon}
        alt={item.alt}
        width={20}
        height={20}
      />
    </li>
  );
});

function icon(element: string) {
  switch (element) {
    case "aire":
      return iconAir;
    case "fuego":
      return iconFire;
    case "agua":
      return iconWater;
    case "tierra":
      return iconEarth;
    default:
      return iconAir;
  }
}

function elementsDisplay(list: Array<string>) {
  return list.map((element) => {
    return (
      <li key={element}>
        <Image
          className="icon"
          src={icon(element)}
          alt={`${element} icon`}
          width={18}
          height={18}
        />
      </li>
    );
  });
}

export default function Crystals() {
  const [idUser, setIdUser] = useState(1);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [CrystalsResponse, setCrystalsResponse] = useState<Crystal[]>([]);
  const [totalItems, setTotalItems] = useState(30);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://plants-api-production.up.railway.app/api/v1/crystalis/${idUser}/?page=${page}`
        );
        const data = await response.json();
        setCrystalsResponse(data.results);
        setTotalItems(data.totalItems);
        setLoading(false);
      } catch (err) {
        setError("error");
        setLoading(false);
      }
    }
    fetchData();
  }, [idUser, page]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>An error occurred: {error}</p>;
  } else {
    return (
      // <ul>
      //   {CrystalsResponse.map((crystal: Crystal, i: number) => (
      //     <TheCrystalCard
      //       key={i}
      //       crystal={crystal}
      //       idx={i}
      //       totalItems={totalItems}
      //       order={0}
      //       onFavorite={function (): void {
      //         throw new Error("Function not implemented.");
      //       }}
      //       onNewOrder={function (oldOrder: number): void {
      //         throw new Error("Function not implemented.");
      //       }}
      //       onDisplay={function (dispaly: string): void {
      //         throw new Error("Function not implemented.");
      //       }}
      //       onOrder={function (order: number): void {
      //         throw new Error("Function not implemented.");
      //       }}
      //     />
      //   ))}
      // </ul>
      // // // // dsadasdasdasdasdadasdasd
      <main className={styles.main}>
        <section className={styles.filter}>
          <div>
            <h2>zodiaco</h2>
            <ul>{zodiacList}</ul>
          </div>
          <div>
            <h2>elemento</h2>
            <ul>{elementsList}</ul>
          </div>
          <div>
            <h2>planeta</h2>
            <ul>{planetsList}</ul>
          </div>
        </section>
        <section className={styles.view}>
          <ul className={styles.items}>
            {CrystalsResponse.map((crystal: Crystal, i: number) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              // const [getOrder, setOrder] = useState(
              //   (CrystalsResponse.length - i) * -1
              // );
              // eslint-disable-next-line react-hooks/rules-of-hooks
              // const [getDisplay, setDisplay] = useState("none");
              // function getNewOrder(oldOrder: number, cols: number) {
              //   let n = oldOrder;
              //   let flag = true;
              //   while (flag) {
              //     if (n <= cols) {
              //       flag = false;
              //     } else {
              //       n -= cols;
              //     }
              //   }
              //   setOrder(getOrder - n);
              // }
              return (
                <>
                  <TheCrystalCard key={i}
                    crystal={crystal}
                    idx={i}
                    totalItems={totalItems}
                    order={0}
                    onFavorite={function (): void {
                      throw new Error("Function not implemented.");
                    }}
                    onNewOrder={function (oldOrder: number): void {
                      throw new Error("Function not implemented.");
                    }}
                    onDisplay={function (dispaly: string): void {
                      throw new Error("Function not implemented.");
                    }}
                    onOrder={function (order: number): void {
                      throw new Error("Function not implemented.");
                    }} />
                  {/* <li
                    key={i}
                    className={styles.card}
                    id={crystal.name}
                    style={{ order: getOrder }}
                  >
                    <input
                      className={styles.input}
                      type="radio"
                      name="crystal"
                      id={crystal.name}
                      onClick={() => {
                        getNewOrder(i + 1, 3);
                        setDisplay("grid");
                      }}
                      onBlur={() => {
                        setOrder((CrystalsResponse.length - i) * -1);
                        setDisplay("none");
                      }}
                    />
                    <Image
                      className={styles.favorite}
                      src={crystal.favorite ? favoriteFilled : favoriteOutline}
                      alt="favorite icon crystal"
                      width={24}
                      height={24}
                    />
                    <Image
                      className={styles.point}
                      src={
                        crystal.imageCrystal ||
                        "https://firebasestorage.googleapis.com/v0/b/simple-a5eec.appspot.com/o/crystalsPoint%2Fnot%20found.png?alt=media&token=fd19155e-edb8-4e67-9e13-76a62cc59ce2"
                      }
                      alt={`${crystal.name} crystal point`}
                      width={300}
                      height={300}
                    />
                    <div className={styles.data}>
                      <h2>{crystal.name}</h2>
                      <div className={styles.elements}>
                        <ul>{elementsDisplay(crystal.zodiac)}</ul>
                        <div className={styles.vibration}>
                          {crystal.vibration || 0}
                          <Image
                            className="icon"
                            src={vibrationIcon}
                            alt="vibration icon"
                            width={18}
                            height={18}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className={styles.benefits}
                    style={{
                      order: getOrder,
                      display: getDisplay,
                    }}
                  >
                    <h1>{crystal.name}</h1>
                    <Image
                      className={styles.point}
                      src={
                        crystal.imageGemstone ||
                        "https://firebasestorage.googleapis.com/v0/b/simple-a5eec.appspot.com/o/crystalsPoint%2Fnot%20found.png?alt=media&token=fd19155e-edb8-4e67-9e13-76a62cc59ce2"
                      }
                      alt={`${crystal.name} gemstone`}
                      width={300}
                      height={300}
                    />
                    <ul>
                      {crystal.properties.map((propierty: string, p: number) => {
                        return <li key={p}>{propierty}</li>;
                      })}
                    </ul>
                    <ul>
                      {crystal.zodiac.map((sign: string, z: number) => {
                        return <li key={z}>{sign}</li>;
                      })}
                    </ul>
                    <ul>
                      {crystal.planets.map((planet: string, pl: number) => {
                        return <li key={pl}>{planet}</li>;
                      })}
                    </ul>
                  </li>
                  <li
                    className={styles.propierties}
                    style={{
                      order: getOrder,
                      display: getDisplay,
                    }}
                  >
                    <p>{crystal.description}</p>
                    <ul>
                      {crystal.benefits.map((benefit: string, b: number) => {
                        return <li key={b}>{benefit}</li>;
                      })}
                    </ul>
                    <ul className={styles.chakras}>
                      <li>
                        <Image
                          src={rootChakra}
                          alt="icon root chakra"
                          style={{
                            filter: crystal.chakras.includes("root chakra")
                              ? "drop-shadow(2px 4px 6px #ffffffa8)"
                              : "brightness(0.5) contrast(10) invert(1) grayscale(2) invert(1) brightness(0) contrast(0.5)",
                            opacity: crystal.chakras.includes("root chakra")
                              ? "100%"
                              : "10%",
                          }}
                          width={40}
                          height={40}
                        />
                        <h3>root chakra</h3>
                      </li>
                      <li>
                        <Image
                          src={sacralChakra}
                          alt="icon sacral chakra"
                          style={{
                            filter: crystal.chakras.includes("sacral chakra")
                              ? "drop-shadow(2px 4px 6px #ffffffa8)"
                              : "brightness(0.5) contrast(10) invert(1) grayscale(2) invert(1) brightness(0) contrast(0.5)",
                            opacity: crystal.chakras.includes("sacral chakra")
                              ? "100%"
                              : "10%",
                          }}
                          width={40}
                          height={40}
                        />
                        <h3>sacral chakra</h3>
                      </li>
                      <li>
                        <Image
                          src={solarPlexoChakra}
                          alt="icon solar plexus chakra"
                          style={{
                            filter: crystal.chakras.includes("solar plexus chakra")
                              ? "drop-shadow(2px 4px 6px #ffffffa8)"
                              : "brightness(0.5) contrast(10) invert(1) grayscale(2) invert(1) brightness(0) contrast(0.5)",
                            opacity: crystal.chakras.includes(
                              "solar plexus chakra"
                            )
                              ? "100%"
                              : "10%",
                          }}
                          width={40}
                          height={40}
                        />
                        <h3>solar plexus chakra</h3>
                      </li>
                      <li>
                        <Image
                          src={heartChakra}
                          alt="icon heart chakra"
                          style={{
                            filter: crystal.chakras.includes("heart chakra")
                              ? "drop-shadow(2px 4px 6px #ffffffa8)"
                              : "brightness(0.5) contrast(10) invert(1) grayscale(2) invert(1) brightness(0) contrast(0.5)",
                            opacity: crystal.chakras.includes("heart chakra")
                              ? "100%"
                              : "10%",
                          }}
                          width={40}
                          height={40}
                        />
                        <h3>heart chakra</h3>
                      </li>
                      <li>
                        <Image
                          src={throatChakra}
                          alt="icon throat chakra"
                          style={{
                            filter: crystal.chakras.includes("throat chakra")
                              ? "drop-shadow(2px 4px 6px #ffffffa8)"
                              : "brightness(0.5) contrast(10) invert(1) grayscale(2) invert(1) brightness(0) contrast(0.5)",
                            opacity: crystal.chakras.includes("throat chakra")
                              ? "100%"
                              : "10%",
                          }}
                          width={40}
                          height={40}
                        />
                        <h3>throat chakra</h3>
                      </li>
                      <li>
                        <Image
                          src={thridEyeChakra}
                          alt="icon third eye chakra"
                          style={{
                            filter: crystal.chakras.includes("third eye chakra")
                              ? "drop-shadow(2px 4px 6px #ffffffa8)"
                              : "brightness(0.5) contrast(10) invert(1) grayscale(2) invert(1) brightness(0) contrast(0.5)",
                            opacity: crystal.chakras.includes("third eye chakra")
                              ? "100%"
                              : "10%",
                          }}
                          width={40}
                          height={40}
                        />
                        <h3>third eye chakra</h3>
                      </li>
                      <li>
                        <Image
                          src={crownChakra}
                          alt="icon crown chakra"
                          style={{
                            filter: crystal.chakras.includes("crown s")
                              ? "drop-shadow(2px 4px 6px #ffffffa8)"
                              : "brightness(0.5) contrast(10) invert(1) grayscale(2) invert(1) brightness(0) contrast(0.5)",
                            opacity: crystal.chakras.includes("crown chakra")
                              ? "100%"
                              : "10%",
                          }}
                          width={40}
                          height={40}
                        />
                        <h3>crown chakra</h3>
                      </li>
                    </ul>
                  </li> */}
                </>
              );
            })}
          </ul>
        </section>
      </main>
    );
  }


  // );
}
