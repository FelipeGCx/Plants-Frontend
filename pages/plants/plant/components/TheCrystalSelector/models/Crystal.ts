export default class Crytal {
  private id: number;
  private name: string;
  private propierties: Array<string>;
  private benefits: Array<string>;
  private description: string;
  private vibration: number;
  private zodiac: Array<string>;
  private imageGemstone: string;
  private imageCrystal: string;
  private elements: Array<string>;
  private planets: Array<string>;
  private favorite: boolean;

  constructor(
    id: number,
    name: string,
    propierties: Array<string>,
    benefits: Array<string>,
    description: string,
    vibration: number,
    zodiac: Array<string>,
    imageGemstone: string,
    imageCrystal: string,
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
    this.imageCrystal = imageCrystal;
    this.elements = elements;
    this.planets = planets;
    this.favorite = favorite;
  }
  public getId(): number {
    return this.id;
  }
  public setId(value: number) {
    this.id = value;
  }
  public getName(): string {
    return this.name;
  }
  public setName(value: string) {
    this.name = value;
  }
  public getpropierties(): Array<string> {
    return this.propierties;
  }
  public setpropierties(value: Array<string>) {
    this.propierties = value;
  }
  public getBenefits(): Array<string> {
    return this.benefits;
  }
  public setBenefits(value: Array<string>) {
    this.benefits = value;
  }
  public getdescription(): string {
    return this.description;
  }
  public setdescription(value: string) {
    this.description = value;
  }
  public getvibration(): number {
    return this.vibration;
  }
  public setvibration(value: number) {
    this.vibration = value;
  }
  public getZodiac(): Array<string> {
    return this.zodiac;
  }
  public setZodiac(value: Array<string>) {
    this.zodiac = value;
  }
  public getImageGemstone(): string {
    return this.imageGemstone;
  }
  public setImageGemstone(value: string) {
    this.imageGemstone = value;
  }
  public getImageCrystal(): string {
    return this.imageCrystal;
  }
  public setImageCrystal(value: string) {
    this.imageCrystal = value;
  }
  public getElements(): Array<string> {
    return this.elements;
  }
  public setElements(value: Array<string>) {
    this.elements = value;
  }
  public getPlanets(): Array<string> {
    return this.planets;
  }
  public setPlanets(value: Array<string>) {
    this.planets = value;
  }
  public getFavorite(): boolean {
    return this.favorite;
  }
  public setFavorite(value: boolean) {
    this.favorite = value;
  }
}
