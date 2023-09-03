"use strict";
/**
 *
 * @param {number} base
 * @param {number} exponent
 * @returns {number || error}
 */
function pow(base, exponent) {
  if (typeof base !== "number") {
    throw new TypeError("base must be a number");
  }
  if (typeof exponent !== "number") {
    throw new TypeError("exponent must be a number");
  }
  if (!Number.isInteger(exponent)) {
    throw new RangeError("exponent must be an integer");
  }
  if (exponent < 0) {
    throw new RangeError("exponent must be a positive number");
  }
  if (exponent === 0) {
    return 1;
  }
  return base * pow(base, exponent - 1);
}
try {
  console.log(pow(2)); //TypeError: exponent must be a number
  console.log(pow('2', 8)); //TypeError: base must be a number
  console.log(pow(2, -8)); //RangeError: exponent must be a positive number
  console.log(pow(2, 0)); //1
  console.log(pow(2, 8)); //256
  console.log(pow(2, 8.1)); //RangeError: exponent must be an integer
} catch (error) {
  if (error instanceof RangeError) {
    console.log("RangeError: " + error.message);
  } else if (error instanceof TypeError) {
    console.log("TypeError: " + error.message);
  } else {
    console.log("Error: " + error.message);
  }
}
