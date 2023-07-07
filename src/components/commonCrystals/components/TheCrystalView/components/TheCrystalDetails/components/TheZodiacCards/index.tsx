import Image from "next/image";
import styles from "./style.module.scss";
import ariesIcon from "./assets/zodiac/aries.svg";
import taurusIcon from "./assets/zodiac/taurus.svg";
import geminiIcon from "./assets/zodiac/gemini.svg";
import cancerIcon from "./assets/zodiac/cancer.svg";
import leoIcon from "./assets/zodiac/leo.svg";
import virgoIcon from "./assets/zodiac/virgo.svg";
import libraIcon from "./assets/zodiac/libra.svg";
import scorpioIcon from "./assets/zodiac/scorpio.svg";
import sagittariusIcon from "./assets/zodiac/sagittarius.svg";
import capricornIcon from "./assets/zodiac/capricorn.svg";
import aquariusIcon from "./assets/zodiac/aquarius.svg";
import piscesIcon from "./assets/zodiac/pisces.svg";
import ariesLogo from "./assets/zodiac/aries-logo.svg";
import taurusLogo from "./assets/zodiac/taurus-logo.svg";
import geminiLogo from "./assets/zodiac/gemini-logo.svg";
import cancerLogo from "./assets/zodiac/cancer-logo.svg";
import leoLogo from "./assets/zodiac/leo-logo.svg";
import virgoLogo from "./assets/zodiac/virgo-logo.svg";
import libraLogo from "./assets/zodiac/libra-logo.svg";
import scorpioLogo from "./assets/zodiac/scorpio-logo.svg";
import sagittariusLogo from "./assets/zodiac/sagittarius-logo.svg";
import capricornLogo from "./assets/zodiac/capricorn-logo.svg";
import aquariusLogo from "./assets/zodiac/aquarius-logo.svg";
import piscesLogo from "./assets/zodiac/pisces-logo.svg";

const zodiac = [
  {
    sign: "aries",
    icon: ariesIcon,
    logo: ariesLogo,
    value: "aries",
    alt: "aries icon",
  },
  {
    sign: "taurus",
    icon: taurusIcon,
    logo: taurusLogo,
    value: "tauro",
    alt: "taurus icon",
  },
  {
    sign: "gemini",
    icon: geminiIcon,
    logo: geminiLogo,
    value: "geminis",
    alt: "gemini icon",
  },
  {
    sign: "cancer",
    icon: cancerIcon,
    logo: cancerLogo,
    value: "cancer",
    alt: "cancer icon",
  },
  {
    sign: "leo",
    icon: leoIcon,
    logo: leoLogo,
    value: "leo",
    alt: "leo icon",
  },
  {
    sign: "virgo",
    icon: virgoIcon,
    logo: virgoLogo,
    value: "virgo",
    alt: "virgo icon",
  },

  {
    sign: "libra",
    icon: libraIcon,
    logo: libraLogo,
    value: "libra",
    alt: "libra icon",
  },
  {
    sign: "scorpio",
    icon: scorpioIcon,
    logo: scorpioLogo,
    value: "escorpio",
    alt: "scorpio icon",
  },
  {
    sign: "sagittarius",
    icon: sagittariusIcon,
    logo: sagittariusLogo,
    value: "sagitario",
    alt: "sagittarius icon",
  },
  {
    sign: "capricorn",
    icon: capricornIcon,
    logo: capricornLogo,
    value: "capricornio",
    alt: "capricorn icon",
  },
  {
    sign: "aquarius",
    icon: aquariusIcon,
    logo: aquariusLogo,
    value: "acuario",
    alt: "aquarius icon",
  },
  {
    sign: "pisces",
    icon: piscesIcon,
    logo: piscesLogo,
    value: "piscis",
    alt: "pisces icon",
  },
];
export default function TheZodiacCards(props: {
  zodiacs?: string | string[] | null;
}) {
  return (
    <ul className={ styles.zodiac}>
      {zodiac.map((item) => {
        return (
          <li key={item.value}
            className={ props.zodiacs?.includes(item.value) ? styles.include : "" }
          >
            <Image
              className="icon"
              src={item.logo}
              alt={item.alt}
              width={29}
              height={29}
            />
            <Image
              className="icon"
              src={item.icon}
              alt={item.alt}
              width={16}
              height={16}
            />
          </li>
        );
      })}
    </ul>
  );
}
