import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import search from "./assets/search.svg";
import arrow from "./assets/arrow-right.svg";
import React, { useState } from "react";

type Product = {
  id: Number;
  name: string;
  pot: string;
  crystal: string;
  price: string;
  imagePlant: string;
  imageCrystal: string;
};

const Quantity = () => {
  return <div></div>;
};

export default function TheProductCard(product: Product) {
  const [total, setTotal] = useState(0);
  return (
    <div className={styles.productCard}>
      <div>
        <Image
          src={product.imagePlant}
          alt={`image plant ${product.name}`}
          width={120}
          height={120}
        />
        <Image
          src={product.imageCrystal}
          alt={`image crystal ${product.crystal}`}
          width={60}
          height={60}
        />
      </div>
      <div>
        <h1>{product.name}</h1>
        <p>Matera Céramica {product.pot}</p>
        <p>Cristal {product.crystal}</p>
        <div>${product.price}</div>
      </div>
      <div></div>
      <div>
        <div>
          <Image />
          <Image />
        </div>
        <div>
          <p>SubTotal</p>
          <p>${ total }</p>
        </div>
      </div>
    </div>
  );
}
