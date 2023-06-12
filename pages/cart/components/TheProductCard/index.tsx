import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import edit from "./assets/edit.svg";
import clean from "./assets/delete.svg";
import TheQuantityCard from "../TheQuantityCard";
import { Cart, Product } from "../../../../types";


const formatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

export default function TheProductCard(props: { product: Product, delete(id: number, idPot: number, idCrystal: number): void }) {
  const [total, setTotal] = useState(props.product.price * props.product.quantity);
  const [quantity, setQuantity] = useState(props.product.quantity);

  const handleSubstract = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotal(quantity * props.product.price);
    }
  };
  const handleAdd = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  useEffect(() => {
    let oldCart: Cart[] = [];
    let newItem: Cart = {
      plant: props.product.id,
      crystal: props.product.idCrystal,
      pot: props.product.idPot,
      quantity: quantity,
    }
    if (localStorage.getItem("cart")) {
      let actualCart: string = localStorage.getItem("cart") || "";
      oldCart = JSON.parse(actualCart);
      oldCart = oldCart.map((item: Cart) => {
        if (item.plant === newItem.plant &&
          item.crystal === newItem.crystal &&
          item.pot === newItem.pot) {
          item.quantity = quantity;
        }
        return item;
      })
      localStorage.setItem("cart", JSON.stringify(oldCart));
    }
  },[quantity,props])

  useEffect(() => {
    setTotal(quantity * props.product.price);
  })
  return (
    <div className={styles.productCard}>
      <div className={styles.images}>
        <div className={styles.picture}>
          <Image
            fill
            src={props.product.imagePlant}
            alt={`image plant ${props.product.name}`}
            sizes="100%"
          />
          <Image
            fill
            src={props.product.renderPot}
            alt={`image pot ${props.product.potName}`}
            sizes="100%"

          />
        </div>
        
        <Image
          src={props.product.imageCrystal}
          alt={`image crystal ${props.product.crystalName}`}
          width={60}
          height={60}
        />
      </div>
      <div className={styles.details}>
        <h1>{props.product.name.toLowerCase()}</h1>
        <p>Matera Céramica {props.product.potName}</p>
        <p>Cristal {props.product.crystalName}</p>
        <div className={styles.pill}>{formatter.format(props.product.price)}</div>
      </div>
      <TheQuantityCard
        quantity={quantity}
        onSubstract={handleSubstract}
        onAdd={handleAdd}
      />
      <div className={styles.info}>
        <div className={styles.actions}>
          {/* <Link
            href={`plants/plant/${props.product.id}?crystal=${props.product.idCrystal}&pot=${props.product.idPot}`}
          >
            <Image src={edit} width={48} height={48} alt="icon edit" />
          </Link> */}
          <button onClick={() => props.delete(props.product.id, props.product.idPot, props.product.idCrystal)}>
            <Image src={clean} width={48} height={48} alt="icon delete" />
          </button>
        </div>
        <div className={styles.prices}>
          <p>SubTotal</p>
          <p>{formatter.format(total)}</p>
        </div>
      </div>
    </div>
  );
}
