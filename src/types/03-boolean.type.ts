// Boolean

let booleanValue: boolean = true;

// Literal values
booleanValue = false;

// example - expression of true or false - expressions return true or false so can be assigned to boolean variable.
booleanValue = typeof "abc" === "string"; // we are
booleanValue = 1 > 0;
booleanValue = 1 < 0;

/**
 * Object and string are not a boolean so they can't be assigned to boolean
 * */
// booleanValue = {};
// booleanValue = "string";

/**
 * Nan, undefind and null are not considered as falsy values so you cant assign them to boolean variable.
 * */
// booleanValue = null;
// booleanValue = undefined;
// booleanValue = NaN;
