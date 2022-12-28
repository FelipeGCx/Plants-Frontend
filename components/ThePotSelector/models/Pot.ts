export default class Pot {
  private id: Number;
  private name: string;
  private image: string;
  private price: Number;
  private quantity: Number;

  constructor(
    id: Number,
    name: string,
    image: string,
    price: Number,
    quantity: Number
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.quantity = quantity;
  }

  public getId(): Number {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }
  public getImage(): string {
    return this.image;
  }
  public getPrice(): Number {
    return this.price;
  }
  public getQuantity(): Number {
    return this.quantity;
  }

  public setId(v: Number) {
    this.id = v;
  }
  public setName(v: string) {
    this.name = v;
  }
  public setImage(v: string) {
    this.image = v;
  }
  public setPrice(v: Number) {
    this.price = v;
  }
  public setQuantity(v: Number) {
    this.quantity = v;
  }
}
