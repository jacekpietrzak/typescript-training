// Introducing Generics
// Function onverloading is leading to repetetive code and makes implementing a function with so many possible types very diffcult. TS provides us with Generics to solve this problem.
// if we look at the filter type we see that there is a pattern for each of the signatures.
type Filter3 = {
  (array: number[], predicate: (item: number) => boolean): number[]; // this function overload states that it takes two parameters, array that is a type of array consist of numbers and predicate function that takes one parameter of type number and returns boolean value. In return this entire function return a number array. This function overload is only for numbers. We would need to declare another function overload for strings.
  (array: string[], predicate: (item: string) => boolean): string[];
  //   what if someone would like to use array of objects? Lets include it.
  (array: object[], predicate: (item: object) => boolean): object[];
  //   with this approach there is a lot of repetition of code and implementation of this type of a function will be a hell of a task. TS has a better way for this scenario.
};

// in this scenario we can use Generics

type Filter4 = {
  // we will convert first signature to a Generic
  <T>(array: T[], predicate: (item: T) => boolean): T[]; // we are defining a generic type of "T". You can use any word overhere from the pattern that is accepted in the community. T stands for anything. It can be a string, number, object etc. You can use more than one generic type as well. General notation among TS devs is to use letters starting from "T". If the first generic type is "T" than the next one is "U"
};
// now we can change our function type to be Filter4. Before that lets convert it to an arrow function. After we add function type we can remove params types.
const filter4: Filter4 = (array, predicate) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (predicate(item)) {
      result.push(item);
    }
  }
  return result;
};

// lets try how it works
let numbers2 = [1, 2, 5, 7, 9, 10, 12];
function greaterThanSeven2(item: number) {
  return item > 7;
}
console.log(filter4(numbers2, greaterThanSeven2));

// lets try strings
let animals2 = ["cat", "dog", "rat", "lion", "cat", "cats"];
function filterCats2(item: string) {
  return item === "cat";
}
console.log(filter4(animals2, filterCats2));
