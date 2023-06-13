// union types with primitive types
// we will make a funciton where we can add numbers or strings. So all parameters can be numbers or strings or one of them can be a nubmer or a string. We will tell TS that each parameter can be either a type of number or a string.

type StringOrNumber = string | number;

function addNumberOrString(a: StringOrNumber, b: StringOrNumber) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}

console.log(addNumberOrString(5, 10));
console.log(addNumberOrString("5", 10));
// if we try use any other type for the argument we will get an error.
// console.log(addNumberOrString("5", null));
