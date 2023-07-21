/**
 * 20-interfaces-and-access-modifiers
 * - interfaces are contruct only for a public member of a class
 * - interfaces are a blueprint for the final object that a class wil create. Since objects do not have any access modifiers that applies to the interfaces as well.
 * - our class can have protected and private members but not based on the interface
 * - interface cant have private or protected members
 */

enum AutomobileTypes0619 {
  car = "car",
  bus = "bus",
  van = "van ",
  truck = "truck",
  bike = "bike",
}

enum AutomobileBrands0619 {
  ferrari = "ferrari",
  honda = "honda",
  bmw = "bmw",
  toyota = "toyota",
}

enum AutomobileColors0619 {
  red = "red",
  blue = "blue",
  white = "white",
  black = "black",
  silver = "silver",
}

interface Automobile0619<Type, Brand, Colors> {
  type: Type;
  brand: Brand;
  colors: Colors[];
  description: string;
}

interface CommercialVehicle {
  capacity: string;
  licenseRenewalDate: Date;
}

class Truck0619
  implements
    Automobile0619<string, AutomobileBrands0619, AutomobileColors0619>,
    CommercialVehicle
{
  public type: string = "truck";
  constructor(
    public brand: AutomobileBrands0619,
    public colors: AutomobileColors0619[],
    public description: string,
    public capacity: string,
    public licenseRenewalDate: Date,
    private driverName: string = "John"
  ) {}
}

const toyotaTruck0619: Truck0619 = new Truck0619(
  AutomobileBrands0619.toyota,
  [AutomobileColors0619.silver, AutomobileColors0619.black],
  "This is a Toyota truck",
  "10 tonnes",
  new Date("2024-11-15")
);
