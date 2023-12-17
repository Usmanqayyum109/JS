/*
The sort() sorts the elements of an array.

The sort() overwrites the original array.

The sort() sorts the elements as strings in alphabetical and ascending order.

Syntax
array.sort(compareFunction)

Parameters
Parameter	        Description
compareFunction	  Optional.
                  A function that defines a sort order. The function should return a negative, zero, or positive value, depending on the arguments:
                  function(a, b){return a-b}
                  When sort() compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

Example:

The sort function will sort 40 as a value lower than 100.

When comparing 40 and 100, sort() calls the function(40,100).

The function calculates 40-100, and returns -60 (a negative value).



Return Value
The array with the items sorted.
*/

// const weekNames = ["Monday", "Tuesday", "Wedneseday", "Thursday"];

// const weekNames = [23, 45, 100, 56];

// const weekNames = [23, 2];

// const value = weekNames.sort((a, b) => {
//   const c = a - b;

//   console.log(c);
//   return c;
// });
// console.log(value);

const Studenst = [
  {
    name: "Ali",
    age: "28",
  },
  {
    name: "Hassan",
    age: "29",
  },
  {
    name: "Sara",
    age: "27",
  },
];

const value = Studenst.sort((a, b) => {
  const NameA = Number(a.age);
  const NameB = Number(b.age);
  return NameA - NameB;
});

// Add a new key-value pair to the specified element
// value[0].city = "Lahore";

// Remove a specific key from specified element
// delete value[0].age;

// Add a new key-value pair to all elements
// value.forEach((students) => {
//   students["city"] = "Islamabad";
// });

// Remove a specific key from all elements
// value.forEach((students) => {
//   delete students["city"];
// });

console.log(value);
