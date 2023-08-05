//*|||||||||||||||||*\\
//* Cart Interfaces *\\
//*|||||||||||||||||*\\

export interface SimpleCart {
  plant: number;
  pot: number;
  crystal: number;
}

export interface Cart extends SimpleCart {
  quantity: number;
}

export interface Product {
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

export interface ProductTicket {
  name: string;
  quantity: number;
  price: number;
}
