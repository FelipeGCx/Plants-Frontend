import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import edit from "./assets/edit.svg";
import clean from "./assets/delete.svg";
import TheQuantityCard from "../TheQuantityCard";

type Product = {
  id: number;
  name: string;
  idPot: number;
  pot: string;
  idCrystal: number;
  crystal: string;
  price: number;
  imagePlant: string;
  imageCrystal: string;
  quantity: number;
};

const Quantity = () => {
  return <div></div>;
};

const formatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

export default function TheProductCard(product: Product) {
  const [total, setTotal] = useState(product.price * product.quantity);
  const [quantity, setQuantity] = useState(product.quantity);

  const handleSubstract = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotal(quantity * product.price);
    }
  };
  const handleAdd = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };
  useEffect(()=>{
  setTotal(quantity * product.price);
  })
  return (
    <div className={styles.productCard}>
      <div className={styles.images}>
        <Image
          src={product.imagePlant}
          alt={`image plant ${product.name}`}
          width={200}
          height={200}
        />
        <Image
          src={product.imageCrystal}
          alt={`image crystal ${product.crystal}`}
          width={60}
          height={60}
        />
      </div>
      <div className={styles.details}>
        <h1>{product.name.toLowerCase()}</h1>
        <p>Matera Céramica {product.pot}</p>
        <p>Cristal {product.crystal}</p>
        <div className={styles.pill}>{formatter.format(product.price)}</div>
      </div>
      <TheQuantityCard
        quantity={quantity}
        onSubstract={handleSubstract}
        onAdd={handleAdd}
      />
      <div className={styles.info}>
        <div className={styles.actions}>
          <Link
            href={`plants/product/${product.id}?crystal=${product.idCrystal}&pot=${product.idPot}`}
          >
            <Image src={edit} width={48} height={48} alt="icon edit" />
          </Link>
          <Image src={clean} width={48} height={48} alt="icon delete" />
        </div>
        <div className={styles.prices}>
          <p>SubTotal</p>
          <p>{formatter.format(total)}</p>
        </div>
      </div>
    </div>
  );
}
