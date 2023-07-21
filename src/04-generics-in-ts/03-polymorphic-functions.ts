// Polymorphic functions
// Why do we need such a function. Lets try replicate JS filter method.
// firstly we will do that in JS only and after that we will try to add strict types to it.
// filter function takes array and predicate function that returns true or false and return a new array based on that if it return true or false.
function filter(array: any[], predicate: Function) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (predicate(item)) {
      result.push(item);
    }
  }
  return result;
}

// lets run this function. Before that we need to create our array:
let numbers = [1, 2, 5, 7, 9, 10, 12];
// and predicate function
function greaterThanSeven(item: number) {
  return item > 7;
}
// now we can execute our filter function with an array and predicate function that we created.
console.log(filter(numbers, greaterThanSeven));

// now we will try with an array of strings
let animals = ["cat", "dog", "rat", "lion", "cat", "cats"];
// lets create our predicate function that will filter out cats from the array if they exist.
function filterCats(item: string) {
  return item === "cat";
}
// lets try filter function with cat
console.log(filter(animals, filterCats));

// Our function is working perfectly but there is a problem. It is not type safe. Right now we are allowing any array and any type of predicate function. THere is no type safety.
