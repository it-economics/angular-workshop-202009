const { v4: uuidv4 } = require("uuid");

console.log(uuidv4());

// number
var x = 3;
// let
// const
// console.log(x);

// string
let s = "3";
console.log(s);

/*
function print(elem) {
  console.log(elem);
}
*/

const print = (elem) => {
  console.log(elem);
};

print(s);

let n = undefined;
let calculation;

// null;
// undefined;

const person = {
  name: "Vlad",
  grades: [],
};

console.log(person.name);
//if (person.age !== undefined && person.age !== null && person.age !== '' && person.age !== 0) {
if (!!person.grades && person.grades.length > 0) {
  console.log(person.grades);
}

console.log(typeof x);
console.log(typeof s);
console.log(typeof print);

let arr = [];

const add = (x, y) => {
  return x + y;
};

console.log(add(1, 2));
console.log(add("Hello ", "World!"));

console.log(add3(1));
console.log(add3("Hello"));

const sum = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  /*
  arr.array.forEach(element => {
      sum += element;
  });
  */

  return sum;
};

const add3 = (x) => {
  // let y = 3;
  const y = 3;
  // y = 5;
  return add(x, 3);
};

module.exports = {
  add3,
};
