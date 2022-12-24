const directory = "./assets";

const elements = [
  {
    name: "air",
    icon: require(`${directory}/elements/air.svg`).default.src,
    alt: "air icon",
  },
  {
    name: "fire",
    icon: require(`${directory}/elements/fire.svg`).default.src,
    alt: "fire icon",
  },
  {
    name: "water",
    icon: require(`${directory}/elements/water.svg`).default.src,
    alt: "water icon",
  },
  {
    name: "earth",
    icon: require(`${directory}/elements/earth.svg`).default.src,
    alt: "earth icon",
  },
];
export default elements;
