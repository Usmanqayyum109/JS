/*
Description
The slice() method returns selected elements in an array, as a new array.

The slice() method selects from a given start, up to a (not inclusive) given end.

The slice() method does not change the original array.

Syntax
array.slice(start, end)

Parameters
Parameter	Description
start	    Optional.
            Start position. Default is 0.
            Negative numbers select from the end of the array.
end	        Optional.
            End position. Default is last element.
            Negative numbers select from the end of the array.

Return Value
A new array containing the selected elements.
*/

const weekNames = [
  "Monday", // 0 , -7
  "Tuesday", // 1 , -6
  "Wedneseday", // 2 , -5
  "Thursday", // 3 , -4
  "Friday", // 4 , -3
  "Saturday", // 5 , -2
  "Sunday", // 6 , -1
];

/*
Using Slice Method
const value = weekNames.slice(0, 4);
console.log(value);
console.log("OrignalArray", weekNames);
*/

/*
Extract the selected days without any array method
let arr = [];
for (let index = 0; index < weekNames.length - 2; index++) {
  arr.push(weekNames[index]);
}
console.log(arr);
*/
