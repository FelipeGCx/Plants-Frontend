import styles from "./style.module.scss";
import Image from "next/image";
import planets from "./planets";
import zodiac from "./zodiac";
import elements from "./elements";
import iconAir from "./assets/elements/air.svg";
import iconWater from "./assets/elements/water.svg";
import iconFire from "./assets/elements/fire.svg";
import iconEarth from "./assets/elements/earth.svg";

import iconArrowLeft from "./assets/arrow-left.svg";
import iconArrowRight from "./assets/arrow-right.svg";

import React, { useEffect, useState } from "react";
import ThePlantCard from "./components/ThePlantCard";

const zodiacList = zodiac.map((item) => {
  return (
    <li>
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
    <li>
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
    <li>
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

export default function Plants() {
  const [page, setPage] = useState(1);
  const [idUser, setIdUser] = useState(1);
  const [PlantsList, setPlantsList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalItems, setTotalItems] = useState(30);
  const [totalPages, setTotalPages] = useState(3);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://plants-api-production.up.railway.app/api/v1/plantis/${idUser}/?page=${page}`
        );
        const data = await response.json();
        setPlantsList(data.results);
        console.log(data.results);
        setTotalItems(data.totalItems);
        setTotalPages(data.totalPages);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>An error occurred: {error}</p>;
  } else {
    return (
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
          <div className={styles.navsref}>
            <div>
              <a href="">Plantas</a>
              <a href="">Todas</a>
            </div>
            <div>
              <button>
                <Image src={iconArrowLeft} alt="icon arrow left" />
              </button>
              <span>{`${page}/${totalPages}`}</span>
              <button>
                <Image src={iconArrowRight} alt="icon arrow right" />
              </button>
            </div>
          </div>
          <ul className={styles.items}>
            {PlantsList.map((plant) => {
              return (
                <ThePlantCard
                  plant={{
                    id: plant.id,
                    name: plant.name,
                    quantity: plant.quantity,
                    discount: plant.discount,
                    createdAt: plant.createdAt,
                    favorite: plant.favorite,
                    imageFront: plant.imageFront,
                    vibration: plant.vibration,
                    price: plant.price,
                  }}
                />
              );
            })}
          </ul>
        </section>
      </main>
    );
  }
}
