// Variable declate with let
// 1: Scope

let number = 34; // Global Scope

function print() {
  let square = number * number; // Local Scope

  if (number < 50) {
    var largerNumber = 50;
    let anotherLargeNumer = 60; // Block Scope

    console.log("square", square);
  }

  console.log("largerNumber", largerNumber);
  console.log("anotherLargeNumer", anotherLargeNumer); // RefrenceError
}
print();
