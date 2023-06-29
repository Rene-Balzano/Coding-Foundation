// TODO: Implement the removeItem function

function removeItem(arr, index) {
  if (index >= 1 && index <= arr.length) {
    let newArr = arr.slice(0, index - 1).concat(arr.slice(index));
    return newArr;
  } else {
  }
}

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

//---------------------------------------

// TODO: Implement the sumOfCharacters function

function sumOfCharacters(arr) {
  let Sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      Sum += arr[i].length;
    }
  }

  return Sum;
}

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
