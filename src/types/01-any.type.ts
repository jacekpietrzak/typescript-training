const sum = (a: number, b: number): number => {
  return a + b;
};

console.log(sum(2, 5));

console.log("Hello world from ts");

// any type - avoid any type in ts - any type means you can store any type of value in this variable. This is what we want to avoid in TS. The whole purpose of TS is to assign strict types to values. You dont want to use any type. It is the last resort.
let firstName1: any = "Mark";
firstName1 = 2;
firstName1 = [1, 2, 3, 4];

function multiplyByTwo1(number: any): any {
  return number * 2;
}
