// Problem with function overloads
// we can use function overloads ane pass type for it and make it safe. Lets declare a type
type Filter2 = {
  (array: number[], predicate: (item: number) => boolean): number[]; // this function overload states that it takes two parameters, array that is a type of array consist of numbers and predicate function that takes one parameter of type number and returns boolean value. In return this entire function return a number array. This function overload is only for numbers. We would need to declare another function overload for strings.
  (array: string[], predicate: (item: string) => boolean): string[];
  //   what if someone would like to use array of objects? Lets include it.
  (array: object[], predicate: (item: object) => boolean): object[];
  //   with this approach there is a lot of repetition of code and implementation of this type of a function will be a hell of a task. TS has a better way for this scenario.
};

function filter2(array: any[], predicate: Function) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (predicate(item)) {
      result.push(item);
    }
  }
  return result;
}
