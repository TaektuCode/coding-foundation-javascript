"use strict";

// TASK 1 //

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

// TASK 2
// TODO: Implement the oddEven function

const oddEven = function (num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

//Task 3
// TODO: Implement the oldYoung function

const oldYoung = function (num) {
  if (num >= 0 && num <= 16) {
    return "children";
  } else if (num > 16 && num < 50) {
    return "young person";
  } else if (num <= 0 || num === NaN) {
    return "invalid Parameter";
  } else {
    return "elder Person";
  }
};

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person
