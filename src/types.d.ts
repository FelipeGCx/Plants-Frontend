//*||||||||||||||||||*\\
//* Plant Interfaces *\\
//*||||||||||||||||||*\\

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
  zone: string;
  createdAt: string;
}

interface PlantStock extends Plant {
  state: boolean;
  quantity: number;
  discount: number;
  price: number;
}

interface PlantFavorite extends PlantStock {
  favorite: boolean;
}

interface PlantPresentation {
  id: number;
  name: string;
  description: string;
  imageFront: string;
  price: number;
  discount: number;
}

interface PlantsQParams {
  species: string | string[] | null;
  light: string | string[] | null;
  irrigation: string | string[] | null;
  zone: string | string[] | null;
  priceFirst: string | string[] | null;
  priceSecond: string | string[] | null;
}

//*||||||||||||||||||||*\\
//* Crystal Interfaces *\\
//*||||||||||||||||||||*\\

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
  state: boolean;
  quantity: number;
  price: number;
}

interface CrystalFavorite extends CrystalStock {
  favorite: boolean;
}

interface CrystalPresentation {
  id: number;
  name: string;
  properties: Array<string>;
  vibration: number;
  zodiac: Array<string>;
  imageCrystal: string;
}

interface CrystalsQParams {
  zodiac: string | string[] | null;
  elements: string | string[] | null;
  planets: string | string[] | null;
  chakras: string | string[] | null;
}

//*|||||||||||||||||*\\
//* Cart Interfaces *\\
//*|||||||||||||||||*\\

interface Pot {
  id: number;
  name: string;
  price: number;
  image: string;
  render: string;
  quantity: number;
  size: string;
}

//*|||||||||||||||||*\\
//* Cart Interfaces *\\
//*|||||||||||||||||*\\

interface SimpleCart {
  plant: number;
  pot: number;
  crystal: number;
}

interface Cart extends SimpleCart {
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

//*|||||||||||||||||||||*\\
//* Response Interfaces *\\
//*|||||||||||||||||||||*\\

interface Response {
  status: string;
  message: string;
  data: DataResponse;
  code?: number;
  meta?: Object;
}

interface DataResponse {
  pagination?: PaginationResponse;
  results?: Object | Array;
}

interface PaginationResponse {
  page: number;
  totalPages: number;
  totalItems: number;
}
