"use strict";

// Task1 : oddNumbers function

// TODO: Implement the oddNumbers function

const oddNumbers = function (a, b) {
  //declare a variable with an empty string
  let result = "";
  // check value a and value b (they should not be negativ)
  if (a >= 0 && b >= 0) {
    //loop through the parameters
    for (let i = a; i < b; i++) {
      //check for odd Num
      if (i % 2 !== 0) {
        //store odd numbers in result, sperated by commas

        result += i + ", ";
      }
    }
    return result;
  } else {
    return "not a valid value!";
  }
};

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

//Task2: charCount function

// TODO: Implement the charCount function
const charCount = function (str, char) {
  // set the case intensitive
  str = str.toLowerCase();
  char = char.toLowerCase();

  //check length of the char parameter (should not be longer then 1)
  if (char.length !== 1) {
    return "your charakter can just be one letter !";
  }

  //Variable for the counted chars
  let countedChars = 0;

  //Loop through the given string
  for (let i = 0; i < str.length; i++) {
    // Store the charakter in countedChars (if there is one)
    if (str[i] === char) {
      countedChars++;
    }
  }

  if (countedChars === 0) {
    return "No matching characters in the String";
  }

  return countedChars;
};

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
