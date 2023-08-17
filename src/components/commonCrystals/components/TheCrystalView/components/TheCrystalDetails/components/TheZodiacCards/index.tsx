import Image from "next/image";
import styles from "./style.module.scss";
import {
  AquariusIcon,
  AquariusLogo,
  AriesIcon,
  AriesLogo,
  CancerIcon,
  CancerLogo,
  CapricornIcon,
  CapricornLogo,
  GeminiIcon,
  GeminiLogo,
  LeoIcon,
  LeoLogo,
  LibraIcon,
  LibraLogo,
  PiscesIcon,
  PiscesLogo,
  SagittariusIcon,
  SagittariusLogo,
  ScorpioIcon,
  ScorpioLogo,
  TaurusIcon,
  TaurusLogo,
  VirgoIcon,
  VirgoLogo,
} from "../../../../../../../../assets/icons";

const zodiac = [
  {
    sign: "aries",
    icon: <AriesIcon className={styles.icon} />,
    logo: <AriesLogo className={styles.logo} />,
    value: "aries",
    alt: "aries icon",
  },
  {
    sign: "taurus",
    icon: <TaurusIcon className={styles.icon} />,
    logo: <TaurusLogo className={styles.logo} />,
    value: "tauro",
    alt: "taurus icon",
  },
  {
    sign: "gemini",
    icon: <GeminiIcon className={styles.icon} />,
    logo: <GeminiLogo className={styles.logo} />,
    value: "geminis",
    alt: "gemini icon",
  },
  {
    sign: "cancer",
    icon: <CancerIcon className={styles.icon} />,
    logo: <CancerLogo className={styles.logo} />,
    value: "cancer",
    alt: "cancer icon",
  },
  {
    sign: "leo",
    icon: <LeoIcon className={styles.icon} />,
    logo: <LeoLogo className={styles.logo} />,
    value: "leo",
    alt: "leo icon",
  },
  {
    sign: "virgo",
    icon: <VirgoIcon className={styles.icon} />,
    logo: <VirgoLogo className={styles.logo} />,
    value: "virgo",
    alt: "virgo icon",
  },

  {
    sign: "libra",
    icon: <LibraIcon className={styles.icon} />,
    logo: <LibraLogo className={styles.logo} />,
    value: "libra",
    alt: "libra icon",
  },
  {
    sign: "scorpio",
    icon: <ScorpioIcon className={styles.icon} />,
    logo: <ScorpioLogo className={styles.logo} />,
    value: "escorpio",
    alt: "scorpio icon",
  },
  {
    sign: "sagittarius",
    icon: <SagittariusIcon className={styles.icon} />,
    logo: <SagittariusLogo className={styles.logo} />,
    value: "sagitario",
    alt: "sagittarius icon",
  },
  {
    sign: "capricorn",
    icon: <CapricornIcon className={styles.icon} />,
    logo: <CapricornLogo className={styles.logo} />,
    value: "capricornio",
    alt: "capricorn icon",
  },
  {
    sign: "aquarius",
    icon: <AquariusIcon className={styles.icon} />,
    logo: <AquariusLogo className={styles.logo} />,
    value: "acuario",
    alt: "aquarius icon",
  },
  {
    sign: "pisces",
    icon: <PiscesIcon className={styles.icon} />,
    logo: <PiscesLogo className={styles.logo} />,
    value: "piscis",
    alt: "pisces icon",
  },
];
export default function TheZodiacCards(props: {
  zodiacs?: string | string[] | null;
}) {
  return (
    <ul className={styles.zodiac}>
      {zodiac.map((item) => {
        return (
          <li
            key={item.value}
            className={
              props.zodiacs?.includes(item.value) ? styles.include : ""
            }
          >
            {item.logo}
            {item.icon}
          </li>
        );
      })}
    </ul>
  );
}
