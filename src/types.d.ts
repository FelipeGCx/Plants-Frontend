import { Interface } from "readline";

interface Plant {
  id: number;
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
  imageFront: string;
  render: string;
  createdAt: string;
  inside: boolean;
}
interface PlantFavorite extends Plant {
  state: boolean;
  quantity: number;
  discount: number;
  price: number;
  favorite: boolean;
}

interface PlantStock {
  id: number;
  plant: Plant;
  quantity: number;
  price: number;
  discount: number;
  state: boolean;
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
interface Crystal {
  id: number;
  name: string;
  description: string;
  vibration: number;
  benefits: Array<string>;
  properties: Array<string>;
  zodiac: Array<string>;
  planets: Array<string>;
  elements: Array<string>;
  chakras: Array<string>;
  imageCrystal: string;
  imageGemstone: string;
}

interface CrystalStock extends Crystal {
  quantity: number;
  price: number;
  state: boolean;
}

interface CrystalFav extends CrystalStock {
  favorite: boolean;
}

interface PlantsQParams {
  species: string | string[] | null;
  light: string | string[] | null;
  irrigation: string | string[] | null;
  zone: string | string[] | null;
  priceFirst: string | string[] | null;
  priceSecond: string | string[] | null;
}

interface CrystalsQParams {
  zodiac: string | string[] | null;
  elements: string | string[] | null;
  planets: string | string[] | null;
  chakras: string | string[] | null;
}

interface Pot {
  id: number;
  name: string;
  price: number;
  image: string;
  render: string;
  quantity: number;
}

interface Product {
  id: number;
  name: string;
  idPot: number;
  potName: string;
  renderPot: string;
  idCrystal: number;
  crystalName: string;
  plantPrice: number;
  potPrice: number;
  crystalPrice: number;
  price: number;
  imagePlant: string;
  imageCrystal: string;
  quantity: number;
  [key: string]: any;
}
interface ProductTicket {
  name: string;
  quantity: number;
  price: number;
}

interface Cart {
  plant: number;
  pot: number;
  crystal: number;
  quantity: number;
}

interface Request {
  page: number;
  results:
    | Plant[]
    | Crystal[]
    | PlantFavorite[]
    | CrystalFav[]
    | CrystalStock[]
    | PlantStock[]
    | string[];
  totalItems: number;
  totalPages: number;
}