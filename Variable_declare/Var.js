// variable delare with var
// 1: Scope
var a = 20; // Global Scope

function print() {
  // console.log("a", a);
  var ab = 45; // Local Scope
}
print();
// console.log("ab", ab); // ReferenceError: ab is not defined

// 2: redeclare  and reassign
var num;
// console.log("num", num); // Undefined

num = 100;
// console.log("num redeclare", num); // redeclare

num = 200;
// console.log("num reassign", num); // reassign

// 3: Hoist لہرانا, کس جگہ پر ڈیکلئیر کرنا ہے

console.log("Hoist", num); // undefined

var num = 34;

console.log("After Hoist", num);

// Local scope example

function print() {
  var square = number * number; // Undefined * Undefined
  console.log("square", square); // Nan

  var number = 50;

  var square2 = number * number;
  console.log("square2", square2);
}
print();
