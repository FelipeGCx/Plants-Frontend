const directory = "./assets";
const chakras = [
  {
    name: "crown",
    icon: require(`${directory}/chakras/crown.svg`).default.src,
    value: "crown chakra",
    alt: "crown icon",
  },
  {
    name: "heart",
    icon: require(`${directory}/chakras/heart.svg`).default.src,
    value: "heart chakra",
    alt: "heart icon",
  },
  {
    name: "root",
    icon: require(`${directory}/chakras/root.svg`).default.src,
    value: "root chakra",
    alt: "root icon",
  },
  {
    name: "sacral",
    icon: require(`${directory}/chakras/sacral.svg`).default.src,
    value: "sacral chakra",
    alt: "sacral icon",
  },
  {
    name: "solar",
    icon: require(`${directory}/chakras/solar.svg`).default.src,
    value: "solar plexus chakra",
    alt: "solar icon",
  },
  {
    name: "third eye",
    icon: require(`${directory}/chakras/third_eye.svg`).default.src,
    value: "third eye chakra",
    alt: "third eye icon",
  },
  {
    name: "throat",
    icon: require(`${directory}/chakras/throat.svg`).default.src,
    value: "throat chakra",
    alt: "throat icon",
  },
];

export default chakras;
