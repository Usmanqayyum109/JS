// Variable declate with let
// 1: Scope

let number = 34; // Global Scope

// function print() {
//   let square = number * number; // Local Scope

//   if (number < 50) {
//     var largerNumber = 50;
//     let anotherLargeNumer = 60; // Block Scope

//     console.log("square", square);
//   }

//   console.log("largerNumber", largerNumber);
//   console.log("anotherLargeNumer", anotherLargeNumer); // RefrenceError
// }
// print();

// 2: Redeclartion and reassigning

// let num = 78;
// console.log(num);

// num = 90;
// console.log(num);

// let num = 56;
// console.log(num); // SyntaxError: Identifier 'number' has already been declared

// 3: Hoist لہرانا, کس جگہ پر ڈیکلئیر کرنا ہے

// console.log(num);
// ReferenceError: Cannot access 'number' before initialization

// let num = 50;
