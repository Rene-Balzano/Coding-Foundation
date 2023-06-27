"use strict";

const size = 25;
let result;

if (size > 20) {
  result = "Greater than 20";
} else if (size > 10) {
  result = "Greater than 10";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20
//------------------------------------------------

// TODO: Implement the oddEven function

function oddEven(number) {
  return number & 1 ? "odd" : "even";
}

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

//---------------------------------

// TODO: Implement the oldYoung function

function oldYoung(number) {
  if (typeof number !== "number" || number < 0) {
    return "invalid parameter";
  }
  if (number < 16) {
    return "children";
  }

  if (number < 50) {
    return "young person";
  }

  return "elder person";
}

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person