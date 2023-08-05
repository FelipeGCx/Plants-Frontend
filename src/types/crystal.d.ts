//*||||||||||||||||||||*\\
//* Crystal Interfaces *\\
//*||||||||||||||||||||*\\

export interface Crystal {
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

export interface CrystalStock extends Crystal {
  state: boolean;
  quantity: number;
  price: number;
}

export interface CrystalFavorite extends CrystalStock {
  favorite: boolean;
}

export interface CrystalPresentation {
  id: number;
  name: string;
  properties: Array<string>;
  vibration: number;
  zodiac: Array<string>;
  imageCrystal: string;
}

export interface CrystalsQParams {
  zodiac: string | string[] | null;
  elements: string | string[] | null;
  planets: string | string[] | null;
  chakras: string | string[] | null;
}
