const directory = "./assets";

const elements = [
  {
    name: "air",
    icon: require(`${directory}/elements/air.svg`).default.src,
    value: "aire",
    alt: "air icon",
  },
  {
    name: "fire",
    icon: require(`${directory}/elements/fire.svg`).default.src,
    value: "fuego",
    alt: "fire icon",
  },
  {
    name: "water",
    icon: require(`${directory}/elements/water.svg`).default.src,
    value: "agua",
    alt: "water icon",
  },
  {
    name: "earth",
    icon: require(`${directory}/elements/earth.svg`).default.src,
    value: "tierra",
    alt: "earth icon",
  },
];
export default elements;
