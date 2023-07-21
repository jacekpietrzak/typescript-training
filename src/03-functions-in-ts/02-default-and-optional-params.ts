// default and optional params
// params that we declare in function () are default parameters and are mandatory to provide if we want to run a function. Without them TS will throw an error.
// to make a parameter optional we need to add "?" at the end of the name. Then we can check in the function if the country was provided by the user.
function intro4(name: string, age: number, country?: string): string {
  if (country) {
    return `My name is ${name} and age is ${age}. I live in ${country}`;
  } // if the user provide a country we will return this statement.
  return `My name is ${name} and age is ${age}`; // backticks quotation
}

console.log(intro4("John", 32));
console.log(intro4("John", 32, "Poland"));
