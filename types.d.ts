import { Interface } from "readline";

interface Plant {
  name: string;
  otherNames: Array<string>;
  description: string;
  species: string;
  group: string;
  light: Array<string>;
  irrigation: string;
  temperature: string;
  precautions: Array<string>;
  flowering: boolean;
  size: string;
  render: string;
  inside: boolean;
  imageFront: string;
  createdAt: string;
  state: boolean;
}


interface PlantView {
  id: number;
  plant: Plant;
  quantity: number;
  discount: number;
  price: number;
}

interface PlantPresentation {
  id: number;
  name: string;
  description: string;
  imageFront: string;
  price: number;
}

interface CrystalView {
  id: number;
  name: string;
  properties: Array<string>;
  vibration: number;
  zodiac: Array<string>;
  imageCrystal: string;
}
