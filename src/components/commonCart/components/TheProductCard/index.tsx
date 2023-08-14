import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import TheQuantityCard from "./components/TheQuantityCard";
import { Cart, Product } from "../../../../types";
import { DeleteIcon } from "../../../../assets/icons";

export default function TheProductCard(props: {
  product: Product;
  delete(id: number, idPot: number, idCrystal: number): void;
  update(item: Cart): void;
}) {
  const formatter = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });
  const [total, setTotal] = useState(0);

  const handleSubstract = () => {
    if (props.product.quantity > 1) {
      const item: Cart = {
        plant: props.product.id,
        pot: props.product.idPot,
        crystal: props.product.idCrystal,
        quantity: props.product.quantity - 1,
      };
      props.update(item);
    }
  };
  const handleAdd = () => {
    if (props.product.quantity < 10) {
      const item: Cart = {
        plant: props.product.id,
        pot: props.product.idPot,
        crystal: props.product.idCrystal,
        quantity: props.product.quantity + 1,
      };
      props.update(item);
    }
  };

  useEffect(() => {
    const calculateTotal = () => {
      const itemPrice =
        props.product.price +
        props.product.potPrice +
        props.product.crystalPrice;
      setTotal(props.product.quantity * itemPrice);
    };
    calculateTotal();
  }, [props.product]);

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
        <div className={styles.priceTags}>
          <span className={styles.pill}>
            {formatter.format(props.product.price)}
          </span>
          <span className={styles.pill}>
            {formatter.format(props.product.potPrice)}
          </span>
          <span className={styles.pill}>
            {formatter.format(props.product.crystalPrice)}
          </span>
        </div>
      </div>
      <TheQuantityCard
        quantity={props.product.quantity}
        onSubstract={handleSubstract}
        onAdd={handleAdd}
      />
      <div className={styles.info}>
        <div className={styles.actions}>
          <button
            onClick={() =>
              props.delete(
                props.product.id,
                props.product.idPot,
                props.product.idCrystal
              )
            }
          >
            <DeleteIcon className={styles.icon} />
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
