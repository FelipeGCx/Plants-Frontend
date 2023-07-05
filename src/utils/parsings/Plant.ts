import { Plant, PlantFavorite, PlantStock } from "../../types";

export function toPlantStock(datos: string[]): PlantStock {
  const [
    idString,
    plantString,
    quantityString,
    priceString,
    discountString,
    stateString,
  ] = datos;
  const id = parseInt(idString);
  const plant = toPlant(plantString);
  const quantity = parseInt(quantityString);
  const price = parseFloat(priceString);
  const discount = parseFloat(discountString);
  const state = stateString === "true";

  return {
    id,
    plant,
    quantity,
    price,
    discount,
    state,
  };
}

export function toPlant(data: string): Plant {
  const {
    id,
    name,
    otherNames,
    description,
    species,
    group,
    light,
    irrigation,
    temperature,
    precautions,
    flowering,
    size,
    imageFront,
    render,
    createdAt,
    inside,
  } = JSON.parse(data);

  return {
    id,
    name,
    otherNames,
    description,
    species,
    group,
    light,
    irrigation,
    temperature,
    precautions,
    flowering,
    size,
    imageFront,
    render,
    createdAt,
    inside,
  };
}

export function toArrayPlant(objectList: any[]): Plant[] {
  return objectList.map((element) => {
    const plant: Plant = {
      id: element.id,
      name: element.name,
      otherNames: element.otherNames || [],
      description: element.description,
      species: element.species,
      group: element.group,
      light: element.light || [],
      irrigation: element.irrigation,
      temperature: element.temperature,
      precautions: element.precautions || [],
      flowering: element.flowering,
      size: element.size,
      imageFront: element.imageFront,
      render: element.render,
      createdAt: element.createdAt,
      inside: element.inside,
    };
    return plant;
  });
}
export function toArrayPlantStock(objectList: any[]): PlantStock[] {
  return objectList.map((element) => {
    const { id, quantity, price, discount, state, ...plant } = element;
    const plantStock: PlantStock = {
      id: element.id,
      plant: toPlant(plant),
      quantity: element.quantity,
      price: element.price,
      discount: element.discount,
      state: element.state,
    };
    return plantStock;
  });
}
export function toArrayPlantFavorite(objectList: any[]): PlantFavorite[] {
  return objectList.map((element) => {
    const plantStock: PlantFavorite = {
      quantity: element.quantity,
      price: element.price,
      discount: element.discount,
      state: element.state,
      favorite: element.favorite,
      id: element.id,
      name: element.name,
      otherNames: element.otherNames || [],
      description: element.description,
      species: element.species,
      group: element.group,
      light: element.light || [],
      irrigation: element.irrigation,
      temperature: element.temperature,
      precautions: element.precautions || [],
      flowering: element.flowering,
      size: element.size,
      imageFront: element.imageFront,
      render: element.render,
      createdAt: element.createdAt,
      inside: element.inside,
    };
    return plantStock;
  });
}
