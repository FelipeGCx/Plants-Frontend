const directory = "./assets";
const planets = [
  {
    name: "sun",
    icon: require(`${directory}/planets/sun.svg`).default.src,
    alt: "sun icon",
  },
  {
    name: "mercury",
    icon: require(`${directory}/planets/mercury.svg`).default.src,
    alt: "mercury icon",
  },
  {
    name: "venus",
    icon: require(`${directory}/planets/venus.svg`).default.src,
    alt: "venus icon",
  },
  {
    name: "earth",
    icon: require(`${directory}/planets/earth.svg`).default.src,
    alt: "earth icon",
  },
  {
    name: "mars",
    icon: require(`${directory}/planets/mars.svg`).default.src,
    alt: "mars icon",
  },
  {
    name: "jupiter",
    icon: require(`${directory}/planets/jupiter.svg`).default.src,
    alt: "jupiter icon",
  },
  {
    name: "saturn",
    icon: require(`${directory}/planets/saturn.svg`).default.src,
    alt: "saturn icon",
  },
  {
    name: "uranus",
    icon: require(`${directory}/planets/uranus.svg`).default.src,
    alt: "uranus icon",
  },
  {
    name: "neptune",
    icon: require(`${directory}/planets/neptune.svg`).default.src,
    alt: "neptune icon",
  },
  {
    name: "pluto",
    icon: require(`${directory}/planets/pluto.svg`).default.src,
    alt: "pluto icon",
  },
  {
    name: "moon",
    icon: require(`${directory}/planets/moon.svg`).default.src,
    alt: "moon icon",
  },
];

export default planets;
