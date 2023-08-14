import styles from "./style.module.scss";
import {
  AquariusIcon,
  AriesIcon,
  CancerIcon,
  CapricornIcon,
  GeminiIcon,
  LeoIcon,
  LibraIcon,
  PiscesIcon,
  ScorpioIcon,
  TaurusIcon,
  VirgoIcon,
  SagittariusIcon,
} from "../../../../../../../../../assets/icons";

const zodiac = [
  {
    sign: "aries",
    icon: <AriesIcon className={styles.icon}/>,
    value: "aries",
    alt: "aries icon",
  },
  {
    sign: "taurus",
    icon: <TaurusIcon className={styles.icon}/>,
    value: "tauro",
    alt: "taurus icon",
  },
  {
    sign: "gemini",
    icon: <GeminiIcon className={styles.icon}/>,
    value: "geminis",
    alt: "gemini icon",
  },
  {
    sign: "cancer",
    icon: <CancerIcon className={styles.icon}/>,
    value: "cancer",
    alt: "cancer icon",
  },
  {
    sign: "leo",
    icon: <LeoIcon className={styles.icon}/>,
    value: "leo",
    alt: "leo icon",
  },
  {
    sign: "virgo",
    icon: <VirgoIcon className={styles.icon}/>,
    value: "virgo",
    alt: "virgo icon",
  },

  {
    sign: "libra",
    icon: <LibraIcon className={styles.icon}/>,
    value: "libra",
    alt: "libra icon",
  },
  {
    sign: "scorpio",
    icon: <ScorpioIcon className={styles.icon}/>,
    value: "escorpio",
    alt: "scorpio icon",
  },
  {
    sign: "sagittarius",
    icon: <SagittariusIcon className={styles.icon}/>,
    value: "sagitario",
    alt: "sagittarius icon",
  },
  {
    sign: "capricorn",
    icon: <CapricornIcon className={styles.icon}/>,
    value: "capricornio",
    alt: "capricorn icon",
  },
  {
    sign: "aquarius",
    icon: <AquariusIcon className={styles.icon}/>,
    value: "acuario",
    alt: "aquarius icon",
  },
  {
    sign: "pisces",
    icon: <PiscesIcon className={styles.icon}/>,
    value: "piscis",
    alt: "pisces icon",
  },
];
export default function TheZodiacList(props: {
  zodiacs: string | string[] | null;
}) {
  return (
    <ul className={styles.zodiac}>
      {zodiac.map((sign: any, idx: number) => {
        if (props.zodiacs?.includes(sign.value)) {
          return (
            <li key={idx}>
              {sign.icon}
            </li>
          );
        }
      })}
    </ul>
  );
}
