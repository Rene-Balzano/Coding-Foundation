"use strict";

let userName = "Brad";
userName = "Jenna";

function getUserNameLength(userName) {
  return userName.length;
}

console.log(getUserNameLength(userName) > 4);
// ^______________ Should log true



//-------------------------------------

const isString = function (letter) {
  return typeof letter === "string";
};

// TODO: Implement the isString function

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true
