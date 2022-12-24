export default class Crytal {
  public id: number;
  public name: string;
  public propierties: Array<string>;
  public benefits: Array<string>;
  public description: string;
  public vibration: number;
  public zodiac: Array<string>;
  public imageGemstone: string;
  public imagePoint: string;
  public elements: Array<string>;
  public planets: Array<string>;
  public favorite: boolean;

  constructor(
    id: number,
    name: string,
    propierties: Array<string>,
    benefits: Array<string>,
    description: string,
    vibration: number,
    zodiac: Array<string>,
    imageGemstone: string,
    imagePoint: string,
    elements: Array<string>,
    planets: Array<string>,
    favorite: boolean
  ) {
    this.id = id;
    this.name = name;
    this.propierties = propierties;
    this.benefits = benefits;
    this.description = description;
    this.vibration = vibration;
    this.zodiac = zodiac;
    this.imageGemstone = imageGemstone;
    this.imagePoint = imagePoint;
    this.elements = elements;
    this.planets = planets;
    this.favorite = favorite;
  }
}
