//  Object type

let person = {
  name: "Mark",
  age: 24,
};

let car: {
  color: string;
  brand: string;
} = {
  color: "red",
  brand: "bmw",
};

let article: {
  author: string; // all declared properties are mandatory
  content: string;
  title: string;
  image?: string; // this property is optional because we added "?" after property name
};

article = {
  author: "Stella",
  content: "Hey",
  title: "My first article",
};
