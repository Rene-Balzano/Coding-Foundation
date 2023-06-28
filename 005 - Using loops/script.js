"use strict";

/*// TODO: Implement the oddNumbers function

function oddNumbers(a, b) {
  let result = "";

  for (let i = a; i < b + 1; i++) {
    if (i % 2 !== 0) {
      if (result === "") {
        result += i;
      } else {
        result += ", " + i;
      }
    }
  }
  return result;
}
console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11
console.log(
  "-----------------------------------------------------------------------"
);
*/

// TODO: Implement the charCount function

function charCount(word, character) {
  if (character.length !== 1) {
    return 0;
  }

  let result = 0;
  word = word.toLowerCase();
  character = character.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    if (word[i] === character) {
      result++;
    }
  }

  return result;
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
