import styles from "./style.module.scss";
import { ArrowLeftIcon, ArrowRightIcon } from "../../../../../../assets/icons";

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
          <ArrowLeftIcon className={styles.icon} />
        </a>
        <p>{props.quantity?.toString()}</p>
        <a onClick={props.onAdd}>
          <ArrowRightIcon className={styles.icon} />
        </a>
      </div>
    </div>
  );
}
