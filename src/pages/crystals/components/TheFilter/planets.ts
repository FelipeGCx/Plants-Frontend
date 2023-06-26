const directory = "./assets";
const planets = [
  {
    name: "sun",
    icon: require(`${directory}/planets/sun.svg`).default.src,
    value: "sol",
    alt: "sun icon",
  },
  {
    name: "mercury",
    icon: require(`${directory}/planets/mercury.svg`).default.src,
    value: "mercurio",
    alt: "mercury icon",
  },
  {
    name: "venus",
    icon: require(`${directory}/planets/venus.svg`).default.src,
    value: "venus",
    alt: "venus icon",
  },
  {
    name: "earth",
    icon: require(`${directory}/planets/earth.svg`).default.src,
    value: "tierra",
    alt: "earth icon",
  },
  {
    name: "mars",
    icon: require(`${directory}/planets/mars.svg`).default.src,
    value: "marte",
    alt: "mars icon",
  },
  {
    name: "jupiter",
    icon: require(`${directory}/planets/jupiter.svg`).default.src,
    value: "jupiter",
    alt: "jupiter icon",
  },
  {
    name: "saturn",
    icon: require(`${directory}/planets/saturn.svg`).default.src,
    value: "saturno",
    alt: "saturn icon",
  },
  {
    name: "uranus",
    icon: require(`${directory}/planets/uranus.svg`).default.src,
    value: "urano",
    alt: "uranus icon",
  },
  {
    name: "neptune",
    icon: require(`${directory}/planets/neptune.svg`).default.src,
    value: "neptuno",
    alt: "neptune icon",
  },
  {
    name: "pluto",
    icon: require(`${directory}/planets/pluto.svg`).default.src,
    value: "pluton",
    alt: "pluto icon",
  },
  {
    name: "moon",
    icon: require(`${directory}/planets/moon.svg`).default.src,
    value: "luna",
    alt: "moon icon",
  },
];

export default planets;
