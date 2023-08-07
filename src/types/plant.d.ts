//*||||||||||||||||||*\\
//* Plant Interfaces *\\
//*||||||||||||||||||*\\

export interface Plant {
  id: number;
  name: string;
  otherNames: Array<string>;
  description: string;
  species: string;
  group: string;
  light: string;
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

export interface PlantStock extends Plant {
  state: boolean;
  quantity: number;
  discount: number;
  price: number;
}

export interface PlantFavorite extends PlantStock {
  favorite: boolean;
}

export interface PlantPresentation {
  id: number;
  name: string;
  description: string;
  imageFront: string;
  price: number;
  discount: number;
}

export interface PlantsQParams {
  species: string | string[] | null;
  light: string | string[] | null;
  irrigation: string | string[] | null;
  zone: string | string[] | null;
  priceFirst: string | string[] | null;
  priceSecond: string | string[] | null;
}