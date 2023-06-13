/** bigInt */
/** JS number type can save numbers
 * Up to 9007199254740991 +(253-1) and
 * Down to -9007199254740991 -(253-1).
 * Integer values outside this range lose precision.
 * BigInt variables are used to store big integer values that are too big to normal JS Number.
 * */
// there are 2 methods to create a bigInt
// 1 constructive mothod
let bigInt1 = BigInt(9213123);
let bigInt2 = 9213123n; // created with literal syntax "n"
console.log(bigInt1);

const safeInt = Number.MAX_SAFE_INTEGER; // returns max safe integer in JS for Number that can be stored safely. If more that that it gets inaccurate.
console.log(safeInt); // 9007199254740991 - max accurate Number in JS

const safeIntPlusOne = safeInt + 1;
const safeIntPlusTwo = safeInt + 2;

console.log(safeIntPlusOne); // 9007199254740992
console.log(safeIntPlusTwo); // 9007199254740992
console.log(safeInt + 3); // 9007199254740994
console.log(safeInt + 4); // 9007199254740996
console.log(safeInt + 5); // 9007199254740996

let a: bigint = BigInt(1234567);
let b: bigint = 213132231n;

// On BigInt you can use all mathematical, comparison operators and conditional statements.
// mathematical operator
let c = safeIntPlusOne - safeIntPlusTwo;
console.log({ c });

// BigInt cant have decimal values
// let d:bigint=12313132.02n

// cant use build in Math object with BigInt
// let d = Math.log(a);
