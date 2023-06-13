// Intersection types
// is an intersection of common properties of both the types along with unique properties of each one of them.

type Cat2 = {
  name: string;
  purrs: boolean;
  color: string;
};

type Dog2 = {
  name: string;
  barks: boolean;
  color: string;
};

// we will create a new intersection type using "&" sign. TS will take all the all common properties from those 2 types first like name and color. Apart common properties TS will pick up all unique props as well like purrs and barks. Our HybridAnimal will have 4 properties: name, color, purrs and barks.
type HybridAnimal = Dog2 & Cat2;

// we will try to make an animal with name, color, and one unique prop. Because this is intersection type we will get an error
const hybridAnimal: HybridAnimal = {
  name: "Max",
  color: "White",
  barks: true,
  purrs: false, // we need to use all interseciton type props if we wont get an error.
};
