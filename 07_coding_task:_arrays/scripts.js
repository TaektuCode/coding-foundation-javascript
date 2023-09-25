// Task1: removeItem function

// TODO: Implement the removeItem function

const removeItem = function (arr, i) {
  const newArray = arr.slice();
  newArray.splice(i, 1);
  return newArray;
};

const ainmals = ["Dog", "Cat", "Lion"];
console.log(removeItem(ainmals, 1));
// result should be: ["Cat", "Lion"]

console.log(ainmals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

//Task2: sumOfCharacters function

// TODO: Implement the sumOfCharacters function

const sumOfCharacters = function (arr) {
  let result = 0;
  for (let arrEntry of arr) {
    if (typeof arrEntry === "string") {
      result += arrEntry.length;
    }
  }
  return result;
};

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55
