import Image from "next/image";
import styles from "./style.module.scss";
import arrowLeft from "./assets/arrow-left.svg";
import arrowRight from "./assets/arrow-right.svg";

export default function TheQuantityCard(props: {
  quantity: number;
  onSubstract: () => void;
  onAdd: () => void;
}) {
  return (
    <div className={styles.quantity}>
      <h1>Cantidad</h1>
      <div className={styles.shift}>
        <a onClick={props.onSubstract}>
          <Image src={arrowLeft} width={48} height={48} alt="arrow left icon" />
        </a>
        <p>{props.quantity.toString()}</p>
        <a onClick={props.onAdd}>
          <Image
            src={arrowRight}
            width={48}
            height={48}
            alt="arrow right icon"
          />
        </a>
      </div>
    </div>
  );
}
