import styles from "../../style.module.scss";
import {
  AquariusIcon,
  AriesIcon,
  CancerIcon,
  CapricornIcon,
  GeminiIcon,
  LeoIcon,
  LibraIcon,
  PiscesIcon,
  SagittariusIcon,
  ScorpioIcon,
  TaurusIcon,
  VirgoIcon,
} from "../../../../../../assets/icons";
const zodiac = [
  {
    sign: "aries",
    icon: <AriesIcon />,
    value: "aries",
    alt: "aries icon",
  },
  {
    sign: "taurus",
    icon: <TaurusIcon />,
    value: "tauro",
    alt: "taurus icon",
  },
  {
    sign: "gemini",
    icon: <GeminiIcon />,
    value: "geminis",
    alt: "gemini icon",
  },
  {
    sign: "cancer",
    icon: <CancerIcon />,
    value: "cancer",
    alt: "cancer icon",
  },
  {
    sign: "leo",
    icon: <LeoIcon />,
    value: "leo",
    alt: "leo icon",
  },
  {
    sign: "virgo",
    icon: <VirgoIcon />,
    value: "virgo",
    alt: "virgo icon",
  },

  {
    sign: "libra",
    icon: <LibraIcon />,
    value: "libra",
    alt: "libra icon",
  },
  {
    sign: "scorpio",
    icon: <ScorpioIcon />,
    value: "escorpio",
    alt: "scorpio icon",
  },
  {
    sign: "sagittarius",
    icon: <SagittariusIcon />,
    value: "sagitario",
    alt: "sagittarius icon",
  },
  {
    sign: "capricorn",
    icon: <CapricornIcon />,
    value: "capricornio",
    alt: "capricorn icon",
  },
  {
    sign: "aquarius",
    icon: <AquariusIcon />,
    value: "acuario",
    alt: "aquarius icon",
  },
  {
    sign: "pisces",
    icon: <PiscesIcon />,
    value: "piscis",
    alt: "pisces icon",
  },
];
export default function TheZodiacList(props: {
  zodiacs: string | string[] | null;
  changeSelected(filter: string, value: string): void;
}) {
  return (
    <ul>
      {zodiac.map((item) => {
        return (
          <li
            key={item.value}
            className={props.zodiacs?.includes(item.value) ? styles.active : ""}
          >
            <input
              type="checkbox"
              name="chakra"
              id={item.value}
              onChange={() => props.changeSelected("zodiac", item.value)}
              checked={props.zodiacs?.includes(item.value) || false}
            />
            {item.icon}
          </li>
        );
      })}
    </ul>
  );
}
