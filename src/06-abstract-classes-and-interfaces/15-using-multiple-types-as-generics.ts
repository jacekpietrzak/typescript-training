/**
 * 15-using-multiple-types-as-generics
 */

// we start with creating interface.
// if we look at those properties we see that there are very generic. User can insert any string in type which doesnt need to be an automobile type. Our interface here is way to flexible. We want to have strict typeing but still have a flexibility for a user.
// We want to restrict values that our user can put in our
// This is a case where we can use generics.
// lets convert it to generics to do that we need to add them after name of interface in <Prop, Prop... >
// We will create some enums for all of those to pass to the interface.

enum AutomobileTypes0615 {
  car = "car",
  bus = "bus",
  van = "van ",
  truck = "truck",
  bike = "bike",
}

enum AutomobileBrands0615 {
  ferrari = "ferrari",
  honda = "honda",
  bmw = "bmw",
  toyota = "toyota",
}

enum AutomobileColors0615 {
  red = "red",
  blue = "blue",
  white = "white",
  black = "black",
  silver = "silver",
}

interface Automobile0615<Type, Brand, Colors> {
  type: Type;
  brand: Brand;
  colors: Colors[];
  description: string;
}

// we will create a constant of ferrari that type is Automobile0615 and we need to pass generics. We will pass generics that we created.
// We dont need to pass enums as generic values. We can pass any type of values.
const ferrari: Automobile0615<
  AutomobileTypes0615,
  AutomobileBrands0615,
  AutomobileColors0615
> = {
  type: AutomobileTypes0615.car,
  brand: AutomobileBrands0615.ferrari,
  colors: [AutomobileColors0615.black, AutomobileColors0615.red],
  description: "this is a ferrari",
};

// we will try to create new object but by passing strings. Because we defined all generics as strings we will need to use striungs. We can see here that this Automobile type that we created is very flexible.
const honda: Automobile0615<string, string, string> = {
  type: "car",
  brand: "honda",
  colors: ["red", "blue"],
  description: "this is honda",
};

// for this instance we will create a Toyota car but it will have its own color codes

const toyota: Automobile0615<string, AutomobileBrands0615, number> = {
  type: "car",
  brand: AutomobileBrands0615.toyota,
  colors: [111, 222],
  description: "This is Toyota",
};

console.log(ferrari);
console.log(honda);
console.log(toyota);
