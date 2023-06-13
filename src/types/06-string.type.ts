/** String type
 * anything between "" or '' or ``
 */

let firstName2: string = "Mark";

//  * any expression that evaluates to string is a string
let fullName: string = firstName2 + "" + "Doe";

fullName.split(""); // any string method can be used on this type

// we cant assign number to this variable
// fullName = 111;

// we cant use different methodes than string method
// Math.log(fullName);
