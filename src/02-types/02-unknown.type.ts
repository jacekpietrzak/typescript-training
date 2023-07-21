// Unknown type - a bit better than any because TS forces you to check type of the value before you use it. You can use it if you dont know at the start what type of the value is. Later on you can test it.

function multiplyByTwo2(number: unknown) {
  if (typeof number === "number") {
    return number * 2;
  }
  return "Please provide a valid number";
}

console.log(multiplyByTwo2(4));
console.log(multiplyByTwo2("4"));
console.log(multiplyByTwo2("john"));
