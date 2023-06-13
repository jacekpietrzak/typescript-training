/** Type Inference
 */
let firstName: string = "John";
// if we assign a value to a variable TS will automaticaly define a type for us.
let firstName3 = "John";
// if we try to assing different type to this variable TS wont let us.
// firstName3 = 1;

const number1 = 85;

// because number2 is a variable and can be overwritten TS automaticaly assing a type to this variable.
let number2 = 85;
// number2 = {} we cant assing object to this variable because it was declared as a number

/** What is the bes practice with declaring types?
 * Let Typescript do that for us. Only explicitly declare types where it is needed.
 */
// we declare a variable finalResult where we know that in the future will have a result of two numbers. Hence it will by of type number. Because we didnt assigned any value TS doesnt know what type of variable is it. It would be the best to let TS know what type is it. If we dont declare we will have variable of "any" type and this is not what we want.
let finalResult: number;

function addNumber(a: number, b: number) {
  return a + b;
}

finalResult = addNumber(5, 10);
console.log(finalResult);

/** Overall we decler type when we need to and the rest we leave to TS */
