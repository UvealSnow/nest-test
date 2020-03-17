export class Product {
  constructor(
    public id: string, 
    public title: string, 
    public description: string, 
    public price: number
  ) {
    // This is a TS shorthand to set the arguments of the constructor as
    // public/private properties of the class automatically
  }
}