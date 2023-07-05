import { CrystalFavorite } from "../../types";

export function toArrayCrystalFavorite(objectList: any[]): CrystalFavorite[] {
  return objectList.map((element) => {
    const crystal: CrystalFavorite = {
        favorite: element.favorite,
        quantity: element.quantity,
        price: element.price,
        state: element.state,
        id: element.id,
        name: element.name,
        description: element.description,
        vibration: element.vibration,
        benefits: element.benefits || [],
        properties: element.properties || [],
        zodiac: element.zodiac || [],
        planets: element.planets || [],
        elements: element.elements || [],
        chakras: element.chakras || [],
        imageCrystal: element.imageCrystal,
        imageGemstone: element.imageGemstone
    };
    return crystal;
  });
}
