// Practice Map function

type MapType = {
  <T, U>(array: T[], func: (item: T) => U): T[] | U[];
};

const map: MapType = (array, func) => {
  // check if the array is empty
  if (array.length === 0) {
    return array;
  }

  // create a new array to collect values
  let result = [];

  // loop through each item of array and call the function
  for (let i = 0; i < array.length; i++) {
    // let item = array[i];
    // result.push(func(item));

    result[i] = func(array[i]);
  }

  // return new array
  return result;
};

// lets check our function
let numbers3 = [4, 9, 16, 25];
let numbers4 = [];
console.log(map(numbers3, Math.sqrt));

function multiplyByTen(item: number) {
  return item * 10;
}
console.log(map(numbers3, multiplyByTen));

function toString(item: number): string {
  return item.toString();
}

console.log(map(numbers3, toString));
