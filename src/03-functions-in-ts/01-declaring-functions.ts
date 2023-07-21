// declaring functions
// we can define what type are parameters and what type of a value this function will return
function intro(name: string, age: number): string {
  return `My name is ${name} and age is ${age}`; // backticks quotation
}

// function expression
const intro2 = function intro(name: string, age: number): string {
  return `My name is ${name} and age is ${age}`; // backticks quotation
};

// arrow function
const intro3 = (name: string, age: number): string => {
  return `My name is ${name} and age is ${age}`;
};
