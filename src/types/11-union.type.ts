// Union types

type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

type Cat = {
  name: string;
  purrs: boolean;
  play: boolean;
};

// we will now create a union of these 2 types. To do that we will need a pipe character. This union type gets all properties of Dog and Cat types
type DogAndCatUnion = Dog | Cat;

// we will make a dog object using Dog and Cat union type. If we use properties of Dog type only TS will not throw an error.
let dog: DogAndCatUnion = {
  name: "Buffy",
  barks: true,
  wags: true,
};

let cat: DogAndCatUnion = {
  name: "Frank",
  purrs: true,
  play: true,
};

// Adventage of the union type is that we can make one hybrid type of an animal and use it in different. Union type has to have all the properties of one of the union type object.
let dogAndCat: DogAndCatUnion = {
  name: "hybrid",
  barks: true,
  wags: false,
  purrs: true,
};

// in most of the time you will use union type instead of intersection type.
